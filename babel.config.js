const path = require("path")
module.exports = {
  presets: ["@babel/preset-env", "@babel/react"],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [".js", ".jsx"],
        root: ["."],
        alias: {
          src: path.resolve(__dirname, "src/"),
        },
      },
    ],
  ],
};
