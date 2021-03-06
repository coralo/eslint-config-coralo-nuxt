const rootDir = process.cwd();

module.exports = {
  extends: [
    "airbnb-base", // Extends Airbnb Base
    "plugin:prettier/recommended" // Extends Prettier
  ],
  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            extensions: [".js", ".vue"],
            alias: {
              "~": rootDir,
              "@": rootDir
            }
          }
        }
      }
    }
  },
  rules: {
    "import/extensions": [
      "error",
      "always",
      {
        // .js and .vue always removed.
        js: "never",
        vue: "never"
      }
    ],

    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    // allow add extra comma when multiline
    "comma-dangle": [2, "only-multiline"],

    // prettier config
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        printWidth: 80,
        singleQuote: true,
        semi: false
      }
    ],

    // if tag has >= 2 attributes, each attributes must write on per line.
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
};
