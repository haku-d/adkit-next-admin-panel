"use strict";(self.webpackChunkadkit_admin_panel_docs=self.webpackChunkadkit_admin_panel_docs||[]).push([[71],{8853:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=t(5893),r=t(1151);const a={sidebar_position:4},i="Theme",c={id:"theme/setting",title:"Theme",description:"Adkit provides light & dark theme which can be configured by editing `src/theme/themeConfig.js` and `src/app/global.css` file.",source:"@site/docs/theme/setting.md",sourceDirName:"theme",slug:"/theme/setting",permalink:"/docs/theme/setting",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/theme/setting.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Page Layout",permalink:"/docs/structure/layout"},next:{title:"Generator",permalink:"/docs/generator/cli"}},s={},d=[{value:"Light",id:"light",level:2},{value:"Dark",id:"dark",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"theme",children:"Theme"}),"\n",(0,o.jsxs)(n.p,{children:["Adkit provides light & dark theme which can be configured by editing ",(0,o.jsx)(n.code,{children:"src/theme/themeConfig.js"})," and ",(0,o.jsx)(n.code,{children:"src/app/global.css"})," file."]}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsx)(n.p,{children:"If you would like to make some changes, all design tokens are available on Ant-Design offical website."}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://ant.design/docs/react/customize-theme",children:"https://ant.design/docs/react/customize-theme"})})]}),"\n",(0,o.jsx)(n.h2,{id:"light",children:"Light"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"const light = {\n  token: {\n    fontSize: 14,\n    colorPrimary: '#00B96B',\n    borderRadius: 3,\n  },\n  components: {\n    Button: {\n      algorithm: true,\n      onlyIconSize: 14,\n    },\n    Layout: {\n      headerBg: '#fff',\n    },\n    Table: {\n      rowHoverBg: 'rgb(0 185 107 / 25%)',\n      rowSelectedHoverBg: 'rgb(0 185 107 / 25%)',\n      selectionColumnWidth: 46,\n    },\n  },\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"dark",children:"Dark"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"const dark = {\n  token: {\n    fontSize: 14,\n    colorPrimary: '#00B96B',\n    borderRadius: 3,\n    colorText: 'rgba(255, 255, 255, 1)',\n    colorTextQuaternary: 'rgba(255, 255, 255, 0.25)',\n    colorTextSecondary: 'rgba(255, 255, 255, 0.85)',\n    colorTextTertiary: 'rgba(255, 255, 255, 0.65)',\n    colorTextDescription: 'rgba(255, 255, 255, 0.65)',\n    colorTextPlaceholder: 'rgba(255, 255, 255, 0.25)',\n    colorIcon: 'rgba(255, 255, 255, 0.65)',\n    colorBgLayout: '#2b2b2b',\n    colorBgContainer: '#1f1f1f',\n    colorBorderSecondary: '#2b2b2b',\n    colorBgElevated: '#2b2b2b',\n    controlItemBgHover: '#454545',\n    colorErrorBg: '#f34343',\n    colorWarningBg: '#ffc323',\n    colorInfoBg: '#3f98de',\n    colorSuccessBg: '#00B96B',\n  },\n  components: {\n    Button: {\n      onlyIconSize: 14,\n      defaultBg: '#2b2b2b',\n      defaultColor: '#ffffff',\n      textHoverBg: '#2b2b2b',\n      primaryShadow: 'none',\n      defaultShadow: 'none',\n      ghostBg: 'transparent',\n      defaultGhostColor: '#fff',\n      defaultGhostBorderColor: '#fff',\n    },\n    Input: {\n      activeShadow: '0 0 9px 0px rgba(0, 185, 107, 1)',\n    },\n    Layout: {\n      bodyBg: '#2b2b2b',\n      siderBg: '#121212',\n      headerBg: '#121212',\n      triggerBg: '#121212',\n    },\n    Menu: {\n      darkItemBg: '#121212',\n      darkItemHoverBg: '#2b2b2b',\n      darkSubMenuItemBg: '#1f1f1f',\n    },\n    Table: {\n      rowHoverBg: 'rgb(0 185 107 / 25%)',\n      rowSelectedBg: '#2b2b2b',\n      rowSelectedHoverBg: 'rgb(0 185 107 / 25%)',\n      footerBg: '#2b2b2b',\n      selectionColumnWidth: 46,\n    },\n    Select: {\n      optionSelectedBg: '#00B96B',\n    },\n  },\n};\n"})})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var o=t(7294);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);