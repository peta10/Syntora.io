export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_public: boolean | null
          owner_id: string
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          owner_id: string
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          owner_id?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          assigned_to: string | null
          created_at: string | null
          description: string | null
          due_date: string | null
          id: string
          priority: string | null
          project_id: string | null
          status: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: string | null
          project_id?: string | null
          status?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          assigned_to?: string | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: string | null
          project_id?: string | null
          status?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tasks_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      time_audit_submissions: {
        Row: {
          id: string
          email: string | null
          industry_id: string
          role_id: string
          size_id: string
          answers: Json
          potential_savings_hours: number | null
          results_message: string | null
          completed: boolean | null
          user_id: string | null
          ip_address: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          email?: string | null
          industry_id: string
          role_id: string
          size_id: string
          answers: Json
          potential_savings_hours?: number | null
          results_message?: string | null
          completed?: boolean | null
          user_id?: string | null
          ip_address?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          email?: string | null
          industry_id?: string
          role_id?: string
          size_id?: string
          answers?: Json
          potential_savings_hours?: number | null
          results_message?: string | null
          completed?: boolean | null
          user_id?: string | null
          ip_address?: string | null
          created_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "time_audit_submissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      contact_submissions: {
        Row: {
          id: string
          first_name: string
          last_name: string
          company_name: string | null
          email: string
          contact_number: string | null
          automation_request: string | null
          ip_address: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          company_name?: string | null
          email: string
          contact_number?: string | null
          automation_request?: string | null
          ip_address?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          company_name?: string | null
          email?: string
          contact_number?: string | null
          automation_request?: string | null
          ip_address?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// Convenience types for better DX
export type Profile = Database['public']['Tables']['profiles']['Row']
export type NewProfile = Database['public']['Tables']['profiles']['Insert']
export type UpdateProfile = Database['public']['Tables']['profiles']['Update']

export type Project = Database['public']['Tables']['projects']['Row']
export type NewProject = Database['public']['Tables']['projects']['Insert']
export type UpdateProject = Database['public']['Tables']['projects']['Update']

export type Task = Database['public']['Tables']['tasks']['Row']
export type NewTask = Database['public']['Tables']['tasks']['Insert']
export type UpdateTask = Database['public']['Tables']['tasks']['Update']

export type TimeAuditSubmission = Database['public']['Tables']['time_audit_submissions']['Row']
export type NewTimeAuditSubmission = Database['public']['Tables']['time_audit_submissions']['Insert']
export type UpdateTimeAuditSubmission = Database['public']['Tables']['time_audit_submissions']['Update']

export type ContactSubmission = Database['public']['Tables']['contact_submissions']['Row']
export type NewContactSubmission = Database['public']['Tables']['contact_submissions']['Insert']
export type UpdateContactSubmission = Database['public']['Tables']['contact_submissions']['Update']

// Task status enum
export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in_progress',
  DONE = 'done'
}

// Task priority enum
export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
} 