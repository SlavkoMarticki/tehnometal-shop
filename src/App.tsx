import { ReactElement, useEffect } from 'react';
import { Navigation } from './components';
import { MainRouteLayout } from './layouts';
import Footer from './components/footer/Footer';

function App(): ReactElement {
 

  return (
    <div className='app'>
      <header>
        <Navigation />
      </header>
      <main className='main'>
        <MainRouteLayout />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default observer(App);
