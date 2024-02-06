import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  source: {
    entry: {
      index: './src/entry-server.tsx'
    }
  },
  output: {
    targets: ['node'],
  },
  plugins: [pluginReact()],
});
