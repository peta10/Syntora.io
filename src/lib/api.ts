import { supabase } from './supabase';
import { 
  Profile, NewProfile, UpdateProfile,
  Project, NewProject, UpdateProject,
  Task, NewTask, UpdateTask,
  TaskStatus, TaskPriority,
  TimeAuditSubmission, NewTimeAuditSubmission, UpdateTimeAuditSubmission
} from './types';

/**
 * Data access layer for Supabase 
 * Provides typed functions for interacting with your database
 */

// PROFILE OPERATIONS
export async function getProfile(id: string) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    
    return { data: data as Profile, error: null };
  } catch (error) {
    console.error(`Error fetching profile:`, error);
    return { data: null, error };
  }
}

export async function updateProfile(id: string, updates: UpdateProfile) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    
    return { data: data as Profile, error: null };
  } catch (error) {
    console.error(`Error updating profile:`, error);
    return { data: null, error };
  }
}

// PROJECT OPERATIONS
export async function getProjects() {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*');
    
    if (error) throw error;
    
    return { data: data as Project[], error: null };
  } catch (error) {
    console.error('Error fetching projects:', error);
    return { data: null, error };
  }
}

export async function getProjectById(id: string) {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    
    return { data: data as Project, error: null };
  } catch (error) {
    console.error(`Error fetching project:`, error);
    return { data: null, error };
  }
}

export async function createProject(project: NewProject) {
  try {
    const { data, error } = await supabase
      .from('projects')
      .insert(project)
      .select()
      .single();
    
    if (error) throw error;
    
    return { data: data as Project, error: null };
  } catch (error) {
    console.error('Error creating project:', error);
    return { data: null, error };
  }
}

export async function updateProject(id: string, updates: UpdateProject) {
  try {
    const { data, error } = await supabase
      .from('projects')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    
    return { data: data as Project, error: null };
  } catch (error) {
    console.error(`Error updating project:`, error);
    return { data: null, error };
  }
}

export async function deleteProject(id: string) {
  try {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    
    return { success: true, error: null };
  } catch (error) {
    console.error(`Error deleting project:`, error);
    return { success: false, error };
  }
}

// TASK OPERATIONS
export async function getTasks(projectId?: string) {
  try {
    let query = supabase.from('tasks').select('*');
    
    if (projectId) {
      query = query.eq('project_id', projectId);
    }
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    return { data: data as Task[], error: null };
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return { data: null, error };
  }
}

export async function getTaskById(id: string) {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    
    return { data: data as Task, error: null };
  } catch (error) {
    console.error(`Error fetching task:`, error);
    return { data: null, error };
  }
}

export async function createTask(task: NewTask) {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .insert(task)
      .select()
      .single();
    
    if (error) throw error;
    
    return { data: data as Task, error: null };
  } catch (error) {
    console.error('Error creating task:', error);
    return { data: null, error };
  }
}

export async function updateTask(id: string, updates: UpdateTask) {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    
    return { data: data as Task, error: null };
  } catch (error) {
    console.error(`Error updating task:`, error);
    return { data: null, error };
  }
}

export async function deleteTask(id: string) {
  try {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    
    return { success: true, error: null };
  } catch (error) {
    console.error(`Error deleting task:`, error);
    return { success: false, error };
  }
}

// TIME AUDIT SUBMISSIONS
export async function submitTimeAudit(submission: NewTimeAuditSubmission) {
  try {
    // Get the current user ID if logged in
    const { data: { user } } = await supabase.auth.getUser();
    
    // Include user_id if available
    const submissionWithUser = {
      ...submission,
      user_id: user?.id || null,
    };
    
    const { data, error } = await supabase
      .from('time_audit_submissions')
      .insert(submissionWithUser)
      .select()
      .single();
    
    if (error) throw error;
    
    return { data: data as TimeAuditSubmission, error: null };
  } catch (error) {
    console.error('Error submitting time audit:', error);
    return { data: null, error };
  }
}

export async function getTimeAuditSubmission(id: string) {
  try {
    const { data, error } = await supabase
      .from('time_audit_submissions')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    
    return { data: data as TimeAuditSubmission, error: null };
  } catch (error) {
    console.error(`Error fetching time audit submission:`, error);
    return { data: null, error };
  }
}

export async function getAllTimeAuditSubmissions() {
  try {
    const { data, error } = await supabase
      .from('time_audit_submissions')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    return { data: data as TimeAuditSubmission[], error: null };
  } catch (error) {
    console.error('Error fetching time audit submissions:', error);
    return { data: null, error };
  }
}

export async function getTimeAuditSubmissionsByEmail(email: string) {
  try {
    const { data, error } = await supabase
      .from('time_audit_submissions')
      .select('*')
      .eq('email', email)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    return { data: data as TimeAuditSubmission[], error: null };
  } catch (error) {
    console.error(`Error fetching time audit submissions for ${email}:`, error);
    return { data: null, error };
  }
}

// AUTHENTICATION
export async function signUp(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    
    if (error) throw error;
    
    return { data, error: null };
  } catch (error) {
    console.error('Error signing up:', error);
    return { data: null, error };
  }
}

export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    
    return { data, error: null };
  } catch (error) {
    console.error('Error signing in:', error);
    return { data: null, error };
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    
    if (error) throw error;
    
    return { success: true, error: null };
  } catch (error) {
    console.error('Error signing out:', error);
    return { success: false, error };
  }
} 