import { ReactElement } from 'react';
import { Navigation, Footer } from './components';
import { MainRouteLayout } from './layouts';

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

export default App;
