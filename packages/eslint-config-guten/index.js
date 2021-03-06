module.exports = {
  "extends": [
    "standard", 
    "plugin:jest/recommended",
    "prettier",
    "prettier/standard"
  ],
  "parser": "babel-eslint",   // for class-properties
  "plugins": [
    "jest",
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["src", "node_modules"]
      }
    }
  },
  "env": {
    "browser": true,         // add global variables, e.g. localStorage
    "jest/globals": true,
  },
  "globals": { pd: true, $: true, $$: true, __DEV__: true },
  "rules": {
    "spaced-comment": "off",    //comment without space, used when editing files with vim
  }
}
