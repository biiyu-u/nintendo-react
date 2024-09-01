import { useEffect } from 'react';
import './App.css';
import Header from './nintendo/00header';
import Visual from './nintendo/01visual';
import Bestslide from './nintendo/02swiper';
import Newgame from './nintendo/03newgame';
import Online from './nintendo/04online';
import Service from './nintendo/05service';
import Plus from './nintendo/06plus/index';
import Plan from './nintendo/07plan';
import Bottom from './nintendo/08bottom';
import Footer from './nintendo/09footer';
import Plusmobile from './nintendo/06plusmobile';

function App() {
//   useEffect(() => {
//     const handleResize = () => {
//         window.location.reload();
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//         window.removeEventListener('resize', handleResize);
//     };
// }, []);
  return (
    <>
    <Header />
    <Visual />
    <Bestslide />
    <Newgame />
    <Online />
    <Service />
    <Plus />
    <Plusmobile />
    <Plan />
    <Bottom />
    <Footer />
    </>
  );
}

export default App;
