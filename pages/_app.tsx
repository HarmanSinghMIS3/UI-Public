import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

import { MsalProvider } from '@azure/msal-react'
import { Configuration, PublicClientApplication } from '@azure/msal-browser'

// import '@/styles/globals.css'
import '@/styles/scss/base.scss'

import { SettingsShape, FsraContext } from '@/contexts/fsra'

const msalConfig: Configuration = {
  auth: {
    clientId: '96ac3f26-2ea4-46a9-904b-4fa58e9ed2b0',
    authority: 'https://fsraob2cedc.b2clogin.com/fsraob2cedc.onmicrosoft.com/b2c_1_edc_poc',
    redirectUri: '/dashboard'
  }
}

const pca = new PublicClientApplication(msalConfig)

export default function App({ Component, pageProps }: AppProps) {
  const [ settings, setSettings ] = useState<SettingsShape>({
    activePage: '',
    lang: 'en-CA'
  })

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap')
  }, [])

  return (
    <MsalProvider instance={pca}>
      <FsraContext.Provider value={{ settings, setSettings }}>
        <Component {...pageProps} />
      </FsraContext.Provider>
    </MsalProvider>
  )
}
