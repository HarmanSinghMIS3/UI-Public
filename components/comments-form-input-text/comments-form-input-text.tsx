import { FC, ChangeEvent } from 'react'

import { useFsraContext } from '@/contexts/fsra'
import { LangObjShape } from '@/constants/types'
import { AUTOCOMPLETE_TOKENS } from '@/constants/autocomplete-tokens'

import styles from '@/components/comments-form-input-text/styles.module.scss'

type CommentsFormInputTextProps = {
    inputId: 'email' | 'subject' | 'comment';
    inputLabel: LangObjShape;
    textInputType: 'text' | 'email' | 'textarea';
    changeInputValues: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setStateFunc: (prevVar: string) => void) => void;
    setInput: (prevVar: string) => void;
    required: boolean;
    inputValidation: { email: boolean; subject: boolean; comment: boolean; }
    invalidInputAlert: LangObjShape;
}

const CommentsFormInputText: FC<CommentsFormInputTextProps> = ({ inputId, inputLabel, textInputType, changeInputValues, setInput, required, inputValidation, invalidInputAlert }: CommentsFormInputTextProps) => {
    const { settings: { lang } } = useFsraContext()
    const { email } = AUTOCOMPLETE_TOKENS

    return (
        <div className={`mb-3${textInputType !== 'textarea' ? ' ' + styles['commentsForm__inputTextContainer'] : ''}${!inputValidation[inputId] ? ' ' + styles['commentsForm__inputTextContainer--error'] : ''}`}>
            <label
                htmlFor={inputId}
                className={`form-label ${styles.commentsForm__label}`}
            >
                {inputLabel[lang]}
            </label>
            <div className={styles.commentsForm__inputWrapper}>
                {
                    textInputType !== 'textarea' ?
                            <input
                                type={textInputType}
                                className={`form-control ${styles.commentsForm__input}`}
                                id={inputId}
                                onChange={e => changeInputValues(e, setInput)}
                                required={required}
                                aria-describedby={!inputValidation[inputId] ? `${inputId}-desc` : undefined}
                                autoComplete={inputId === 'email' ? email : undefined}
                            />
                        :
                        <textarea
                            className={`form-control ${styles.commentsForm__input}`}
                            id={inputId}
                            onChange={e => changeInputValues(e, setInput)}
                            required={required}
                            aria-describedby={!inputValidation[inputId] ? `${inputId}-desc` : undefined}
                        />
                }
            </div>
            {
                !inputValidation[inputId] &&
                    <p
                        className={`invalid-feedback ${styles.commentsForm__invalidFeedback}`}
                        id={`${inputId}-desc`}
                        aria-hidden={true}
                    >
                        {invalidInputAlert[lang]}
                    </p>
            }
        </div>
    )
}

export default CommentsFormInputText