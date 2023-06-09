import './index.css';

import { LanguageContextProvider } from './store/lang-context';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <LanguageContextProvider>
        <Header />
        <Home />
        <About />
        <Services />
        <Contact />
        <Footer />
      </LanguageContextProvider>
    </>
  );
}
