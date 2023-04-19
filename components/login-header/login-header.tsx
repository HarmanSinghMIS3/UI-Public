import { useFsraContext } from '@/contexts/fsra'
import { GLOBAL } from '@/constants/global'
import { LOGIN } from '@/constants/login'

import styles from '@/components/login-header/styles.module.scss'

export default function LoginHeader() {
    const { settings: { lang } } = useFsraContext()
    const { fsraAbbrTitle, fsraAbbr, fsraFullName, fsraService } = GLOBAL
    const { heading } = LOGIN

    return (
        <header>
            <h1 className={`display-5 fw-bold ${styles.loginHeader__heading}`}>
                <span>
                    <abbr title={fsraAbbrTitle[lang]}>{fsraAbbr[lang]}</abbr>
                </span>
                {/*
                <br />
                <span>{fsraFullName[lang]}</span>
                */}
                <br />
                <span>{fsraService[lang]}</span>
                {/* Maybe the logo can go in here? */}
            </h1>
        </header>
    )
}