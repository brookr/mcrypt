import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import WalletButton from '../components/WalletButton';

const Home: NextPage = () => {  
  const [currentAccount, setCurrentAccount] = useState(null);
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>mcrypt it</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            mcrypt!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          easy permissionless secure messaging for the blockchain age.{' '}
        </p>
        <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
          write, lock, share securely
        </code>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <div className="mt-6 w-96 rounded-xl border p-6 text-left">
            <h3 className="text-2xl font-bold">Connect Wallet &rarr;</h3>
            <p className="mt-4 text-xl">
              Craft an encrypted message, signed with your wallet's private key.
            </p>
            <WalletButton setCurrentAccount={ setCurrentAccount } currentAccount={ currentAccount }></WalletButton>
          </div>
        </div>
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <div className="mt-6 w-96 rounded-xl border p-6 text-left">
            <h3 className="text-2xl font-bold">Current Account &rarr;</h3>
            <p className="mt-4 text-xl">
              { currentAccount?.substr(0,6) }...
            </p>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
