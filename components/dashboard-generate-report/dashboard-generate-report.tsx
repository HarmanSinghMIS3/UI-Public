import { useState, useRef, MouseEvent } from 'react'

import { GLOBAL } from '@/constants/global'
import { DASHBOARD } from '@/constants/dashboard'
import { useFsraContext } from '@/contexts/fsra'
import CheckboxUnchecked from '@/public/images/components/icon-checkbox-unchecked'
import CheckboxChecked from '@/public/images/components/icon-checkbox-checked'

import styles from '@/components/dashboard-generate-report/styles.module.scss'

export default function DashboardGenerateReport() {
    const { settings: { lang } } = useFsraContext()
    const { fsraAbbr, fsraAbbrTitle } = GLOBAL
    const {
        createReport,
        submitReport,
        progressLabel,
        statusMessages,
        processSteps,
        stepIncomplete,
        stepCompleted
    } = DASHBOARD
    const creatingAlertHeading = useRef<HTMLHeadingElement | null>(null)
    const confirmationAlertHeading = useRef<HTMLHeadingElement | null>(null)
    const progressRef = useRef<HTMLDivElement | null>(null)
    const progressBarRef = useRef<HTMLDivElement | null>(null)
    const [currentReportGenerationStep, setCurrentReportGenerationStep] = useState(-1)
    const [ reportSent, setReportSent ] = useState(false)
    const TOTAL_SECONDS = 20
    const STATIC_REPORT_GENERATION_ITERATION = (1000 * TOTAL_SECONDS) / processSteps.length // miliseconds

    const generateReportGenerationSteps = () => {
        const reportLiSteps = processSteps.map((step, i) => {
            /*
            console.log('%c currentReportGenerationStep > i:', 'color: red; font-weight: bold;')
            console.log({ currentReportGenerationStep, i, total: `currentReportGenerationStep > i = ${currentReportGenerationStep < i}` })
            */
            const status = currentReportGenerationStep > i ? stepCompleted : stepIncomplete
            return (
                <li
                    key={`reportGenerationSteps-${i}`}
                    className={styles.reportGenerationSteps__li}
                >
                    <span>{step[lang]}</span>
                    <span className='visually-hidden'>{status[lang]}</span>
                    <div className={styles.reportGenerationSteps__checkbox}>
                        {
                            currentReportGenerationStep > i ?
                                <CheckboxChecked />
                                : <CheckboxUnchecked />
                        }
                    </div>
                </li>
            )
        })
        return reportLiSteps
    }

    const generateReport = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setCurrentReportGenerationStep(0)
        progressRef?.current?.setAttribute('aria-valuenow', '2')
        progressBarRef?.current?.setAttribute('style', 'width: 2%;')
        setTimeout(() => creatingAlertHeading?.current?.focus(), 10)
        creatingAlertHeading?.current?.focus()
        setTimeout(() => {
            setCurrentReportGenerationStep(1) // Step 1: Reading from Sources completed
            progressRef?.current?.setAttribute('aria-valuenow', '25')
            progressBarRef?.current?.setAttribute('style', 'width: 25%;')
            setTimeout(() => {
                setCurrentReportGenerationStep(2) // Step 2: File Validation completed
                progressRef?.current?.setAttribute('aria-valuenow', '50')
                progressBarRef?.current?.setAttribute('style', 'width: 50%;')
                setTimeout(() => {
                    setCurrentReportGenerationStep(3) // Step 3: Building Report template completed
                    progressRef?.current?.setAttribute('aria-valuenow', '75')
                    progressBarRef?.current?.setAttribute('style', 'width: 75%;')
                    setTimeout(() => {
                        setCurrentReportGenerationStep(4) // Step 4: Report Completed
                        progressRef?.current?.setAttribute('aria-valuenow', '100')
                        progressBarRef?.current?.setAttribute('style', 'width: 100%;')
                        setTimeout(() => confirmationAlertHeading?.current?.focus(), 10);
                    }, STATIC_REPORT_GENERATION_ITERATION)
                }, STATIC_REPORT_GENERATION_ITERATION)
            }, STATIC_REPORT_GENERATION_ITERATION)
        }, STATIC_REPORT_GENERATION_ITERATION)
    }

    const sendReport = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setReportSent(true)
        progressBarRef?.current?.classList.remove('progress-bar-striped')
        progressBarRef?.current?.classList.remove('progress-bar-animated')
        confirmationAlertHeading?.current?.focus()
    }
    
    return (
        <>
            <button
                className={styles.reportGenerationSteps__button}
                onClick={e => generateReport(e)}
                disabled={currentReportGenerationStep < 0 ? false : true}
            >
                {createReport[lang]}
            </button>
            <div
                aria-live='polite'
            >
                {
                    (currentReportGenerationStep >= 0 && currentReportGenerationStep < processSteps.length) &&
                        <h2
                            className={styles.reportGenerationSteps__alert}
                            role='alert'
                            ref={creatingAlertHeading}
                            tabIndex={-1}
                        >
                            <abbr title={fsraAbbrTitle[lang]}>{fsraAbbr[lang]}</abbr> {statusMessages[1][lang]}
                        </h2>
                }
                <ol className={styles.reportGenerationSteps__ol}>
                    {generateReportGenerationSteps()}
                </ol>
                <div
                    className={`progress ${styles.reportGenerationSteps__progress}`}
                    ref={progressRef}
                    role='progressbar'
                    aria-label={progressLabel[lang]}
                    aria-valuenow={0}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >
                    <div
                        className='progress-bar progress-bar-striped progress-bar-animated bg-success'
                        ref={progressBarRef}
                        style={{ width: '0' }}
                    />
                </div>
            </div>
            {
                currentReportGenerationStep > processSteps.length - 1 &&
                    <h2
                        className={styles.reportGenerationSteps__alert}
                        role='alert'
                        ref={confirmationAlertHeading}
                        tabIndex={-1}
                    >
                        {
                            reportSent ?
                                    statusMessages[3][lang]
                                : statusMessages[2][lang]
                        }
                    </h2>
            }
            {
                !reportSent &&
                    <button
                        className={styles.reportGenerationSteps__button}
                        onClick={e => sendReport(e)}
                        disabled={currentReportGenerationStep > processSteps.length - 1 ? false : true}
                    >
                        {submitReport[lang]}
                    </button>
            }
        </>
    )
}