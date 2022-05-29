import { useEffect } from 'react';

function WalletButton({ setCurrentAccount, currentAccount }) {  
  useEffect(() => {
    checkWalletIsConnected();
  }, [])  
  
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
      console.log("Found an account, with address:", accounts);
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

  return (
    <div>
      {currentAccount ? `✅ Wallet Connected` : connectWalletButton()}
    </div>
  );
}

export default WalletButton;
