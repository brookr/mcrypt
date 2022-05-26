import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>mcrypt this</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            mcrypt!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Connect Wallet &rarr;</h3>
            <p className="mt-4 text-xl">
              Craft an encrypted message, signd with your private key. To start,
              sign in with your wallet.
            </p>
          </a>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
