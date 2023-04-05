import { ReactElement } from 'react';
import { Navigation } from './components';
import { MainRouteLayout } from './layouts';

function App(): ReactElement {
  return (
    <div className='app'>
      <header>
        <Navigation />
      </header>
      <main>
        <MainRouteLayout />
      </main>
    </div>
  );
}

export default App;
