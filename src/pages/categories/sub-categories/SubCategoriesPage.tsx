import { usePageTitle } from "../../../hooks";
import "./subCategories.css";

export default function SubCategoriesPage(): React.ReactElement {
  usePageTitle("SubCategories");

  return (
    <div className='categories full'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='categories--container'>
        <div className='flex flex-column categories-wrap'>
          <div className="flex flex-column">
            <h1 className='categories--title s-cat--title'>Appliances</h1>
            <h3 className="s-cat--sub__title">Choose one of our subcategories:</h3>
          </div>
          <div className='card--group'>
            <div className='card--item'>
              <img
                className='slider--img card--item-img'
                src='https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
                alt='img'
              />
              <div className='slider--middle'>
                <div className='slider--middle-txt'>Wash Machine</div>
              </div>
            </div>
            <div className='card--item'>
              <img
                className='slider--img card--item-img'
                src='https://images.unsplash.com/photo-1536353284924-9220c464e262?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
                alt='img'
              />
              <div className='slider--middle'>
                <div className='slider--middle-txt'>
                  Refrigerator
                </div>
              </div>
            </div>
            <div className='card--item'>
              <img
                className='slider--img card--item-img'
                src='https://images.unsplash.com/photo-1601599967100-f16100982063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                alt='img'
              />
              <div className='slider--middle'>
                <div className='slider--middle-txt'>Freezer</div>
              </div>
            </div>
            <div className='card--item'>
              <img
                className='slider--img card--item-img'
                src='https://images.unsplash.com/photo-1556910633-5099dc3971e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'
                alt='img'
              />
              <div className='slider--middle'>
                <div className='slider--middle-txt'>Electric Stove</div>
              </div>
            </div>
            <div className='card--item'>
              <img
                className='slider--img card--item-img'
                src='https://images.unsplash.com/photo-1626143508000-4b5904e5e84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                alt='img'
              />
              <div className='slider--middle'>
                <div className='slider--middle-txt'>Microwave</div>
              </div>
            </div>
            <div className='card--item'>
              <img
                className='slider--img card--item-img'
                src='https://images.unsplash.com/photo-1578643463396-0997cb5328c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80'
                alt='img'
              />
              <div className='slider--middle'>
                <div className='slider--middle-txt'>Mixer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
