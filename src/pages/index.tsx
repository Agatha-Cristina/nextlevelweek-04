import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Countdown } from '../components/Countdown';
import { Profile } from '../components/Profile';
import { ChallengeBox } from './../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProviader } from '../contexts/ChallengesContext';
import { Login } from '../components/Login';


interface HomeProps {
  level: number;
  currentExperience: number; 
  challengesCompleted: number;

}

export default function Home(props:HomeProps) {
  return (
    /*<ChallengesProviader 
      level={props.level} 
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile/>
              <CompletedChallenges/>
              <Countdown/>
            </div>
            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProviader>*/
    <Login/>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return { 
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
