import { ReactElement } from 'react';
import { Navigation, Footer, Loader } from './components';
import { MainRouteLayout } from './layouts';

function App(): ReactElement {
  return (
    <div className='app'>
      <header>
        <Navigation />
      </header>
      <main className='main'>
        <Loader />
        <MainRouteLayout />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
