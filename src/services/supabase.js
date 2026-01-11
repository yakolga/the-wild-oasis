import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://dpbxggjljplxogysospc.supabase.co';
const supabaseKey = 'sb_publishable_sqCXJ3ICrscHuCVGKqWgoA_zMLgHrzx';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;