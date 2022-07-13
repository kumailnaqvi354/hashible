import './App.css';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import GetStarted from './components/Get Started/GetStarted';
import Header from './components/Navigation/Header/Header';
import Roadmap from './components/Roadmap/Roadmap';
import Shop from './components/Shop/Shop';
import Team from './components/Team/Team';


import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider, darkTheme  
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Hashible',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})





function App() {
  return (
    <div className="main-wrapper">
      <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}  theme={darkTheme()}>
      <Header />
      <GetStarted />
      <About />
      <Roadmap />
      <Gallery />
      <Team />
      <FAQ />
      <Shop/>
      <Footer />
      </RainbowKitProvider>
    </WagmiConfig>
    </div>
  );
}

export default App;
