import { useFsraContext } from '@/contexts/fsra'
import { ActivePageType } from '@/constants/types'

export default function isActivePage(liPage: ActivePageType): boolean {
    const { settings: { activePage } } = useFsraContext()
    return liPage === activePage
}