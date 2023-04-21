import { useFsraContext } from '@/contexts/fsra'
import { getCurrentYear } from '@/utils/get-current-year'

import { GLOBAL } from '@/constants/global'
import { NAVIGATION } from '@/constants/navigation'

import isActivePage from '@/utils/is-active-page'
import blockActiveLinkClick from '@/utils/block-active-link-click'
import LanguageSelector from '@/components/language-selector/language-selector'
// import LogoOntarioCoatOfArms from '@/public/images/components/logo-ontario-coat-of-arms'
import PlaceholderLogoFooter from '@/public/images/components/placeholder-logo-footer'

import styles from '@/components/footer/styles.module.scss'

export default function Footer() {
    const { settings: { lang } } = useFsraContext()
    const { copyrightSymbol, fsraFullName } = GLOBAL
    const { footerNav } = NAVIGATION

    const generateFooterNavigationLis = () => {
        const footerNavigationLis = footerNav.map((li, i) => {
            const isActive = li.page ? isActivePage(li.page) : false
            return (
                <li
                    key={`footerNavigationLi-${i}`}
                    className={styles.footerNavigation__li}
                >
                    <a
                        href={li.href}
                        className={`${styles.footerNavigation__link}${isActive ? ' ' + styles['footerNavigation__link--active'] : ''}`}
                        aria-current={isActive ? 'page' : undefined}
                        onClick={e => blockActiveLinkClick(e, isActive)}
                    >
                        {li.label[lang]}
                    </a>
                </li>
            )
        })
        return footerNavigationLis
    }

    return (
        <div className='footer mt-auto py-3 bg-body-tertiary'>
            <div className='container'>
                <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
                    <div className={styles.legalFontSize__container}>
                        <p className={`${styles.legalFontSize__p}`}>{copyrightSymbol[lang]} {getCurrentYear()} {fsraFullName[lang]}</p>
                    </div>
                    <div className={`${styles.logoCoatOfArms__container}`}>
                        <PlaceholderLogoFooter
                            svgStyleKey='placeholderLogoFooter__svg__footer'
                            pathStyleKey='placeholderLogoFooter__path__footer'
                        />
                    </div>
                    <div className={styles.footerNavigation__container}>
                        <nav>
                            <ul className={styles.footerNavigation__ul}>
                                {
                                    generateFooterNavigationLis()
                                }
                            </ul>
                        </nav>
                        <ul className={styles.footerNavigation__ul}>
                            <li className={styles.footerNavigation__li}>
                                <LanguageSelector />
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}