import type { StorybookConfig } from "@storybook/html-webpack5";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-swc"
  ],
  staticDirs: ['./public'],
  framework: {
    name: "@storybook/html-webpack5",
    options: {
      builder: {},
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
