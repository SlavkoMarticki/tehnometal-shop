import { ReactElement } from 'react';
import { Navigation } from './components';
import { MainRouteLayout } from './layouts';
import Footer from './components/footer/Footer';

function App(): ReactElement {
  // console.log(categoriesServiceInstance.getSubCategoryById("-NSCE12-HLJY6C-fKziU", "-NSh8Jk-EB_y9YizTtyr"));

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
