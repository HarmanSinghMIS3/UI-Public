import React, { FC } from 'react'

import styles from '@/components/secondary-page-header/styles.module.scss'

type SecondaryPageHeaderProps = {
    heading: string;
}

const SecondaryPageHeader: FC<SecondaryPageHeaderProps> = ({ heading }: SecondaryPageHeaderProps) => {
    return (
        <header className={`container ${styles.secondaryPageHeader__container}`}>
            <h1 className={`display-5 fw-bold ${styles.secondaryPageHeader__heading}`}>{heading}</h1>
        </header>
    )
}

export default SecondaryPageHeader