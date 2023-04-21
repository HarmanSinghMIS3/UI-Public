import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

// import '@/styles/globals.css'
import '@/styles/scss/base.scss'

import { SettingsShape, FsraContext } from '@/contexts/fsra'

export default function App({ Component, pageProps }: AppProps) {
  const [ settings, setSettings ] = useState<SettingsShape>({
    activePage: '',
    lang: 'en-CA'
  })

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap')
  }, [])

  return (
    <FsraContext.Provider value={{ settings, setSettings }}>
      <Component {...pageProps} />
    </FsraContext.Provider>
  )
}
