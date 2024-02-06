import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  source: {
    entry: {
      index: './src/entry-client.tsx'
    }
  },
  plugins: [pluginReact()],
});
