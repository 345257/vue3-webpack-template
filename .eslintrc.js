module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    //vue
    'plugin:vue/vue3-strongly-recommended', //lv2
    //js
    'eslint:recommended'
  ],
  parserOptions: {
    // parser: 'babel-eslint' //구버전이라 작동하지 않음
  },
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }], 
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
}