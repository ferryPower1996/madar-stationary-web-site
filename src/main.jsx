import { useState,useEffect } from 'react';
import './main.css'
const Timer = ({trueandfalse,lable,handleMouseEnter}) => {
    
    const [slideIndex, setSlideIndex] = useState(0);
    useEffect(() => {
        if (trueandfalse) {
          const interval = setInterval(() => {
            setSlideIndex((item) => {
              if (item === 4 ) {
                return 0;
              }
              return item + 1;
            });
          }, 1000);
          
          return () => {
            clearInterval(interval);
          };
        }
      }, [trueandfalse]);
      var onMouse=()=>{
        handleMouseEnter(lable)
      }
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
    return (<> 
            <i onClick={handlePrevSlide} class="fa fa-chevron-left"></i>

    <div style={{display:'flex'}} onMouseEnter={onMouse}onMouseLeave={onMouse}>
    <div 
            // onMouseEnter={handleMouseEnter} 
            //      onMouseLeave={handleMouseEnter}
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112001999.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }}  ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112002375.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }}  ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112002186.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }}  ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112052505.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }}  ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112012136.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }}  ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112001900.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }}  ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://oulikshop.com/wp-content/uploads/2022/10/IMG_20221011_184404_633.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }}  ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://farhangst.ir/wp-content/uploads/2022/07/Untitled-1-scaled-e1657915111789.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }}  ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/119267723.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }}  ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/dc91002d9e315d64f86e5006c44dd3b4268be32c_1642065964.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/0a1928f498b4fe6cf043521bbc3f563cdc11aa4a_1630421209.jpg?x-oss-process=image/resize,h_1600/quality,q_80)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://statics.basalam.com/public-7/users/AXboa/08-04/XnbITm1U7qYu3Tk46vMIVicvuDPnkk5a9W32yHZ899IJ5bpx7n.jpg_512X512X70.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://gh-s3.behtarino.com/media/images/2023-07-02/wJ8IwFtG35.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://statics.basalam.com/public-8/users/AXboa/11-15/fTBD7O4c4r2MLIRo2TvMX8VSVkON55OIcrhIa2LpMMk6GKBhyp.jpg_512X512X70.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://lavazemtahriri.com/wp-content/uploads/2021/02/3.png)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
    </div>
    <i onClick={handleNextSlide} class="fa fa-chevron-right"></i>

    </> );
}
const Timer2 = ({trueandfalse,lable,handleMouseEnter}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    useEffect(() => {
        if (trueandfalse) {
          const interval = setInterval(() => {
            setSlideIndex((item) => {
              if (item === 4 ) {
                return 0;
              }
              return item + 1;
            });
          }, 1000);
          
          return () => {
            clearInterval(interval);
          };
        }
      }, [trueandfalse]);
      var onMouse=()=>{
        handleMouseEnter(lable)
      }
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
    return ( <>
            <i onClick={handlePrevSlide} class="fa fa-chevron-left"></i>

    <div style={{display:'flex'}} onMouseEnter={onMouse}onMouseLeave={onMouse}>
    <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/38b6860046a1b8357e337bf9a00fbde4945ca480_1668030302.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }}  ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/da77d1e29a812fe0cfe385f06af3cdad492f6b80_1668029639.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }}  ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webphttps://dkstatics-public.digikala.com/digikala-products/1e5580d34922b2d0971a6d9b0b53f28b48fbb7d9_1670839193.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }}  ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/b78fb7a8dccf7d790e71a7c5289ca3a2d97eadf1_1668030541.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }}  ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/1d39155ce462d21883e41b2bc0e5badc1f146c2f_1667973880.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }}  ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/499232fcf05b47741cfcd0fe45cddc8940a95fa8_1668001612.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }}  ></div>
            <div
            //  onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/1a36e7869dc7ba704be7d331351b759baf72e2cc_1668024864.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }}  ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.papcoiran.com/17982-superlarge_default/%D8%AF%D9%81%D8%AA%D8%B1-%D9%88%D8%B2%DB%8C%D8%B1%DB%8C-%D8%AC%D9%84%D8%AF-%D8%B3%D8%AE%D8%AA-100-%D8%A8%D8%B1%DA%AF.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }}  ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.papcoiran.com/17980-superlarge_default/%D8%AF%D9%81%D8%AA%D8%B1-%D9%88%D8%B2%DB%8C%D8%B1%DB%8C-%D8%AC%D9%84%D8%AF-%D8%B3%D8%AE%D8%AA-100-%D8%A8%D8%B1%DA%AF.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }}  ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.papcoiran.com/17988-superlarge_default/%D8%AF%D9%81%D8%AA%D8%B1-%D9%88%D8%B2%DB%8C%D8%B1%DB%8C-%D8%AC%D9%84%D8%AF-%D8%B3%D8%AE%D8%AA-100-%D8%A8%D8%B1%DA%AF.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.papcoiran.com/17986-superlarge_default/%D8%AF%D9%81%D8%AA%D8%B1-%D9%88%D8%B2%DB%8C%D8%B1%DB%8C-%D8%AC%D9%84%D8%AF-%D8%B3%D8%AE%D8%AA-100-%D8%A8%D8%B1%DA%AF.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.papcoiran.com/19303-superlarge_default/%D8%AF%D9%81%D8%AA%D8%B1-%D9%88%D8%B2%DB%8C%D8%B1%DB%8C-%D8%AC%D9%84%D8%AF-%D8%B3%D8%AE%D8%AA-100-%D8%A8%D8%B1%DA%AF.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.papcoiran.com/19301-superlarge_default/%D8%AF%D9%81%D8%AA%D8%B1-%D9%88%D8%B2%DB%8C%D8%B1%DB%8C-%D8%AC%D9%84%D8%AF-%D8%B3%D8%AE%D8%AA-100-%D8%A8%D8%B1%DA%AF.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }} ></div>
    </div>
    <i onClick={handleNextSlide} class="fa fa-chevron-right"></i>
    </> );
}
 
const Timer3 = ({trueandfalse,lable,handleMouseEnter}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    useEffect(() => {
        if (trueandfalse) {
          const interval = setInterval(() => {
            setSlideIndex((item) => {
              if (item === 4 ) {
                return 0;
              }
              return item + 1;
            });
          }, 1000);
          
          return () => {
            clearInterval(interval);
          };
        }
      }, [trueandfalse]);
      var onMouse=()=>{
        handleMouseEnter(lable)
      }
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
    return ( <>
    <i onClick={handlePrevSlide} class="fa fa-chevron-left"></i>
    <div style={{display:'flex'}} onMouseEnter={onMouse}onMouseLeave={onMouse}>
    <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://whatson.ae/wp-content/uploads/2016/08/img-world-of-adventure-9.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://whatson.ae/wp-content/uploads/2016/08/img-world-of-adventure-9.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://whatson.ae/wp-content/uploads/2016/08/img-world-of-adventure-9.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }} ></div>
    </div>
    <i onClick={handleNextSlide} class="fa fa-chevron-right"></i>
    </> );
}

const Timer4 = ({trueandfalse,lable,handleMouseEnter}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    useEffect(() => {
        if (trueandfalse) {
          const interval = setInterval(() => {
            setSlideIndex((item) => {
              if (item === 4 ) {
                return 0;
              }
              return item + 1;
            });
          }, 1000);
          
          return () => {
            clearInterval(interval);
          };
        }
      }, [trueandfalse]);
      var onMouse=()=>{
        handleMouseEnter(lable)
      }
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
    return ( <>
    <i onClick={handlePrevSlide} class="fa fa-chevron-left"></i>
    <div style={{display:'flex'}} onMouseEnter={onMouse}onMouseLeave={onMouse}>
    <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
        
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://whatson.ae/wp-content/uploads/2016/08/img-world-of-adventure-9.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://whatson.ae/wp-content/uploads/2016/08/img-world-of-adventure-9.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://whatson.ae/wp-content/uploads/2016/08/img-world-of-adventure-9.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
    </div>
    <i onClick={handleNextSlide} class="fa fa-chevron-right"></i>
    </> );
}

const Timer5 = ({trueandfalse,lable,handleMouseEnter}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    useEffect(() => {
        if (trueandfalse) {
          const interval = setInterval(() => {
            setSlideIndex((item) => {
              if (item === 4 ) {
                return 0;
              }
              return item + 1;
            });
          }, 1000);
          
          return () => {
            clearInterval(interval);
          };
        }
      }, [trueandfalse]);
      var onMouse=()=>{
        handleMouseEnter(lable)
      }
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
    return ( <>
    <i onClick={handlePrevSlide} class="fa fa-chevron-left"></i>
    <div style={{display:'flex'}} onMouseEnter={onMouse}onMouseLeave={onMouse}>
    <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ backgroundImage:'url(https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://whatson.ae/wp-content/uploads/2016/08/img-world-of-adventure-9.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://whatson.ae/wp-content/uploads/2016/08/img-world-of-adventure-9.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ backgroundImage:'url(https://whatson.ae/wp-content/uploads/2016/08/img-world-of-adventure-9.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} ></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ backgroundImage:'url(https://www.imgacademy.com/sites/default/files/legacyhotel.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
            <div 
            // onMouseEnter={handleMouseEnter}
            //      onMouseLeave={handleMouseEnter}
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ backgroundImage:'url(https://imagevars.gulfnews.com/2016/8/22/1_16a08234f1c.1883456_1437924656_16a08234f1c_medium.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}></div>
    </div>
    <i onClick={handleNextSlide} class="fa fa-chevron-right"></i>
    </> );
}
 
const Main = ({bgimage}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    
    
   

    var handleMouseEnter=(lable)=>{
        if(lable==='box1'){
          setbox1(!box1)
        }
        else if(lable==='box2'){setbox2(!box2)}
        else if(lable==='box3'){setbox3(!box3)}
        else if(lable==='box4'){setbox4(!box4)}
        else if(lable==='box5'){setbox5(!box5)}
    }



      var[box1,setbox1]=useState(true)
      // var lable1='box1'
      var[box2,setbox2]=useState(true)
      // var lable2='box2'
      var[box3,setbox3]=useState(true)
      // var lable3='box3'
      var[box4,setbox4]=useState(true)
      // var lable4='box4'
      var[box5,setbox5]=useState(true)
      // var lable5='box5'
    return ( <>
<div style={{backgroundImage:bgimage}} className="main">
    <div  className="productslist">
        <div 
        // onMouseEnter={handleMouseEnter} 
        //          onMouseLeave={handleMouseEnter} 
                 className="products">

<Timer trueandfalse={box1}lable='box1' handleMouseEnter={handleMouseEnter}/>
            
        </div>

        <div  className="products">

<Timer2 trueandfalse={box2}lable='box2'handleMouseEnter={handleMouseEnter}/>

                

        </div>
        <div  className="products">

        

<Timer3 trueandfalse={box3}lable='box3'handleMouseEnter={handleMouseEnter}/>
                

        </div>

        <div  className="products">

        
            
<Timer4 trueandfalse={box4}lable='box4'handleMouseEnter={handleMouseEnter}/>
                

        </div>

        <div  className="products">

        
            
<Timer5 trueandfalse={box5}lable='box5'handleMouseEnter={handleMouseEnter}/>
                
        </div>
    </div>
</div>
    </> );
}

export default Main;