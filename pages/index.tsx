import Head from 'next/head';
import Header from '../components/Header';
import Feed from '../components/Feed'


export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>INSTAGRAM 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {header} */}
      <Header/>

      {/* Feed */}
      <Feed/>

    </div>
  )
}
