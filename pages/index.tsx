/*
import { FC, useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
*/

// import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'

import { setActivePage } from '@/utils/set-active-page'
import { GLOBAL } from '@/constants/global'
import { LOGIN } from '@/constants/login'
import { useFsraContext } from '@/contexts/fsra'

import DocumentHead from '@/components/document-head'
import Header from '@/components/header/header'
import LoginHeader from '@/components/login-header/login-header'
import Footer from '@/components/footer/footer'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { settings, settings: { lang }, setSettings } = useFsraContext()
  const { newBrowserDesc } = GLOBAL
  const { title, link } = LOGIN

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
        <article className='container mt-5'>
          <div className='text-secondary px-4 py-5 text-center'>
            <div className='py-5'>
              <LoginHeader />
              <div className='col-lg-6 mx-auto'>
                {/* <p className='fs-5 mb-4'>{lead[lang]}</p> */}
                <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
                  <a
                    href='/dashboard'
                    target='_blank'
                    role='button'
                    className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                  >
                    {link[lang]}
                    <span className='visually-hidden'>{newBrowserDesc[lang]}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        {/*
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
        */}
      </main>
      <Footer />
    </>
  )
}
