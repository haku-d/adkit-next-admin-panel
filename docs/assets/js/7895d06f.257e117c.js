"use strict";(self.webpackChunkadkit_admin_panel_docs=self.webpackChunkadkit_admin_panel_docs||[]).push([[548],{8239:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(5893),r=n(1151);const a={sidebar_position:3},i="Page Layout",s={id:"structure/layout",title:"Page Layout",description:"Simply, the Adkit includes only 2 layouts. They are auth and main layout. You can find auth layout is used by login, register pages, the main layout is used by others.",source:"@site/docs/structure/layout.md",sourceDirName:"structure",slug:"/structure/layout",permalink:"/docs/structure/layout",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/structure/layout.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Directory Structure",permalink:"/docs/structure/folder"},next:{title:"Theme",permalink:"/docs/theme/setting"}},u={},l=[{value:"Auth layout",id:"auth-layout",level:2},{value:"Main Layout",id:"main-layout",level:2}];function c(t){const e={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"page-layout",children:"Page Layout"}),"\n",(0,o.jsx)(e.p,{children:"Simply, the Adkit includes only 2 layouts. They are auth and main layout. You can find auth layout is used by login, register pages, the main layout is used by others."}),"\n",(0,o.jsx)(e.p,{children:"At the Root layout of Next, we wrap all the content with ThemeProvider and AuthProvider."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",metastring:'title="src/app/layout.js"',children:"import React from 'react';\nimport { Inter } from 'next/font/google';\n\nimport { AuthProvider } from '@/state/auth/auth-context';\nimport { ThemeProvider } from '@/state/theme/theme-context';\n\nexport default function RootLayout({ children }) {\n  return (\n    <html lang=\"en\">\n      <body className={inter.className}>\n        <ThemeProvider>\n          <AuthProvider>{children}</AuthProvider>\n        </ThemeProvider>\n      </body>\n    </html>\n  );\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"auth-layout",children:"Auth layout"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",metastring:'title="src/components/layouts/auth-layout.js"',children:"import { Flex } from 'antd';\nimport { ConfigProvider } from 'antd';\n\nimport light from '@/theme/themeConfig';\n\nconst boxStyle = {\n  width: '100%',\n  minHeight: '100vh',\n  backgroundImage: 'url(\"/bg.jpg\")',\n  backgroundRepeat: 'no-repeat',\n  backgroundSize: 'cover',\n};\n\nexport default function AuthLayout({ children }) {\n  return (\n    <ConfigProvider theme={light}>\n      <Flex style={boxStyle} justify={'space-around'} align={'center'}>\n        {children}\n      </Flex>\n    </ConfigProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"main-layout",children:"Main Layout"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Main layout",src:n(2627).Z+"",width:"1466",height:"874"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",metastring:'title="src/components/layouts/auth-layout.js"',children:"import React from 'react';\nimport { Layout, FloatButton, ConfigProvider } from 'antd';\nimport { QuestionCircleOutlined, CommentOutlined } from '@ant-design/icons';\n\nimport themes from '@/theme/themeConfig';\nimport { useTheme } from '@/state/theme/theme-context';\n\nimport Sider from '@/components/sider';\nimport Header from '@/components/header';\nimport Footer from '@/components/footer';\n\nconst { Content } = Layout;\n\nexport default function MainLayout({ children }) {\n  const { theme } = useTheme();\n\n  return (\n    <ConfigProvider theme={themes[theme]}>\n      <Layout\n        style={{\n          minHeight: '100vh',\n        }}\n        hasSider\n        className={`theme-${theme}`}\n      >\n        <Sider />\n        <Layout>\n          <Header />\n          <Content\n            style={{\n              margin: '0 16px',\n            }}\n          >\n            {children}\n          </Content>\n          <Footer />\n        </Layout>\n        <FloatButton.Group\n          icon={<QuestionCircleOutlined />}\n          type=\"primary\"\n          style={{ right: 24 }}\n          trigger=\"click\"\n        >\n          <FloatButton />\n          <FloatButton icon={<CommentOutlined />} />\n        </FloatButton.Group>\n      </Layout>\n    </ConfigProvider>\n  );\n}\n"})})]})}function d(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(c,{...t})}):c(t)}},2627:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/main-layout-e97bc81f3c92b25f70809bdd4149952b.png"},1151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>i});var o=n(7294);const r={},a=o.createContext(r);function i(t){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),o.createElement(a.Provider,{value:e},t.children)}}}]);