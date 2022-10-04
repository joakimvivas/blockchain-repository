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