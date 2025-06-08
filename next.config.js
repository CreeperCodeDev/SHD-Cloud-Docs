const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js' // 注意：不是 .tsx！
})

module.exports = withNextra
