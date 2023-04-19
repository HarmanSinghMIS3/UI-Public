import { FC, ChangeEvent } from 'react'

import { useFsraContext } from '@/contexts/fsra'
import { LangObjShape } from '@/constants/types'

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

    return (
        <div className='mb-3'>
            <label
                htmlFor={inputId}
                className='form-label'
            >
                {inputLabel[lang]}
            </label>
            {
                textInputType !== 'textarea' ?
                        <input
                            type={textInputType}
                            className='form-control'
                            id={inputId}
                            onChange={e => changeInputValues(e, setInput)}
                            required={required}
                            aria-describedby={!inputValidation[inputId] ? `${inputId}-desc` : undefined}
                        />
                    :
                    <textarea
                        className='form-control'
                        id={inputId}
                        onChange={e => changeInputValues(e, setInput)}
                        required={required}
                        aria-describedby={!inputValidation[inputId] ? `${inputId}-desc` : undefined}
                    />
            }
            {
                !inputValidation['email'] &&
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