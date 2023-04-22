import { usePageTitle } from '../../hooks';
import './news.css';

export default function NewsPage(): React.ReactElement {
  usePageTitle("News");

  return (
    <div className='categories full'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='categories--container'>
        <div className='flex flex-column categories-wrap'>
          <h1 className='news--title'>News</h1>
          <div className='card--group'>
            <div className='card--item news--card'>
              <img
                className='slider--img card--item-img news--img'
                src='https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt='img'
              />
              <h1 className='news--content-title'>International Labor Day </h1>
              <div className='news--content'>
                <div className='news--middle' >
                  <div className='news--middle-txt'>We want to inform you that on holiday of 1. May our shop will work until 12am</div>
                </div>

                <div className='news--txt-date'><em>01.05.2023.</em></div>
              </div>
            </div>
            <div className='card--item news--card'>
              <img
                className='slider--img card--item-img news--img'
                src='https://images.unsplash.com/photo-1630459065645-549fe5a56db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                alt='img'
              />
              <h1 className='news--content-title'>New Artical! </h1>
              <div className='news--content'>
                <div className='news--middle' >
                  <div className='news--middle-txt'>After 10. of June Samsung refrigerators will be on display in our offer</div>
                </div>

                <div className='news--txt-date'><em>02.03.2023- 04.04.2023.</em></div>
              </div>
            </div>
            <div className='card--item news--card'>
              <img
                className='slider--img card--item-img news--img'
                src='https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt='img'
              />
              <h1 className='news--content-title'>Pliers Discount! </h1>
              <div className='news--content'>
                <div className='news--middle' >
                  <div className='news--middle-txt'>In next 10 days discount of 10% for all pliers</div>
                </div>

                <div className='news--txt-date'><em>22.03.2023- 04.04.2023.</em></div>
              </div>
            </div>
            <div className='card--item news--card'>
              <img
                className='slider--img card--item-img news--img'
                src='https://images.unsplash.com/photo-1515433868209-994b50c7e2f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt='img'
              />
              <h1 className='news--content-title'>Chainsaw Discount!! </h1>
              <div className='news--content'>
                <div className='news--middle' >
                  <div className='news--middle-txt'>Grab your discount for STIHL chainsaws till 5th April!</div>
                </div>

                <div className='news--txt-date'><em>22.03.2023- 05.04.2023.</em></div>
              </div>
            </div>
            <div className='card--item news--card'>
              <img
                className='slider--img card--item-img news--img'
                src='https://images.unsplash.com/photo-1632923565835-6582b54f2105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
                alt='img'
              />
              <h1 className='news--content-title'>VOX VM1490 for limited time </h1>
              <div className='news--content'>
                <div className='news--middle' >
                  <div className='news--middle-txt'>VOX VM1490 will save you up to 11 000 RSD!!</div>
                </div>

                <div className='news--txt-date'><em>22.03.2023- 04.04.2023.</em></div>
              </div>
            </div>
            <div className='card--item news--card'>
              <img
                className='slider--img card--item-img news--img'
                src='https://images.unsplash.com/photo-1614036056923-b707c5258c01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                alt='img'
              />
              <h1 className='news--content-title'>Time to buy new axe?   </h1>
              <div className='news--content'>
                <div className='news--middle' >
                  <div className='news--middle-txt'>Buy this Pickhead Fire Axe and you will get three axe holders for free!!</div>
                </div>

                <div className='news--txt-date'><em>22.03.2023- 04.04.2023.</em></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
