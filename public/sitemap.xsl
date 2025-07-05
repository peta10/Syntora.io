<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #333;
            max-width: 75em;
            margin: 0 auto;
            padding: 2em;
          }
          h1 {
            color: #1a73e8;
            font-size: 2em;
          }
          table {
            border-collapse: collapse;
            width: 100%;
            margin: 2em 0;
          }
          th, td {
            padding: 1em;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }
          th {
            background-color: #f8f9fa;
            color: #202124;
          }
          tr:hover {
            background-color: #f5f5f5;
          }
          .url {
            color: #1a73e8;
            text-decoration: none;
          }
          .url:hover {
            text-decoration: underline;
          }
          .priority-high {
            color: #188038;
          }
          .priority-medium {
            color: #1967d2;
          }
          .priority-low {
            color: #80868b;
          }
        </style>
      </head>
      <body>
        <h1>Syntora.io Sitemap</h1>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td>
                <a class="url" href="{sitemap:loc}">
                  <xsl:value-of select="sitemap:loc"/>
                </a>
              </td>
              <td><xsl:value-of select="sitemap:lastmod"/></td>
              <td><xsl:value-of select="sitemap:changefreq"/></td>
              <td>
                <xsl:choose>
                  <xsl:when test="sitemap:priority >= 0.8">
                    <span class="priority-high"><xsl:value-of select="sitemap:priority"/></span>
                  </xsl:when>
                  <xsl:when test="sitemap:priority >= 0.5">
                    <span class="priority-medium"><xsl:value-of select="sitemap:priority"/></span>
                  </xsl:when>
                  <xsl:otherwise>
                    <span class="priority-low"><xsl:value-of select="sitemap:priority"/></span>
                  </xsl:otherwise>
                </xsl:choose>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet> 