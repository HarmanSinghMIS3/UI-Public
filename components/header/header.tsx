import { useFsraContext } from '@/contexts/fsra'
import { GLOBAL } from '@/constants/global'

import { NAVIGATION } from '@/constants/navigation'

import isActivePage from '@/utils/is-active-page'
import blockActiveLinkClick from '@/utils/block-active-link-click'
import Hamburger from '@/public/images/components/icon-hamburger'

import styles from '@/components/header/styles.module.scss'

export default function Header() {
    const { settings: { activePage, lang } } = useFsraContext()
    const { fsraAbbr, fsraAbbrTitle } = GLOBAL
    const { homeLinkDesc, globalNav, expandHeaderNavigationLabel } = NAVIGATION
    /*
    Remove the “Dashboard” link and the “Logout” button from the 
    header’s navigation list if the home page is the current, active page:
    */
    const filteredGlobalNav = globalNav.filter(li => activePage !== '' || ((!activePage && li.href) && (!activePage && li.page !== 'dashboard')))

    const generateHeaderNavigationLis = () => {
        const headerNavigationLis = filteredGlobalNav.map((li, i) => {
            const isActive = li.page ? isActivePage(li.page) : false
            return (
                <li
                    key={`headerNavigationLi-${i}`}
                    className={`nav-item ${styles.header__navigation__li}${!li.href ? ' ' + styles['header__navigation__li__logout'] : ''}`}
                >
                    <a
                        href={li.href || '/'}
                        className={`${styles.header__navigation__link}${isActive ? ' ' + styles['header__navigation__link__active'] : ''}`}
                        role={!li.href ? 'button' : undefined}
                        aria-current={isActive ? 'page' : undefined}
                        onClick={e => blockActiveLinkClick(e, isActive)}
                    >
                        {li.label[lang]}
                    </a>
                </li>
            )
        })
        return headerNavigationLis
    }

    return (
        <header className={styles.header__container}>
            <div className={`container ${styles.header__navigation}`}>
                <nav
                    className='navbar navbar-expand-lg bg-body-tertiary bg-dark'
                    data-bs-theme='dark'
                >
                    <div className='container-fluid'>
                        <a
                            href='/'
                            className={`navbar-brand ${styles.header__navigation__homeLink}`}
                        >
                            <abbr
                                title={fsraAbbrTitle[lang]}
                                className={styles.header__navigation__homeLink__acronym}
                            >
                                {fsraAbbr[lang]}
                            </abbr>
                            <span className='visually-hidden'>{homeLinkDesc[lang]}</span>
                        </a>
                        <button
                            className={`navbar-toggler ${styles.header__navigation__hamburger}`}
                            data-bs-toggle='collapse'
                            data-bs-target='#navigationHeader'
                            aria-controls='navigationHeader'
                            aria-expanded={false}
                            aria-label={expandHeaderNavigationLabel[lang]}
                        >
                            <span className={styles.header__navigation__hamburger__icon}>
                                <Hamburger />
                            </span>
                        </button>
                        <div
                            className='collapse navbar-collapse'
                            id='navigationHeader'
                        >
                            <ul className={`navbar-nav ${styles.header__navigation__ul}`}>
                                {
                                    generateHeaderNavigationLis()
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}