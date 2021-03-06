import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Tutor = () => {
    const router = useRouter()
    const { tutor } = router.query

    const tutors = {
        andrew: "https://calendly.com/hello-world-school/andrew",
        samir: "https://calendly.com/hello-world-school/samir"
    }

    const url = tutors[tutor];


    useEffect(() => {
        console.log(url)
        console.log(tutor)
        if (tutor in tutors) {
            router.push(url)
        } else {
            return <p>Tutor not found</p>
        }
    })

    return (
        <div className={styles.container}>
        <Head>
          <title>Hello World School</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to Hello World!
          </h1>
  
          <p className={styles.description}>
            You will be redirected in just a second
          </p>
  
        </main>
      </div>
    )

}

export default Tutor