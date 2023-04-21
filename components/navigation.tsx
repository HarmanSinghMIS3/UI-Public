import { NAVIGATION } from '@/constants/navigation'
import { useFsraContext } from '@/contexts/fsra'

export default function Navigation() {
    const { dashboard, help, comments } = NAVIGATION
    const { settings: { lang } } = useFsraContext()

    return (
        <nav>
            <ul>
                <li>
                    <a href="/dashboard">{dashboard[lang]}</a>
                </li>
                <li>
                    <a href="/help">{help[lang]}</a>
                </li>
                <li>
                    <a href="/comments">{comments[lang]}</a>
                </li>
            </ul>
        </nav>
    )
}