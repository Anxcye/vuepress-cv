module.exports = {
  title: 'Anxcye\'s Resume',
  base: '/',
  shouldPrefetch: () => false,
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
    config.plugins.delete('prefetch-index')
  },
  themeConfig: {
    navbar: false,
    sidebar: [{
      title: '简历',
      collapsable: false,
      children: ['/']
    },
    ],
  }
}
