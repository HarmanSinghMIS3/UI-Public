import { useFsraContext } from '@/contexts/fsra'
import { GLOBAL } from '@/constants/global'
import { DASHBOARD } from '@/constants/dashboard'

import styles from '@/components/dashboard-header/styles.module.scss'

export default function DashboadHeader() {
    const { settings: { lang } } = useFsraContext()
    const { fsraAbbr, fsraAbbrTitle } = GLOBAL
    const { heading } = DASHBOARD

    return (
        <header className={`container ${styles.dashboardHeader__container}`}>
            <h1 className={`display-5 fw-bold ${styles.dashboardHeader__heading}`}>
                <abbr title={fsraAbbrTitle[lang]}>{fsraAbbr[lang]}</abbr>
                &nbsp;
                <span>{heading[lang]}</span>
            </h1>
        </header>
    )
}