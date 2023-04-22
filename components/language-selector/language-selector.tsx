import { MouseEvent } from 'react'

import { LANGUAGE_SELECTOR } from '@/constants/language-selector'
import { useFsraContext } from '@/contexts/fsra'
import { setLanguage } from '@/utils/set-language'

import styles from '@/components/language-selector/styles.module.scss'

export default function LanguageSelector() {
    const { buttonLabel, buttonDescription } = LANGUAGE_SELECTOR
    const { settings, settings: { lang }, setSettings } = useFsraContext()

    const changeLanguage = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        /*
        console.log('%c changeLanguage', 'color: aqua; font-weight: bold;')
        console.log({ lang })
        */
        const newLang = lang === 'en-CA' ? 'fr-CA' : 'en-CA'
        setLanguage(newLang, settings, setSettings)
    }

    return (
        <button
            className={styles.languageSelector__button}
            onClick={e => changeLanguage(e)}
        >
            <span aria-hidden='true'>{buttonLabel[lang]}</span>
            <span className='visually-hidden'>{buttonDescription[lang]}</span>
        </button>
    )
}