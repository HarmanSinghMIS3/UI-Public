import { useEffect } from 'react'

import { setActivePage } from '@/utils/set-active-page'
import { COMMENTS } from '@/constants/comments'
import { useFsraContext } from '@/contexts/fsra'

import DocumentHead from '@/components/document-head'
import Header from '@/components/header/header'
import SecondaryPageHeader from '@/components/secondary-page-header/secondary-page-header'
import CommentsForm from '@/components/comments-form/comments-form'
import Footer from '@/components/footer/footer'

// import styles from '@/pages/comments/styles.module.scss'

export default function Comments() {
    const { settings, settings: { lang }, setSettings } = useFsraContext()
    const {
        title,
        heading,
        introductionLead,
        introduction
    } = COMMENTS

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
                    <SecondaryPageHeader heading={heading[lang]} />
                    <div className='container'>
                        {/*
                        <p className='lead'>{introductionLead[lang]}</p>
                        <p>{introduction[lang]}</p>
                        */}
                        <CommentsForm />
                    </div>
                </article>
            </main>
            <Footer />
        </>
    )
}