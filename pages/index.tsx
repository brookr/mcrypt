import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  const [currentAccount, setCurrentAccount] = useState(null);
  
  const checkWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Ensure you have a wallet like MetaMask or Brave available!");
      return;
    } else {
      console.log("Wallet detect, LFG!");
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (0 !== accounts.length) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorizes account found.");
    }
  }

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please set up a wallet first");
      return;
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
      console.log("Found an account, with address:", accounts[0]);
      setCurrentAccount(accounts[0])
    } catch (err) {
      console.log(err);
    }
  }

  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='hover:text-blue-600 focus:text-blue-900 cta-button connect-wallet-button'>
        Connect Wallet
      </button>
    )
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  
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
          <div
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left"
          >
            <h3 className="text-2xl font-bold">Connect Wallet &rarr;</h3>
            <p className="mt-4 text-xl">
              Craft an encrypted message, signed with your wallet's private key.
            </p>
            <div>
            {currentAccount ? `✅ Wallet Connected` : connectWalletButton()}
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
