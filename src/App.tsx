import { ReactElement } from 'react';
import { Navigation } from './components';
import { MainRouteLayout } from './layouts';
import Footer from './components/footer/Footer';

function App(): ReactElement {
  // console.log(categoriesServiceInstance.getAllSubCategories());

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
