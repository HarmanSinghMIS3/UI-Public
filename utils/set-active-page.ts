import { ActivePageType } from '@/constants/types'
import { SettingsShape, SetSettingsType } from '@/contexts/fsra';

export function setActivePage(settings: SettingsShape, setSettings: SetSettingsType) {
    const page: ActivePageType = location.pathname.split('/')[1]
    /*
    console.log('%c activePage:', 'color: red; font-weight: bold;')
    console.log({ activePage: page })
    */
    setSettings({
        ...settings,
        activePage: page
    })
}