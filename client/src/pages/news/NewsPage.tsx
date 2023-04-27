import { useState, useEffect } from 'react';
import { usePageTitle } from '../../hooks';
import './news.css';
import { newsData } from '../../common/constants/newsData';
import { Pager } from '../../components';

export default function NewsPage(): React.ReactElement {
  usePageTitle('News');
  const [paginatedList, setPaginatedList] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const startIndex = (page - 1) * 6;
    let endIndex = startIndex + 6;
    if (endIndex > newsData.length) {
      endIndex = newsData.length;
    }
    setPaginatedList(newsData.slice(startIndex, endIndex));
  }, [page]);

  const handlePageChange = (e: any, value: number): void => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='categories full'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='categories--container'>
        <div className='flex flex-column categories-wrap remove-gap'>
          <h1 className='news--title'>News</h1>
          <div className='card--group'>
            {paginatedList.map((n) => {
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
                  <div className='news--title-container'>
                    <h1 className='news--content-title'>{n.title}</h1>
                  </div>
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
          <div className='flex justify-center'>
            <Pager
              count={Math.ceil(newsData.length / 6)}
              page={page}
              handleChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
