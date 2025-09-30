// src/types/index.ts

// Based on the 'profiles' table
export interface Profile {
  id: string; // UUID
  full_name: string | null;
  avatar_url: string | null;
  role: 'student' | 'admin';
}

// Based on the 'courses' table
export interface Course {
  id: number;
  name: string;
  description: string | null;
  created_by: string; // UUID of the creator
  created_at: string; // Timestamp
}

// Based on the 'enrollments' table
export interface Enrollment {
  course_id: number;
  student_id: string; // UUID
}

// Based on the 'attendance' table
export interface Attendance {
  id: number;
  student_id: string; // UUID
  course_id: number;
  class_date: string; // Date
  is_present: boolean;
  marked_by: string | null; // UUID
}

// Based on the 'resources' table
export interface Resource {
  id: number;
  course_id: number;
  uploader_id: string | null; // UUID
  title: string;
  file_type: 'pdf' | 'video' | 'note' | null;
  storage_path: string;
  created_at: string; // Timestamp
}

// Based on the 'personal_notes' table
export interface PersonalNote {
  id: number;
  user_id: string; // UUID
  course_id: number | null;
  title: string | null;
  content: string | null;
  created_at: string; // Timestamp
  updated_at: string; // Timestamp
}

// Based on the 'tasks' table
export interface Task {
  id: number;
  user_id: string; // UUID
  title: string;
  description: string | null;
  due_date: string | null; // Timestamp
  is_completed: boolean;
  created_at: string; // Timestamp
}
