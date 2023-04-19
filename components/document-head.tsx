import React, { FC } from 'react'
import Head from 'next/head'

/*
import { LOGIN } from '@/constants/login'
import { useFsraContext } from '@/contexts/fsra'
*/

type HeadProps = {
    title: string;
}

const DocumentHead: FC<HeadProps> = ({ title }: HeadProps) => {
    /*
    const { title } = LOGIN
    const { settings: { lang } } = useFsraContext()
    */

    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}

export default DocumentHead