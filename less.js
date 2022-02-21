// npm install stylelint-config-html postcss-less postcss@^8 postcss-html 

module.exports = {
  root: true,
  extends: ["stylelint-config-html"],
  rules: {
    "no-empty-source": null,
    "declaration-empty-line-before": "never",
    "rule-empty-line-before": "always"
  }
}
