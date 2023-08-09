// import path from "path";

const config = {
  // webpack: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src/app"),
  //   },
  // },
  babel: {
    presets: [
      [
        "@babel/preset-react",
        { runtime: "automatic", importSource: "@emotion/react" },
      ],
    ],
    plugins: [
      "@emotion/babel-plugin",
      "babel-plugin-twin",
      "babel-plugin-macros",
    ],
  },
};

export default config;
