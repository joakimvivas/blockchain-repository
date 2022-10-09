import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { getSession, signOut } from 'next-auth/react';
import { ethers } from 'ethers';

// gets a prop from getServerSideProps
function User({ user }) {

    return (
        <div className={styles.container}>

        <Head>
            <title>Open Repository on Blockchain and Crypto</title>
            <meta name="description" content="JoakimVivas.com - Open Repository on Blockchain and Crypto" />
            <link rel="icon" href="/icon.png" />
        </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Welcome!</h1>
                <div className={styles.grid} style={{display: 'flex'}}>
                    <div className={styles.card}>
                        <h2 style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>The Metaverse, beyond fantasy</h2>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>AUTHORED BY:</b> Albert Meige, Rick Eagar, Michael Papadopoulos, Juan Abascal, Primavera De Filippi, Samuel Babinet</p>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>DATE:</b> September 2022</p>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>SUMMARY: </b>For many, the term “Metaverse” first entered their consciousness when Facebook changed its name to Meta in later 2021. At the time, many people assumed it was merely a passing trend, focused on gamers and younger audiences, with little or no relevance to them or their businesses. However, key players and consultancies have since been falling over themselves to declare its huge potential, outdoing each other with the scale of their market forecasts. In this report we have sought to provide a realistic picture for businesses, focusing in particular on the technologies that are necessary to realize the Metaverse.</p>
                        <img src="/images/MetaverseBeyondFantasy.png" alt="The Metaverse, beyond fantasy" width="100%" height="100%"></img>
                        <a href="/docs/7187661664353.pdf" target="_blank"><button style={{fontSize: "16px", width: '100%', height: '50px', padding: '10px', color: 'white', backgroundColor: 'blue', margin: '5px', marginTop: '15px', marginBottom: '10px', borderRadius: '100px', border: 'none', flexDirection: 'row', boxShadow: '0px 2px 4px rgba(17, 17, 17, 0.12)', cursor: 'pointer'}}>Download</button></a>
                    </div>
                    <div className={styles.card}>
                        <h2 style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>Web3 beyond the hype</h2>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>AUTHORED BY: </b>Anutosh Banerjee, Robert Byrne, Ian De Bode, and Matt Higginson</p>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>DATE: </b>September 2022</p>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>SUMMARY: </b>While buffeted by the recent market downturn and bankruptcies, digital assets and the technologies underlying them still have the potential to transform business models across sectors.</p>
                        <img src="/images/Web3beyondthehype.png" alt="Web3 beyond the hype" width="100%" height="100%"></img>
                        <a href="/docs/1664353718766.pdf" target="_blank"><button style={{fontSize: "16px", width: '100%', height: '50px', padding: '10px', color: 'white', backgroundColor: 'blue', margin: '5px', marginTop: '15px', marginBottom: '10px', borderRadius: '100px', border: 'none', flexDirection: 'row', boxShadow: '0px 2px 4px rgba(17, 17, 17, 0.12)', cursor: 'pointer'}}>Download</button></a>
                    </div>
                    <div className={styles.card}>
                        <h2 style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>The Metaverse Overview: Vision, Technology, and Tactics</h2>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>AUTHORED BY: </b>Deloitte</p>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>DATE: </b>September 2022</p>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>SUMMARY: </b>With the sharp drop in Meta's stock price in February 2022, the global Metaverse craze triggered by Facebook's rebrand reached a turning point. Excessive enthusiasm has since started to subside, and people now view the Metaverse opportunity more rationally</p>
                        <img src="/images/TheMetaverseOverview.png" alt="The Metaverse Overview: Vision, Technology, and Tactics" width="100%" height="100%"></img>
                        <a href="/docs/1664243387029.pdf" target="_blank"><button style={{fontSize: "16px", width: '100%', height: '50px', padding: '10px', color: 'white', backgroundColor: 'blue', margin: '5px', marginTop: '15px', marginBottom: '10px', borderRadius: '100px', border: 'none', flexDirection: 'row', boxShadow: '0px 2px 4px rgba(17, 17, 17, 0.12)', cursor: 'pointer'}}>Download</button></a>
                    </div>
                    <div className={styles.card}>
                        <h2 style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>THE FUTURE OF THE GLOBAL ECONOMY: Towards a Long Boom?</h2>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>AUTHORED BY: </b>OECD</p>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>DATE: </b>1999</p>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>SUMMARY: </b>As part of the preparations for EXPO 2000 – the World Exposition in Hanover, Germany – the OECD Forum for the Future is organising a series of four conferences to take place beforehand around the theme of “People, Nature and Technology: Sustainable Societies in the 21st Century”. The series will consider four key areas of human activity: technology, economy, society and government. The conferences will explore possible evolutions of key variables and analyse different development paths in order to expose some of the main policy implications and options. Each conference will provide analysis of underlying trends and policy directions. </p>
                        <img src="/images/TheFUTUREGlobalEconomy.png" alt="The Metaverse Overview: Vision, Technology, and Tactics" width="100%" height="100%"></img>
                        <a href="/docs/1663378353621.pdf" target="_blank"><button style={{fontSize: "16px", width: '100%', height: '50px', padding: '10px', color: 'white', backgroundColor: 'blue', margin: '5px', marginTop: '15px', marginBottom: '10px', borderRadius: '100px', border: 'none', flexDirection: 'row', boxShadow: '0px 2px 4px rgba(17, 17, 17, 0.12)', cursor: 'pointer'}}>Download</button></a>
                    </div>
                    <div className={styles.card}>
                        <h2 style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>Bitcoin: A Peer-to-Peer Electronic Cash System</h2>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>AUTHORED BY: </b>Satoshi Nakamoto</p>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>DATE: </b>2008</p>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>SUMMARY: </b>Commerce on the Internet has come to rely almost exclusively on financial institutions serving as trusted third parties to process electronic payments. While the system works well enough for most transactions, it still suffers from the inherent weaknesses of the trust based model. Completely non-reversible transactions are not really possible, since financial institutions cannot avoid mediating disputes. </p>
                        <img src="/images/Bitcoin.png" alt="Bitcoin: A Peer-to-Peer Electronic Cash System" width="100%" height="100%"></img>
                        <a href="/docs/bitcoin.pdf" target="_blank"><button style={{fontSize: "16px", width: '100%', height: '50px', padding: '10px', color: 'white', backgroundColor: 'blue', margin: '5px', marginTop: '15px', marginBottom: '10px', borderRadius: '100px', border: 'none', flexDirection: 'row', boxShadow: '0px 2px 4px rgba(17, 17, 17, 0.12)', cursor: 'pointer'}}>Download</button></a>
                    </div>
                    <div className={styles.card}>
                        <h2 style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform.</h2>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>AUTHORED BY: </b>Vitalik Buterin</p>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>DATE: </b>2014</p>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>SUMMARY: </b>The Ethereum protocol was originally conceived as an upgraded version of a cryptocurrency, providing advanced features such as on-blockchain escrow, withdrawal limits and financial contracts, gambling markets and the like via a highly generalized programming language.</p>
                        <img src="/images/ethereum.png" alt="Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform" width="100%" height="100%"></img>
                        <a href="/docs/Ethereum.pdf" target="_blank"><button style={{fontSize: "16px", width: '100%', height: '50px', padding: '10px', color: 'white', backgroundColor: 'blue', margin: '5px', marginTop: '15px', marginBottom: '10px', borderRadius: '100px', border: 'none', flexDirection: 'row', boxShadow: '0px 2px 4px rgba(17, 17, 17, 0.12)', cursor: 'pointer'}}>Download</button></a>
                    </div>
                    <div className={styles.card}>
                        <h2 style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>POLKADOT: Vision for a heterogeneus multi-chain framework</h2>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>AUTHORED BY: </b>Dr. Gavin Wood</p>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>DATE: </b>2019</p>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>SUMMARY: </b>This is intended to be a technical “vision” summary of one possible direction that may be taken in further developing the blockchain paradigm together with some rationale as to why this direction is sensible. It lays out in as much detail as is possible at this stage of development a system which may give a concrete improvement on a number of aspects of blockchain technology. It is not intended to be a specification, formal</p>
                        <img src="/images/polkadot.png" alt="POLKADOT: Vision for a heterogeneus multi-chain framework" width="100%" height="100%"></img>
                        <a href="/docs/Polkadot.pdf" target="_blank"><button style={{fontSize: "16px", width: '100%', height: '50px', padding: '10px', color: 'white', backgroundColor: 'blue', margin: '5px', marginTop: '15px', marginBottom: '10px', borderRadius: '100px', border: 'none', flexDirection: 'row', boxShadow: '0px 2px 4px rgba(17, 17, 17, 0.12)', cursor: 'pointer'}}>Download</button></a>
                    </div>
                    <div className={styles.card}>
                        <h2 style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>Decentralized Finance (DeFi): Transformative Potential & Associated Risks</h2>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>AUTHORED BY: </b>Federal Reserve (Francesca Carapella, Edward Dumas, Jacob Gerszten, Nathan Swem, Larry Wall)</p>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>DATE: </b>2022</p>  
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>SUMMARY: </b>The economic research that is linked from this page represents the views of the authors and does not indicate concurrence either by other members of the Board's staff or by the Board of Governors. The economic research and their conclusions are often preliminary and are circulated to stimulate discussion and critical comment. The Board values having a staff that conducts research on a wide range of economic topics and that explores a diverse array of perspectives on those topics. The resulting conversations in academia, the economic policy community, and the broader public are important to sharpening our collective thinking.</p>
                        <img src="/images/defi-and-fed.png" alt="Decentralized Finance (DeFi): Transformative Potential & Associated Risks" width="100%" height="100%"></img>
                        <a href="/docs/defi-and-fed.pdf" target="_blank"><button style={{fontSize: "16px", width: '100%', height: '50px', padding: '10px', color: 'white', backgroundColor: 'blue', margin: '5px', marginTop: '15px', marginBottom: '10px', borderRadius: '100px', border: 'none', flexDirection: 'row', boxShadow: '0px 2px 4px rgba(17, 17, 17, 0.12)', cursor: 'pointer'}}>Download</button></a>
                    </div>
                    <div className={styles.card}>
                        <h2 style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>Banking in 2035: three possible futures</h2>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>AUTHORED BY: </b>Economist Impact and sponsored by SAS</p>
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>DATE: </b>2022</p>  
                        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: "12px", width: '100%'}}><b>SUMMARY: </b>Banks today find themselves buffeted by a range of forces, many of which are accelerating. Long-term trends such as climate change and demographic ageing are picking up. Shock events like the covid-19 pandemic and the war in Ukraine have destabilised markets. The direct threat posed by both fintech and big tech companies is growing. Taken together, these forces of change are causing banks to evolve business models to meet new societal expectations and engage customers in highly dynamic digital environments.</p>
                        <img src="/images/Banking-in-2035-three-possible-futures.png" alt="Banking in 2035: three possible futures" width="100%" height="100%"></img>
                        <a href="/docs/1665301470009.pdf" target="_blank"><button style={{fontSize: "16px", width: '100%', height: '50px', padding: '10px', color: 'white', backgroundColor: 'blue', margin: '5px', marginTop: '15px', marginBottom: '10px', borderRadius: '100px', border: 'none', flexDirection: 'row', boxShadow: '0px 2px 4px rgba(17, 17, 17, 0.12)', cursor: 'pointer'}}>Download</button></a>
                    </div>


                    
                </div>
            </main>
                
            <footer className={styles.footer} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
                <span><p style={{fontSize: "12px", width: '100%'}}><b>User session validated with: </b>{user.address}</p></span>
                <span><p style={{fontSize: "12px", width: '100%'}}><b>Contact me to add new content, modify, etc... feel free, at: </b>kim@joakimvivas.com</p></span>
                <button style={{fontSize: "16px", width: '25%', height: '50px', padding: '10px', color: 'white', backgroundColor: 'blue', margin: '5px', marginTop: '15px', marginBottom: '10px', borderRadius: '100px', border: 'none', flexDirection: 'row', boxShadow: '0px 2px 4px rgba(17, 17, 17, 0.12)', cursor: 'pointer'}} onClick={() => signOut({ redirect: '/' })}>Sign out</button>
            </footer>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    
    // redirect if not authenticated
    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: { user: session.user },
    };
}

export default User;