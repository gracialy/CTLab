import fs from 'fs';

const envConfigContent = `window.ENV = {
  SUPABASE_URL: "${process.env.SUPABASE_URL}",
  SUPABASE_KEY: "${process.env.SUPABASE_KEY}"
};`;

fs.writeFileSync('public/env-config.js', envConfigContent);