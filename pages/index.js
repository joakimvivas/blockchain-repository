import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import axios from "axios";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

function SignIn() {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();

  const handleAuth = async (wal) => {
    if (isConnected) {
      await disconnectAsync();
    }

    console.log("Connect To Site Via Wallet");

    const userData = { network: "evm" };

    if (wal === "metamask") {
      const { account, chain } = await connectAsync({
        connector: new MetaMaskConnector({}),
      });
      userData.address = account;
      userData.chain = chain.id;
    }

    if (wal === "coinbase") {
      const { account, chain } = await connectAsync({
        connector: new CoinbaseWalletConnector({}),
      });
      userData.address = account;
      userData.chain = chain.id;
    }

    if (wal === "walletconnect") {
      const { account, chain } = await connectAsync({
        connector: new WalletConnectConnector({ options: { qrcode: true } }),
      });
      userData.address = account;
      userData.chain = chain.id;
    }

    console.log("Sending Connected Account and Chain ID to Moralis Auth API");

    const { data } = await axios.post("/api/auth/request-message", userData, {
      headers: {
        "content-type": "application/json",
      },
    });

    console.log("Received Signature Request From Moralis Auth API");

    const message = data.message;

    const signature = await signMessageAsync({ message });

    console.log("Succesful Sign In, Redirecting to User Page");

    const { url } = await signIn("credentials", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/user",
    });

    push(url);
  };

  return (
    <div className={styles.container}>

      <Head>
        <title>Open Repository on Blockchain and Crypto</title>
        <meta name="description" content="JoakimVivas.com - Open Repository on Blockchain and Crypto" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Open Repository on Blockchain, Web3 <br></br>for DeFi, NFTs, GameFi and Crypto</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
          <h2 style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>Sign in with your Wallet</h2>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <button style={{fontSize: "16px", width: '100%', height: '50px', padding: '10px', color: 'black', backgroundColor: 'orange', margin: '5px', marginTop: '15px', marginBottom: '10px', borderRadius: '100px', border: 'none', flexDirection: 'row', boxShadow: '0px 2px 4px rgba(17, 17, 17, 0.12)', cursor: 'pointer'}} onClick={() => handleAuth("metamask")}>
              Connect via Metamask
              </button>
              <button style={{fontSize: "16px", width: '100%', height: '50px', padding: '10px', color: 'white', backgroundColor: 'blue', margin: '5px', marginTop: '15px', marginBottom: '10px', borderRadius: '100px', border: 'none', flexDirection: 'row', boxShadow: '0px 2px 4px rgba(17, 17, 17, 0.12)', cursor: 'pointer'}} onClick={() => handleAuth("coinbase")}>
              Connect via Coinbase
              </button>
              <button style={{fontSize: "16px", width: '100%', height: '50px', padding: '10px', color: 'black', backgroundColor: 'white', margin: '5px', marginTop: '15px', marginBottom: '10px', borderRadius: '100px', border: 'none', flexDirection: 'row', boxShadow: '0px 2px 4px rgba(17, 17, 17, 0.12)', cursor: 'pointer'}} onClick={() => handleAuth("walletconnect")}>
              Connect via Wallet Connect<br></br>(for Mobile)
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
          <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>Powered by <a href="https://www.joakimvivas.com/" target="_blank" >JoakimVivas.com</a></p>
      </footer>
    </div>
  );
}

export default SignIn;
