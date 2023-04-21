import { useEffect } from 'react'

import { setActivePage } from '@/utils/set-active-page'
import { DASHBOARD } from '@/constants/dashboard'
import { NAVIGATION } from '@/constants/navigation'
import { useFsraContext } from '@/contexts/fsra'

import DocumentHead from '@/components/document-head'
import Header from '@/components/header/header'
import DashboardHeader from '@/components/dashboard-header/dashboard-header'
import DashboardGenerateReport from '@/components/dashboard-generate-report/dashboard-generate-report'
import Footer from '@/components/footer/footer'

import styles from '@/pages/dashboard/styles.module.scss'

export default function Dashboard() {
    const { settings, settings: { lang }, setSettings } = useFsraContext()
    const {
        title,
        userLabel,
        userValue,
        loginTimeLabel,
        loginTimeValue,
        instructionsLead,
        instructions
    } = DASHBOARD
    const { logOut } = NAVIGATION

    useEffect(() => {
        setActivePage(settings, setSettings)
    }, [])

    return (
        <>
            <DocumentHead
                title={title[lang]}
            />
            <Header />
            <main className='flex-shrink-0'>
                <article>
                    <DashboardHeader />
                    {/* <Navigation /> */}
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-md-5 order-md-1 col-lg-4'>
                                <aside className={styles.userTime__aside}>
                                    <ul className={styles.userTime__ul}>
                                        <li><strong>{userLabel[lang]}</strong> {userValue[lang]}</li>
                                        <li><strong>{loginTimeLabel[lang]}</strong> {loginTimeValue[lang]}</li>
                                    </ul>
                                </aside>
                                <ul className={styles.logOut__ul}>
                                    <li className={styles.logOut__li}>
                                        <a
                                            href="/"
                                            role='button'
                                            className={styles.logOut__button}
                                        >
                                            {logOut[lang]}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-12 col-md-7 col-lg-8'>
                                {/*
                                    <p className='lead'>{instructionsLead[lang]}</p>
                                    <p>{instructions[lang]}</p>
                                */}
                                <DashboardGenerateReport />
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    )
}