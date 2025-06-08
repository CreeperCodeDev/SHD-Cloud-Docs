import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>SHD Cloud 文檔</span>,
  project: {
    link: 'https://github.com/SHD-Development/SHD-Cloud-Docs'
  },
  chat: {
    link: 'https://dc.shdcloud.xyz'
  },
  docsRepositoryBase:
    'https://github.com/SHD-Development/SHD-Cloud-Docs/tree/main',
  useNextSeoProps() {
    return ({ route }) => {
      if (route === '/') {
        return {
          titleTemplate: 'SHD Cloud 文檔'
        }
      }
      return {
        titleTemplate: '%s – SHD Cloud'
      }
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="SHD Cloud 官方文檔" />
    </>
  ),
  search: {
    placeholder: '在此搜尋...'
  },
  footer: {
    text: 'SHD Cloud 文檔'
  },
  toc: {
    title: '目錄',
    backToTop: true
  },
  feedback: {
    content: '於 GitHub 提出建議 →'
  },
  editLink: {
    text: '於 GitHub 編輯頁面 →'
  },
  themeSwitch: {
    useOptions() {
      return {
        light: '淺色',
        dark: '深色',
        system: '系統'
      }
    }
  },
  gitTimestamp: ({ timestamp }) => {
    return <>上次更新於 {timestamp.toLocaleDateString()}</>
  }
}

export default config
