// ** NextJS Imports
import Head from 'next/head'

// ** Component Imports
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dustin Hunter | Profile</title>
        <meta name="description" content="Dustin Hunter is a web developer and small business owner with an extensive background in web development, business operations, and management." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
    </>
  )
}
