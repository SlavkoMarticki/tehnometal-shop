import { usePageTitle } from '../../hooks';
import './news.css';
import { newsData } from '../../common/constants/newsData';

export default function NewsPage(): React.ReactElement {
  usePageTitle('News');

  return (
    <div className='categories full'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='categories--container'>
        <div className='flex flex-column categories-wrap'>
          <h1 className='news--title'>News</h1>
          <div className='card--group'>
            {newsData.map((n) => {
              return (
                <div
                  key={n.src}
                  className='card--item news--card'
                >
                  <img
                    className='slider--img card--item-img news--img'
                    src={n.src}
                    alt='img'
                  />
                  <h1 className='news--content-title'>{n.title}</h1>
                  <div className='news--content'>
                    <div className='news--middle'>
                      <div className='news--middle-txt'>{n.text}</div>
                    </div>

                    <div className='news--txt-date'>
                      <em>{n.date}</em>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
