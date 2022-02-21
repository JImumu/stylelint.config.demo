// npm install stylelint stylelint-config-recommend-vue stylelint-config-recommend-scss

module.exports = {
  root: true,
  extends: ['stylelint-config-recommended-vue/scss'],
  rules: {
    "no-empty-source": null,
    "declaration-empty-line-before": "never",
    "rule-empty-line-before": "always"
  }
}
