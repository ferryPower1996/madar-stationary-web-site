// import { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const SliderComponent = () => {
//   const [currentSlide, setCurrentSlide] = useState(1);
//   const slides = ['اسلاید اول', 'اسلاید دوم', 'اسلاید سوم'];
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 3000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     beforeChange: (current, next) => setCurrentSlide(next + 1),
//   };

//   const handlePrevSlide = () => {
//     if (currentSlide === 1) {
//       setCurrentSlide(slides.length);
//     } else {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   const handleNextSlide = () => {
//     if (currentSlide === slides.length) {
//       setCurrentSlide(1);
//     } else {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const handleMouseEnter = () => {
//     clearTimeout(timer);
//   };

//   const handleMouseLeave = () => {
//     timer = setTimeout(() => {
//       handleNextSlide();
//     }, 3000);
//   };

//   let timer;

//   return (
//     <div style={{backgroundColor:'blue',width:'800px',height:'350px'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index}>
//             <h1>{slide}</h1>
//           </div>
//         ))}
//       </Slider>
//       <button className="prev-btn" onClick={handlePrevSlide}>«</button>
//       <button className="next-btn" onClick={handleNextSlide}>»</button>
//       <h2>اسلاید {currentSlide}</h2>
//     </div>
//   );
// };

// export default SliderComponent;
// import React, { useState } from 'react';

// const Slider = () => {
//   const [slideIndex, setSlideIndex] = useState(0);

//   const handlePrevSlide = () => {
//     if (slideIndex === 0) {
//       setSlideIndex(2);
//     } else {
//       setSlideIndex(slideIndex - 1);
//     }
//   };

//   const handleNextSlide = () => {
//     if (slideIndex === 2) {
//       setSlideIndex(0);

//     } else {
//       setSlideIndex(slideIndex + 1);
//     }
//   };

//   return (
//     <div className="slider">
//       <h1 style={{display:slideIndex===0 ? 'block' : 'none'}} className={slideIndex === 0 ? 'active' : ''}>اسلاید اول</h1>
//       <h1 style={{display:slideIndex===1 ? 'block' : 'none'}} className={slideIndex === 1 ? 'active' : ''}>اسلاید دوم</h1>
//       <h1 style={{display:slideIndex===2 ? 'block' : 'none'}} className={slideIndex === 2 ? 'active' : ''}>اسلاید سوم</h1>
//       <div className="slider-controls">
//         <button className="prev-slide" onClick={handlePrevSlide}>«</button>
//         <button className="next-slide" onClick={handleNextSlide}>»</button>
//       </div>
//     </div>
//   );
// };

// export default Slider;



// import React, { useState, useEffect, useRef } from 'react';

// const Slider = () => {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const mouseHover = useRef(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (!mouseHover.current) {
//         if (slideIndex === 2) {
//           setSlideIndex(0);
//         } else {
//           setSlideIndex(slideIndex + 1);
//         }
//       }
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, [slideIndex, mouseHover]);

//   const handlePrevSlide = () => {
//     if (!mouseHover.current) {
//       if (slideIndex === 0) {
//         setSlideIndex(2);
//       } else {
//         setSlideIndex(slideIndex - 1);
//       }
//     }
//   };

//   const handleNextSlide = () => {
//     if (!mouseHover.current) {
//       if (slideIndex === 2) {
//         setSlideIndex(0);
//       } else {
//         setSlideIndex(slideIndex + 1);
//       }
//     }
//   };

//   const handleMouseEnter = () => {
//     mouseHover.current = true;
//   };

//   const handleMouseLeave = () => {
//     mouseHover.current = false;
//   };

//   return (
//     <div className="slider">
//       <h1 className={slideIndex === 0 ? 'active' : ''}>اسلاید اول</h1>
//       <div className="slider-controls">
//         <span className="prev-slide" onClick={handlePrevSlide}>«</span>
//         <span className="next-slide" onClick={handleNextSlide}>»</span>
//       </div>
//       <div className="slider-hover" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
//     </div>
//   );
// };

// export default Slider;
// import React, { useState } from 'react';

// const Slider = () => {
//   const [slideIndex, setSlideIndex] = useState(0);

//   const handlePrevSlide = () => {
//     if (slideIndex === 0) {
//       setSlideIndex(2);
//     } else {
//       setSlideIndex(slideIndex - 1);
//     }
//   };

//   const handleNextSlide = () => {
//     if (slideIndex === 2) {
//       setSlideIndex(0);
//     } else {
//       setSlideIndex(slideIndex + 1);
//     }
//   };

//   return (
//     <div className="slider">
//       <h1 className={slideIndex === 0 ? 'active' : ''} style={{ display: slideIndex === 0 ? 'block' : 'none' }}>اسلاید اول</h1>
//       <h1 className={slideIndex === 1 ? 'active' : ''} style={{ display: slideIndex === 1 ? 'block' : 'none' }}>اسلاید دوم</h1>
//       <h1 className={slideIndex === 2 ? 'active' : ''} style={{ display: slideIndex === 2 ? 'block' : 'none' }}>اسلاید سوم</h1>
//       <div className="slider-controls">
//         <button className="prev-slide" onClick={handlePrevSlide}>«</button>
//         <button className="next-slide" onClick={handleNextSlide}>»</button>
//       </div>
//     </div>
//   );
// };

// export default Slider;

import { useState, useEffect } from 'react';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [interval, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex(prevIndex =>
        prevIndex === 2 ? 0 : prevIndex + 1
      );
    }, 3000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  const handlePrevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(2);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleNextSlide = () => {
    if (slideIndex === 2) {
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
          prevIndex === 2 ? 0 : prevIndex + 1
        );
      }, 3000)
    );
  };

  return (
    <div className="slider">
      <h1 onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 0 ? 'active' : ''}
        style={{ display: slideIndex === 0 ? 'block' : 'none' }}
      >
        اسلاید اول
      </h1>
      <h1 onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 1 ? 'active' : ''}
        style={{ display: slideIndex === 1 ? 'block' : 'none' }}
      >
        اسلاید دوم
      </h1>
      <h1 onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={slideIndex === 2 ? 'active' : ''}
        style={{ display: slideIndex === 2 ? 'block' : 'none' }}
      >
        اسلاید سوم
      </h1>
      <div className="slider-controls">
        <button className="prev-slide" onClick={handlePrevSlide}>
          «
        </button>
        <button className="next-slide" onClick={handleNextSlide}>
          »
        </button>
      </div>
    </div>
  );
};

export default Slider;