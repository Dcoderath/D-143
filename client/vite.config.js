// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000, // Change to an available port
//     strictPort: true,
//   }
// });




import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // or '0.0.0.0' — allows access via local network IP
    port: 3000,
    strictPort: true,
  }
});
