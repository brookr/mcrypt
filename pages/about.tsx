import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <div>
      <Head className="flex min-h-screen flex-col items-center justify-center py-2">
        <title>mcrypt this</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1 className="text-6xl font-bold">about mcrypt</h1>

      <p className="mt-4 text-xl">
        Send secure. Read secure. 
      </p>
      <Footer></Footer>
    </div>
  )
}

export default AboutPage