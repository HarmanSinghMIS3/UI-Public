import { useState, useRef, ChangeEvent, SyntheticEvent, FormEvent } from 'react'
import { useFsraContext } from '@/contexts/fsra'
import { LangObjShape } from '@/constants/types'
import { COMMENTS } from '@/constants/comments'
import CommentsFormInputText from '@/components/comments-form-input-text/comments-form-input-text'

import styles from '@/components/comments-form/styles.module.scss'

type InputValidationType = {
    email: boolean;
    subject: boolean;
    comment: boolean;
}

export default function CommentsForm() {
    const { settings: { lang } } = useFsraContext()
    const {
        legend,
        successAlert,
        unsuccessfulAlert,
        invalidEmailAlert,
        invalidSubjectAlert,
        invalidCommentAlert,
        emailLabel,
        subjectLabel,
        commentLabel,
        SubmitLabel
    } = COMMENTS
    const VALID_EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const [ emailInput, setEmailInput ] = useState<string>('')
    const [ subjectInput, setSubjectInput ] = useState<string>('')
    const [ commentInput, setCommentInput ] = useState<string>('')
    const [ invalidValidAlert, setInvalidValidAlert ] = useState<string>('')
    const [ inputValidation, setInputValidation ] = useState<InputValidationType>({
        email: true,
        subject: true,
        comment: true
    })
    const invalidValidAlertRef = useRef<HTMLHeadingElement | null>(null)
    const formRef = useRef<HTMLFormElement | null>(null)

    const changeInputValues = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setStateFunc: (prevVar: string) => void) => setStateFunc(event.target.value)

    const errorAnchor = (event: SyntheticEvent<HTMLAnchorElement>, inputId: string) => {
        event.preventDefault()
        document.getElementById(inputId)?.focus()
    }

    const validateForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const email = emailInput.match(VALID_EMAIL_REGEX) ? true : false
        const subject = subjectInput.length > 0 ? true : false
        const comment = commentInput.length > 1 ? true : false
        const nextInputValidation = { email, subject, comment }
        setInputValidation(nextInputValidation)
        setTimeout(() => invalidValidAlertRef?.current?.focus(), 10);
        if (email && subject && comment) {
            setInvalidValidAlert(successAlert[lang])
            setEmailInput('')
            setSubjectInput('')
            setCommentInput('')
            formRef?.current?.reset()
            return
        }
        setInvalidValidAlert(unsuccessfulAlert[lang])
    }

    const generateErrorListItem = (inputId: string, invalidAlertObj: LangObjShape) => (
        <li>
            <a
                href={`#${inputId}`}
                className={styles.commentsForm__errorListItemLink}
                onClick={e => errorAnchor(e, inputId)}
            >
                {invalidAlertObj[lang]}
            </a>
        </li>
    )

    return (
        <>
            <p className={styles.commentsForm__legend}>{legend[lang]}</p>
            {
                invalidValidAlert &&
                    <h2
                        className={`${styles.commentsForm__alertHeading}${!inputValidation['email'] || !inputValidation['subject'] || !inputValidation['comment'] ? ' ' + styles['commentsForm__alertHeading--fail'] : ' ' + styles['commentsForm__alertHeading--success']}`}
                        ref={invalidValidAlertRef}
                        role='alert'
                        tabIndex={-1}
                    >
                        {invalidValidAlert}
                    </h2>
            }
            <ul>
                {
                    !inputValidation.email &&
                        generateErrorListItem('email', invalidEmailAlert)
                }
                {
                    !inputValidation.subject &&
                        generateErrorListItem('subject', invalidSubjectAlert)
                }
                {
                    !inputValidation.comment &&
                        generateErrorListItem('comment', invalidCommentAlert)
                }
            </ul>
            <form
                id='commentForm'
                ref={formRef}
                noValidate={true}
                onSubmit={e => validateForm(e)}
            >
                <CommentsFormInputText
                    inputId='email'
                    inputLabel={emailLabel}
                    textInputType='email'
                    changeInputValues={changeInputValues}
                    setInput={setEmailInput}
                    required={true}
                    inputValidation={inputValidation}
                    invalidInputAlert={invalidEmailAlert}
                />
                <CommentsFormInputText
                    inputId='subject'
                    inputLabel={subjectLabel}
                    textInputType='text'
                    changeInputValues={changeInputValues}
                    setInput={setSubjectInput}
                    required={true}
                    inputValidation={inputValidation}
                    invalidInputAlert={invalidSubjectAlert}
                />
                <CommentsFormInputText
                    inputId='comment'
                    inputLabel={commentLabel}
                    textInputType='textarea'
                    changeInputValues={changeInputValues}
                    setInput={setCommentInput}
                    required={true}
                    inputValidation={inputValidation}
                    invalidInputAlert={invalidCommentAlert}
                />
                <input
                    type='submit'
                    value={SubmitLabel[lang]}
                    className='btn btn-primary'
                />
            </form>
        </>
    )
}