import { useState,useEffect } from 'react';
import './main.css'
import Tt from './tt';
const Main = ({bgimage}) => {
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
<div style={{backgroundImage:bgimage}} className="main">
    <div className="productslist">
        <div className="products">
            <i onClick={handlePrevSlide} class="fa fa-chevron-left"></i>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112001999.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }}  ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112002375.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }}  ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112002186.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }}  ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112052505.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }}  ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112012136.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }}  ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112001900.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }}  ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://oulikshop.com/wp-content/uploads/2022/10/IMG_20221011_184404_633.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }}  ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://farhangst.ir/wp-content/uploads/2022/07/Untitled-1-scaled-e1657915111789.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }}  ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/119267723.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }}  ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/dc91002d9e315d64f86e5006c44dd3b4268be32c_1642065964.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/0a1928f498b4fe6cf043521bbc3f563cdc11aa4a_1630421209.jpg?x-oss-process=image/resize,h_1600/quality,q_80)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://statics.basalam.com/public-7/users/AXboa/08-04/XnbITm1U7qYu3Tk46vMIVicvuDPnkk5a9W32yHZ899IJ5bpx7n.jpg_512X512X70.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://gh-s3.behtarino.com/media/images/2023-07-02/wJ8IwFtG35.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://statics.basalam.com/public-8/users/AXboa/11-15/fTBD7O4c4r2MLIRo2TvMX8VSVkON55OIcrhIa2LpMMk6GKBhyp.jpg_512X512X70.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://lavazemtahriri.com/wp-content/uploads/2021/02/3.png)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
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
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }}  ></div>
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
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }}  ></div>
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
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://whatson.ae/wp-content/uploads/2016/08/img-world-of-adventure-9.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }}  ></div>
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
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }} ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }} ></div>
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
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} ></div>
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
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} ></div>
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
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://whatson.ae/wp-content/uploads/2016/08/img-world-of-adventure-9.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} ></div>
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
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }} ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }} ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }} ></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }} ></div>
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
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} ></div>
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
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} ></div>
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
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://whatson.ae/wp-content/uploads/2016/08/img-world-of-adventure-9.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} ></div>
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
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
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
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} ></div>
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
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} ></div>
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
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://whatson.ae/wp-content/uploads/2016/08/img-world-of-adventure-9.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} ></div>
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
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
            <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
            <i onClick={handleNextSlide} class="fa fa-chevron-right"></i>
        </div>
    </div>
    <Tt/>
</div>
    </> );
}
 
export default Main;