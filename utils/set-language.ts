import { LangType } from '@/constants/types'
import { SettingsShape, SetSettingsType } from '@/contexts/fsra';

export function setLanguage(language: LangType, settings: SettingsShape, setSettings: SetSettingsType) {
    /*
    console.log('%c setLanguage language', 'color: green; font-weight: bold;')
    console.log({ language })
    */
    document.documentElement.lang = language
    setSettings({
        ...settings,
        lang: language
    })
}