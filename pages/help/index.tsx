import { useEffect } from 'react'

import { setActivePage } from '@/utils/set-active-page'
import { HELP } from '@/constants/help'
import { useFsraContext } from '@/contexts/fsra'

import DocumentHead from '@/components/document-head'
import Header from '@/components/header/header'
import SecondaryPageHeader from '@/components/secondary-page-header/secondary-page-header'
import Footer from '@/components/footer/footer'

export default function Help() {
    const { settings, settings: { lang }, setSettings } = useFsraContext()
    const {
        title,
        heading,
        introductionLead,
        introduction,
        introductionClosing,
        questionsAnswers
    } = HELP

    useEffect(() => {
        setActivePage(settings, setSettings)
    }, [])

    /*
    const generateAccordionItems = () => {
        const accordionItems = questionsAnswers.map((qa, i) => {
            return (
                <div
                    key={`accordion-item-${i}`}
                    className='accordion-item'
                >
                    <h2 className='accordion-header'>
                        <button
                            className={`accordion-button${i > 0 ? ' collapsed' : ''}`}
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target={`#collapse-${i}`}
                            aria-expanded='true'
                            aria-controls={`collapse-${i}`}
                        >
                            {qa.question[lang]}
                        </button>
                    </h2>
                    <div
                        id={`collapse-${i}`}
                        className={`accordion-collapse collapse${i > 0 ? '' : ' show'}`}
                        data-bs-parent='#accordionExample'
                    >
                        <div className='accordion-body'>
                            {qa.answer[lang]}
                        </div>
                    </div>
                </div>
            )
        })
        return accordionItems
    }
    */

    return (
        <>
            <DocumentHead
                title={title[lang]}
            />
            <Header />
            <main className='flex-shrink-0'>
                <article>
                    <SecondaryPageHeader heading={heading[lang]} />
                    {/* <Navigation /> */}
                    <div className='container'>
                        <p className='lead'>{introductionLead[lang]}</p>
                        <p>{introduction[lang]}</p>
                        <p>{introductionClosing[lang]}</p>
                        {/*
                        <div
                            className='accordion'
                            id='accordionExample'
                        >
                            {generateAccordionItems()}
                        </div>
                        */}
                    </div>
                </article>
            </main>
            <Footer />
        </>
    )
}