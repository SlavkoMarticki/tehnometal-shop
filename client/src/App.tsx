import { ReactElement } from 'react';
import { Footer, Loader } from './components';
import { MainRouteLayout } from './layouts';
import StickyHeader from './components/header/navigation/StickyHeader';

function App(): ReactElement {
  return (
    <div className='app'>
      <StickyHeader>
        <main className='main'>
          <Loader />
          <MainRouteLayout />
        </main>
        <footer>
          <Footer />
        </footer>
      </StickyHeader>
    </div>
  );
}

export default App;
