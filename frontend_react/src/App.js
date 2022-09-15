import React from 'react'
import { About, Footer, Header, Skills, Testimonial} from './container';
import './App.scss'
import { Navbar } from './components';
import Work from './container/Work/Work';

const App = () => {
  return (
    <div>
         <div className='app'>
             <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />

         </div>
    </div>
  );
}

export default App;