import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

import { MsalProvider } from '@azure/msal-react'
import { Configuration, PublicClientApplication } from '@azure/msal-browser'
import { msalConfig } from '@/pages/api/auth/authConfig'

// import '@/styles/globals.css'
import '@/styles/scss/base.scss'

import { SettingsShape, FsraContext } from '@/contexts/fsra'

export const msalInstance = new PublicClientApplication(msalConfig)

export default function App({ Component, pageProps }: AppProps) {
  const [ settings, setSettings ] = useState<SettingsShape>({
    activePage: '',
    lang: 'en-CA'
  })

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap')
  }, [])

  return (
    <MsalProvider instance={msalInstance}>
      <FsraContext.Provider value={{ settings, setSettings }}>
        <Component {...pageProps} />
      </FsraContext.Provider>
    </MsalProvider>
  )
}
