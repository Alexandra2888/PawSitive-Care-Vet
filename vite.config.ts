/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: ['./src/setupTests.ts'],
//   },
// });

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/setupTests.ts"],
    },
    define: {
      "process.env.REACT_APP_API_KEY": JSON.stringify(env.REACT_APP_API_KEY),
      "process.env.REACT_APP_AUTH_DOMAIN": JSON.stringify(
        env.REACT_APP_AUTH_DOMAIN
      ),
      "process.env.REACT_APP_PROJECT_ID": JSON.stringify(
        env.REACT_APP_PROJECT_ID
      ),
      "process.env.REACT_APP_STORAGE_BUCKET": JSON.stringify(
        env.REACT_APP_STORAGE_BUCKET
      ),
      // eslint-disable-next-line prettier/prettier
      "process.env.REACT_APP_MESSAGING_SENDER_ID": JSON.stringify(env.REACT_APP_MESSAGING_SENDER_ID),
      "process.env.REACT_APP_ID": JSON.stringify(env.REACT_APP_ID),
      "process.env": env,
    },
  };
});
