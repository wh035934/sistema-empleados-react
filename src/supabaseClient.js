import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://jaaeaztigcafeculbuzo.supabase.co';
const supabaseAnonKey = 'sb_publishable_bBz7uPd4RlnVi3gih9MReg_9Q4T4YlB';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);