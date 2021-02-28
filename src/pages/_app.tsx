import '../styles/global.css';

import { ChallengesProviader } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProviader>
      <Component {...pageProps} />
    </ChallengesProviader>
  )
}

export default MyApp
