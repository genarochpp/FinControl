import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

// Reemplaza estos valores con los de tu proyecto en Supabase Cloud
// Los encontrás en Supabase: Project Settings -> API (URL y anon/public key)
const supabaseUrl = 'https://qigpzvwequdckiuewdry.supabase.co';
const supabaseAnonKey = 'sb_publishable_a0IGiYW9VbyZoMMvm0x8qA_BWP48e9I';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);