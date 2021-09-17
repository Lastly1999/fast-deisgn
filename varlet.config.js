module.exports = {
  name: 'FastUI',
  namespace: 'b',
  title: 'Fast UI',
  logo: './logo.svg',
  useMobile: true,
  themes: {
    'color-primary': '#0c64eb',
    'color-link': '#3a7afe',
    'color-type': '#0c64eb',
    'color-progress': '#009688',
    'color-side-bar': '#0c64eb',
    'color-side-bar-active-background': '#c8daff',
    'color-app-bar': '#009688',
    'color-mobile-cell-hover': '#009688',
    'color-mobile-cell-hover-background': '#fff',
  },
  highlight: {
    style: './highlight.css',
  },
  pc: {
    redirect: '/home',
    title: {
      'zh-CN': 'Fast UI',
    },
    header: {
      i18n: null,
      github: 'https://github.com/haoziqaq/varlet',
    },
    menu: [
      {
        text: {
          'zh-CN': '开发指南',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': '基本介绍',
        },
        doc: 'home',
        type: 3,
      },
      {
        text: {
          'zh-CN': '基础组件',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Button 按钮',
        },
        doc: 'button',
        type: 2,
      },
    ],
  },
  mobile: {
    redirect: '/home',
    title: {
      'zh-CN': '一个组件库',
    },
    header: {
      i18n: null,
    },
  },
}
