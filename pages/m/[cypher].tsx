import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from '/components/Footer'

function PostPage() {
  const router = useRouter()
  return (
    <div>
      <Head className="flex min-h-screen flex-col items-center justify-center py-2">
        <title>mcrypt this</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-6xl font-bold">Cypher Text</h1>
        <button className="mt-6 rounded-xl border p-3 text-center hover:text-blue-600 focus:text-blue-600">reveal</button>
        <p className="mt-4 text-xl">
          {router.query.cypher}
        </p>
      </main>

      <Footer></Footer>
    </div>
  )
}

export default PostPage