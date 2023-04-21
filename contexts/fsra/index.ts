import { createContext, useContext } from 'react'

import { ActivePageType, LangType } from '@/constants/types'

export interface SettingsShape {
    activePage: ActivePageType;
    lang: LangType;
}

export type SetSettingsType = ({ activePage, lang }: SettingsShape) => void

interface FsraContextShape {
    settings: SettingsShape;
    setSettings: SetSettingsType;
}

export const FsraContext = createContext<FsraContextShape>({
    settings: {
        activePage: '',
        lang: 'en-CA'
    },
    setSettings: () => {}
})

export const useFsraContext = () => useContext(FsraContext)