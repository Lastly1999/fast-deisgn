module.exports = {
  name: 'FastDesign',
  namespace: 'f',
  title: 'FastDesign',
  logo: './logo_big.png',
  useMobile: false,
  themes: {
    'color-primary': '#1d92e9',
    'color-link': '#3a7afe',
    'color-type': '#1d92e9',
    'color-progress': '#1d92e9',
    'color-side-bar': '#1d92e9',
    'color-side-bar-active-background': 'rgba(203,220,255,0.46)',
    'color-app-bar': '#1d92e9',
    'color-mobile-cell-hover': '#1d92e9',
    'color-mobile-cell-hover-background': '#fff'
  },
  highlight: {
    style: './highlight.css'
  },
  pc: {
    redirect: '/home',
    title: {
      'zh-CN': 'FastDesign'
    },
    header: {
      i18n: null,
      github: 'https://github.com/Lastly1999/fast-deisgn'
    },
    menu: [
      {
        text: {
          'zh-CN': '开发指南'
        },
        type: 1
      },
      {
        text: {
          'zh-CN': '基本介绍'
        },
        doc: 'home',
        type: 3
      },
      {
        text: {
          'zh-CN': '基础组件'
        },
        type: 1
      },
      {
        text: {
          'zh-CN': 'Button 按钮'
        },
        doc: 'button',
        type: 2
      },
      {
        text: {
          'zh-CN': 'Icon 图标'
        },
        doc: 'Icon',
        type: 2
      },
      {
        text: {
          'zh-CN': '布局组件'
        },
        type: 1
      },
      {
        text: {
          'zh-CN': 'Layout 布局'
        },
        doc: 'layout',
        type: 2
      },
    ]
  },
  mobile: {
    redirect: '/home',
    title: {
      'zh-CN': '一个组件库'
    },
    header: {
      i18n: null
    }
  }
}
