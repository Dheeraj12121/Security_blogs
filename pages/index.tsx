import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className="   bg-white text-slate-300 dark:bg-slate-900 dark:text-slate-400">
      <Head>
        <title>Security</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>

      
    </div>
  )
}

export default Home
