import { useState,useEffect } from 'react';
import './main.css'
const Main = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [interval, setIntervalId] = useState(null);
  
    useEffect(() => {
      const id = setInterval(() => {
        setSlideIndex(prevIndex =>
          prevIndex === 4 ? 0 : prevIndex + 1
        );
      }, 1000);
      setIntervalId(id);
      return () => clearInterval(id);
    }, []);
  
    const handlePrevSlide = () => {
      if (slideIndex === 0) {
        setSlideIndex(4);
      } else {
        setSlideIndex(slideIndex - 1);
      }
    };
  
    const handleNextSlide = () => {
      if (slideIndex === 4) {
        setSlideIndex(0);
      } else {
        setSlideIndex(slideIndex + 1);
      }
    };
  
    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      setIntervalId(
        setInterval(() => {
          setSlideIndex(prevIndex =>
            prevIndex === 4 ? 0 : prevIndex + 1
          );
        }, 1000)
      );
    };
    return ( <>
<div className="main">
    <div className="productslist">
        <div className="products">
            <i onClick={handlePrevSlide} class="fa fa-chevron-left"></i>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }}  ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }}  ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://whatson.ae/wp-content/uploads/2016/08/img-world-of-adventure-9.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }}  ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
            <i onClick={handleNextSlide} class="fa fa-chevron-right"></i>
        </div>
        <div className="products">
            <i onClick={handlePrevSlide} class="fa fa-chevron-left"></i>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }}  ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }}  ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://whatson.ae/wp-content/uploads/2016/08/img-world-of-adventure-9.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }}  ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }} ></div>
            <i onClick={handleNextSlide} class="fa fa-chevron-right"></i>
        </div>
        <div className="products">
            <i onClick={handlePrevSlide} class="fa fa-chevron-left"></i>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://whatson.ae/wp-content/uploads/2016/08/img-world-of-adventure-9.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }} ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }} ></div>
            <i onClick={handleNextSlide} class="fa fa-chevron-right"></i>
        </div>
        <div className="products">
            <i onClick={handlePrevSlide} class="fa fa-chevron-left"></i>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://whatson.ae/wp-content/uploads/2016/08/img-world-of-adventure-9.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
            <i onClick={handleNextSlide} class="fa fa-chevron-right"></i>
        </div>
        <div className="products">
            <i onClick={handlePrevSlide} class="fa fa-chevron-left"></i>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://whatson.ae/wp-content/uploads/2016/08/img-world-of-adventure-9.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
            <i onClick={handleNextSlide} class="fa fa-chevron-right"></i>
        </div>
    </div>
</div>
    </> );
}
 
export default Main;