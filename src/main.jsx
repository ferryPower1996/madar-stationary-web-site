import { useState,useEffect } from 'react';
import './main.css'
const Timer = ({trueandfalse,lable,handleMouseEnter}) => {
    var [count,setcount]=useState(new Array(15).fill(0))
    var increment=(item)=>{
      var up=[...count]
      up[item]+=1
      setcount(up)
    }
    var decrement=(item)=>{
      if(count[item]>0){
      var down=[...count]
      down[item]-=1
        setcount(down)
      }
    }
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
          }, 5000);
          
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
        className={slideIndex === 0 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112001999.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }}  ><div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(0)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[0]}</span>
        <div onClick={()=>decrement(0)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div></div>
            
            <div 
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112002375.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }}  ><div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(1)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[1]}</span>
        <div onClick={()=>decrement(1)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div></div>
            
            <div 
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112002186.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }}  >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(2)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[2]}</span>
        <div onClick={()=>decrement(2)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div></div>
            
            <div 
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112052505.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }}  >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(3)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[3]}</span>
        <div onClick={()=>decrement(3)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div></div>
            
            <div 
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112012136.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }}  >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(4)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[4]}</span>
        <div onClick={()=>decrement(4)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div></div>
            
            <div  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112001900.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }}  >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(5)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[5]}</span>
        <div onClick={()=>decrement(5)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div></div>
            
            <div   
        className={slideIndex === 2 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://oulikshop.com/wp-content/uploads/2022/10/IMG_20221011_184404_633.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }}  >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(6)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[6]}</span>
        <div onClick={()=>decrement(6)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div></div>
            
            <div 
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://farhangst.ir/wp-content/uploads/2022/07/Untitled-1-scaled-e1657915111789.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }}  >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(7)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[7]}</span>
        <div onClick={()=>decrement(7)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div></div>
            
            <div 
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/119267723.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }}  >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(8)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[8]}</span>
        <div onClick={()=>decrement(8)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div></div>
            
            <div 
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/dc91002d9e315d64f86e5006c44dd3b4268be32c_1642065964.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}>
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(9)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[9]}</span>
        <div onClick={()=>decrement(9)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div></div>
            
            <div  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/0a1928f498b4fe6cf043521bbc3f563cdc11aa4a_1630421209.jpg?x-oss-process=image/resize,h_1600/quality,q_80)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}>
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(10)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[10]}</span>
        <div onClick={()=>decrement(10)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div></div>
            
            <div   
        className={slideIndex === 3 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://statics.basalam.com/public-7/users/AXboa/08-04/XnbITm1U7qYu3Tk46vMIVicvuDPnkk5a9W32yHZ899IJ5bpx7n.jpg_512X512X70.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}>
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(11)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[11]}</span>
        <div onClick={()=>decrement(11)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div></div>
            
            <div 
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://gh-s3.behtarino.com/media/images/2023-07-02/wJ8IwFtG35.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}>
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(12)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[12]}</span>
        <div onClick={()=>decrement(12)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div></div>
            
            <div 
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://statics.basalam.com/public-8/users/AXboa/11-15/fTBD7O4c4r2MLIRo2TvMX8VSVkON55OIcrhIa2LpMMk6GKBhyp.jpg_512X512X70.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}>
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(13)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[13]}</span>
        <div onClick={()=>decrement(13)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div></div>
            
            <div 
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://lavazemtahriri.com/wp-content/uploads/2021/02/3.png)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}>
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(14)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[14]}</span>
        <div onClick={()=>decrement(14)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div></div>
    </div>
    <i onClick={handleNextSlide} class="fa fa-chevron-right"></i>

    </> );
}
const Timer2 = ({trueandfalse,lable,handleMouseEnter}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    var [count,setcount]=useState(new Array(15).fill(0))
    var increment=(item)=>{
      var up=[...count]
      up[item]+=1
      setcount(up)
    }
    var decrement=(item)=>{
      if(count[item]>0){
      var down=[...count]
      down[item]-=1
        setcount(down)
      }
    }
    useEffect(() => {
        if (trueandfalse) {
          const interval = setInterval(() => {
            setSlideIndex((item) => {
              if (item === 4 ) {
                return 0;
              }
              return item + 1;
            });
          }, 5000);
          
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
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{position:'relative', backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/38b6860046a1b8357e337bf9a00fbde4945ca480_1668030302.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }}  >
        <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(0)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[0]}</span>
        <div onClick={()=>decrement(0)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
        
    <div 
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/da77d1e29a812fe0cfe385f06af3cdad492f6b80_1668029639.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }}  >
        <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(1)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[1]}</span>
        <div onClick={()=>decrement(1)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>

    <div 
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://www.papcoiran.com/19299-superlarge_default/%D8%AF%D9%81%D8%AA%D8%B1-%D9%88%D8%B2%DB%8C%D8%B1%DB%8C-%D8%AC%D9%84%D8%AF-%D8%B3%D8%AE%D8%AA-100-%D8%A8%D8%B1%DA%AF.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }}  >
        <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(2)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[2]}</span>
        <div onClick={()=>decrement(2)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
        
            <div 

        className={slideIndex === 1 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/b78fb7a8dccf7d790e71a7c5289ca3a2d97eadf1_1668030541.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }}  >
        <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(3)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[3]}</span>
        <div onClick={()=>decrement(3)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 

        className={slideIndex === 1 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/1d39155ce462d21883e41b2bc0e5badc1f146c2f_1667973880.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }}  >
        <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(4)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[4]}</span>
        <div onClick={()=>decrement(4)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 

        className={slideIndex === 1 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/499232fcf05b47741cfcd0fe45cddc8940a95fa8_1668001612.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }}  >
        <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(5)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[5]}</span>
        <div onClick={()=>decrement(5)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div

        className={slideIndex === 2 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/1a36e7869dc7ba704be7d331351b759baf72e2cc_1668024864.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }}  >
        <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(6)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[6]}</span>
        <div onClick={()=>decrement(6)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 

        className={slideIndex === 2 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://www.papcoiran.com/17982-superlarge_default/%D8%AF%D9%81%D8%AA%D8%B1-%D9%88%D8%B2%DB%8C%D8%B1%DB%8C-%D8%AC%D9%84%D8%AF-%D8%B3%D8%AE%D8%AA-100-%D8%A8%D8%B1%DA%AF.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }}  >
        <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(7)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[7]}</span>
        <div onClick={()=>decrement(7)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://www.papcoiran.com/17980-superlarge_default/%D8%AF%D9%81%D8%AA%D8%B1-%D9%88%D8%B2%DB%8C%D8%B1%DB%8C-%D8%AC%D9%84%D8%AF-%D8%B3%D8%AE%D8%AA-100-%D8%A8%D8%B1%DA%AF.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }}  >
        <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(8)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[8]}</span>
        <div onClick={()=>decrement(8)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://www.papcoiran.com/17988-superlarge_default/%D8%AF%D9%81%D8%AA%D8%B1-%D9%88%D8%B2%DB%8C%D8%B1%DB%8C-%D8%AC%D9%84%D8%AF-%D8%B3%D8%AE%D8%AA-100-%D8%A8%D8%B1%DA%AF.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}>
        <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(9)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[9]}</span>
        <div onClick={()=>decrement(9)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://www.papcoiran.com/17986-superlarge_default/%D8%AF%D9%81%D8%AA%D8%B1-%D9%88%D8%B2%DB%8C%D8%B1%DB%8C-%D8%AC%D9%84%D8%AF-%D8%B3%D8%AE%D8%AA-100-%D8%A8%D8%B1%DA%AF.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}>
        <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(10)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[10]}</span>
        <div onClick={()=>decrement(10)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://www.papcoiran.com/19303-superlarge_default/%D8%AF%D9%81%D8%AA%D8%B1-%D9%88%D8%B2%DB%8C%D8%B1%DB%8C-%D8%AC%D9%84%D8%AF-%D8%B3%D8%AE%D8%AA-100-%D8%A8%D8%B1%DA%AF.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}>
        <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(11)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[11]}</span>
        <div onClick={()=>decrement(11)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://www.papcoiran.com/19301-superlarge_default/%D8%AF%D9%81%D8%AA%D8%B1-%D9%88%D8%B2%DB%8C%D8%B1%DB%8C-%D8%AC%D9%84%D8%AF-%D8%B3%D8%AE%D8%AA-100-%D8%A8%D8%B1%DA%AF.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }} >
        <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(12)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[12]}</span>
        <div onClick={()=>decrement(12)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/1e5580d34922b2d0971a6d9b0b53f28b48fbb7d9_1670839193.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }} >
        <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(13)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[13]}</span>
        <div onClick={()=>decrement(13)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div   
        className={slideIndex === 4 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://www.papcoiran.com/17984-superlarge_default/%D8%AF%D9%81%D8%AA%D8%B1-%D9%88%D8%B2%DB%8C%D8%B1%DB%8C-%D8%AC%D9%84%D8%AF-%D8%B3%D8%AE%D8%AA-100-%D8%A8%D8%B1%DA%AF.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }} >
        <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(14)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[14]}</span>
        <div onClick={()=>decrement(14)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
    </div>
    <i onClick={handleNextSlide} class="fa fa-chevron-right"></i>
    </> );
}
 
const Timer3 = ({trueandfalse,lable,handleMouseEnter}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    var [count,setcount]=useState(new Array(15).fill(0))
    var increment=(item)=>{
      var up=[...count]
      up[item]+=1
      setcount(up)
    }
    var decrement=(item)=>{
      if(count[item]>0){
      var down=[...count]
      down[item]-=1
        setcount(down)
      }
    }
    useEffect(() => {
        if (trueandfalse) {
          const interval = setInterval(() => {
            setSlideIndex((item) => {
              if (item === 4 ) {
                return 0;
              }
              return item + 1;
            });
          }, 5000);
          
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
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://floracademy.com/wp-content/uploads/2022/07/Conte-A-Paris-Pierre-Noire-Pencil.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(0)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[0]}</span>
        <div onClick={()=>decrement(0)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://storage1.torob.com/backend-api/base/images/mI/8S/mI8S-vzCewpW0O_j.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(1)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[1]}</span>
        <div onClick={()=>decrement(1)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/9cbc85b88ebdadbdfe1c35349742757212316086_1607959947.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(2)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[2]}</span>
        <div onClick={()=>decrement(2)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://artlandshop.ir/wp-content/uploads/2021/06/11-2.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(3)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[3]}</span>
        <div onClick={()=>decrement(3)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/e66a8fcaa7485aebfdce2be00870b7298ab56706_1621362112.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(4)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[4]}</span>
        <div onClick={()=>decrement(4)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/121558306.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(5)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[5]}</span>
        <div onClick={()=>decrement(5)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://aryaartist.com/uploads/2022/11/500x500q100-B6.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(8)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[8]}</span>
        <div onClick={()=>decrement(8)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/1294531.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(9)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[9]}</span>
        <div onClick={()=>decrement(9)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://beraito.com/wp-content/uploads/2021/07/194.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(8)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[8]}</span>
        <div onClick={()=>decrement(8)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://beraito.com/wp-content/uploads/2021/07/217.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(9)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[9]}</span>
        <div onClick={()=>decrement(9)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://amouzco.com/wp-content/uploads/2021/04/%D9%85%D8%AF%D8%A7%D8%AF-%DA%A9%D9%86%D8%AA%D9%87-%D8%B3%D9%81%DB%8C%D8%AF-%DA%A9%D8%B1%D8%AA%D8%A7%DA%A9%D8%A7%D9%84%D8%B1-%D9%85%D8%AF%D9%84-%DA%A9%D9%86%D8%AA%D9%87-%DA%A9%D8%AF-46151-2.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(10)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[10]}</span>
        <div onClick={()=>decrement(10)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/4569000.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(11)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[11]}</span>
        <div onClick={()=>decrement(11)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/2583881.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(12)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[12]}</span>
        <div onClick={()=>decrement(12)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/4305327.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(13)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[13]}</span>
        <div onClick={()=>decrement(13)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/10f380f3440b7b4d735da702a396b519ac100bbd_1635949058.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(14)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[14]}</span>
        <div onClick={()=>decrement(14)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
    </div>
    <i onClick={handleNextSlide} class="fa fa-chevron-right"></i>
    </> );
}

const Timer4 = ({trueandfalse,lable,handleMouseEnter}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    var [count,setcount]=useState(new Array(15).fill(0))
    var increment=(item)=>{
      var up=[...count]
      up[item]+=1
      setcount(up)
    }
    var decrement=(item)=>{
      if(count[item]>0){
      var down=[...count]
      down[item]-=1
        setcount(down)
      }
    }
    useEffect(() => {
        if (trueandfalse) {
          const interval = setInterval(() => {
            setSlideIndex((item) => {
              if (item === 4 ) {
                return 0;
              }
              return item + 1;
            });
          }, 5000);
          
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
        
        className={slideIndex === 0 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://image.torob.com/base/images/hQ/V9/hQV9JvpTIrPwXPjQ.jpg)',backgroundSize:'450px 450px',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(0)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[0]}</span>
        <div onClick={()=>decrement(0)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://www.bitabook.ir/wp-content/uploads/2020/02/IMG_20200202_193135_363.jpg)',backgroundSize:'450px 450px',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(1)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[1]}</span>
        <div onClick={()=>decrement(1)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://serajbookshop.com/wp-content/uploads/2020/08/paint-geometric-shapes.jpg)',backgroundSize:'450px 450px',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(2)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[2]}</span>
        <div onClick={()=>decrement(2)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://www.iranketab.ir/Images/ProductImages/12831bbc130a4fe09e946ba4a1de3b20.jpg)',backgroundSize:'450px 450px',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(3)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[3]}</span>
        <div onClick={()=>decrement(3)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/1678799.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'450px 450px',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(4)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[4]}</span>
        <div onClick={()=>decrement(4)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://image.torob.com/base/images/-w/12/-w12YGQSZp1ogKqF.jpg)',backgroundSize:'450px 450px',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(5)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[5]}</span>
        <div onClick={()=>decrement(5)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/7131a4c28a851c8323f4d79f850414c0da73d067_1701174968.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'450px 450px',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(6)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[6]}</span>
        <div onClick={()=>decrement(6)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://image.torob.com/base/images/Am/76/Am768cWvS4fxUWkg.jpg_/560x560.webp)',backgroundSize:'450px 450px',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(7)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[7]}</span>
        <div onClick={()=>decrement(7)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/659b9ff94af7aedcee80923a880ee5a3a58d4552_1604922931.jpg?x-oss-process=image/resize,h_1600/quality,q_80)',backgroundSize:'450px 450px',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(8)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[8]}</span>
        <div onClick={()=>decrement(8)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div   
        className={slideIndex === 3 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://pezhano.com/Panel/Uploads/3/1/1/5b119e5f-92cd-4332-827f-f00809e6c2b3.jpg)',backgroundSize:'450px 450px',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}>
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(9)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[9]}</span>
        <div onClick={()=>decrement(9)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://alaeipub.ir/wp-content/uploads/%D8%AF%D8%A7%D8%B3%D8%AA%D8%A7%D9%86-%D9%BE%D8%AA-%D9%BE%D8%B3%D8%AA%DA%86%DB%8C-1-scaled.jpg)',backgroundSize:'450px 450px',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}>
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(10)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[10]}</span>
        <div onClick={()=>decrement(10)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/121127939.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'450px 450px',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}>
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(11)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[11]}</span>
        <div onClick={()=>decrement(11)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://image.torob.com/base/images/Fg/MM/FgMMNw2eeGvOHUfg.jpg_/560x560.webp)',backgroundSize:'450px 450px',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}>
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(12)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[12]}</span>
        <div onClick={()=>decrement(12)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://mobinbookcity.com/Uploads/ProductImage/90b664ea-a2e1-4c8e-badc-5c4a517cb9e5.jpg)',backgroundSize:'450px 450px',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}>
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(13)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[13]}</span>
        <div onClick={()=>decrement(13)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://nahang.ir/images/products/book_844109.jpg)',backgroundSize:'450px 450px',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}>
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(14)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[14]}</span>
        <div onClick={()=>decrement(14)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
    </div>
    <i onClick={handleNextSlide} class="fa fa-chevron-right"></i>
    </> );
}

const Timer5 = ({trueandfalse,lable,handleMouseEnter}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    var [count,setcount]=useState(new Array(15).fill(0))
    var increment=(item)=>{
      var up=[...count]
      up[item]+=1
      setcount(up)
    }
    var decrement=(item)=>{
      if(count[item]>0){
      var down=[...count]
      down[item]-=1
        setcount(down)
      }
    }
    useEffect(() => {
        if (trueandfalse) {
          const interval = setInterval(() => {
            setSlideIndex((item) => {
              if (item === 4 ) {
                return 0;
              }
              return item + 1;
            });
          }, 5000);
          
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
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112092747.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(7)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[7]}</span>
        <div onClick={()=>decrement(7)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://aryacompany.ir/wp-content/uploads/2020/08/%D9%BE%D8%A7%D8%B2%D9%84-4%D8%A8%D8%B9%D8%AF%DB%8C-%D8%A2%D8%B1%DB%8C%D8%A7-9012.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(7)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[7]}</span>
        <div onClick={()=>decrement(7)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 0 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://statics.basalam.com/public-3/users/gqwWx/06-02/JzLGCQ2BCQ6megOi5coE6JsQUM5t2hFrAXMq0x03gPp5ITn8mc.jpg_512X512X70.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 0 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(7)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[7]}</span>
        <div onClick={()=>decrement(7)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://aryaland.ir/uploads/products/%D8%AE%D9%85%DB%8C%D8%B1-%D8%A8%D8%A7%D8%B2%DB%8C-%DB%B1%DB%B2-%D8%B1%D9%86%DA%AF-%D8%A2%D8%B1%DB%8C%D8%A7-%D9%85%D8%AF%D9%84-%D8%A2%D9%88%DB%8C%D8%B2-%D9%88%DA%A9%DB%8C%D9%88%D9%85%DB%8C-%D8%A8%D8%A7-%D8%A7%D8%A8%D8%B2%D8%A7%D8%B1-1.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(7)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[7]}</span>
        <div onClick={()=>decrement(7)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://aryaland.ir/uploads/2023/01/%D9%88%D8%A7%D8%AA%D8%B1-%D8%A7%D8%B3%D9%84%D8%A7%DB%8C%D9%85-%D8%AE%D8%B1%D8%B3%DB%8C-500-%DA%AF%D8%B1%D9%85%DB%8C-%D8%A7%D9%88%D9%88%D8%AF%DB%8C-2-.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(7)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[7]}</span>
        <div onClick={()=>decrement(7)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 1 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/120405570.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 1 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(7)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[7]}</span>
        <div onClick={()=>decrement(7)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/112453680.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(7)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[7]}</span>
        <div onClick={()=>decrement(7)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://aradbook.ir/wp-content/uploads/2020/04/punch.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(7)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[7]}</span>
        <div onClick={()=>decrement(7)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 2 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/b790001a4c28f05aa4b11b94e005adb5fdef780f_1633017567.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 2 ? 'block' : 'none' }} >
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(7)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[7]}</span>
        <div onClick={()=>decrement(7)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/119885487.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}>
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(7)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[7]}</span>
        <div onClick={()=>decrement(7)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/2691586.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}>
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(7)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[7]}</span>
        <div onClick={()=>decrement(7)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 3 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://hyperzi.ir/wp-content/uploads/2020/12/Atena-20-piece-circular-puzzle-14.jpeg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 3 ? 'block' : 'none' }}>
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(7)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[7]}</span>
        <div onClick={()=>decrement(7)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/121791091.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}>
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(7)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[7]}</span>
        <div onClick={()=>decrement(7)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://dkstatics-public.digikala.com/digikala-products/1633519.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}>
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(7)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[7]}</span>
        <div onClick={()=>decrement(7)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
            <div 
  
        className={slideIndex === 4 ? 'active' : ''}
        style={{ position:'relative',backgroundImage:'url(https://shazdehkoochulo.com/media/catalog/product/md_146e8_%D8%A8%D8%B1%D8%AC_%D9%87%DB%8C%D8%AC%D8%A7%D9%86.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',display: slideIndex === 4 ? 'block' : 'none' }}>
          <div style={{display:'flex',width:'100%',position:'absolute',bottom:'0px',justifyContent:'center'}}><div style={{marginRight:'100px',cursor:'pointer',backgroundColor:'white'}} class="fa fa-shopping-cart fa-2x"></div>
        <div onClick={()=>increment(7)} className='positive' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>+</div>
        <span style={{paddingRight:'5px',paddingLeft:'5px',backgroundColor:'white',paddingTop:'12px'}}>{count[7]}</span>
        <div onClick={()=>decrement(7)} className='negative' style={{fontSize:35,paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}>-</div></div>
        </div>
    </div>
    <i onClick={handleNextSlide} class="fa fa-chevron-right"></i>
    </> );
}
 
const Main = ({bgimage}) => {
    
    
   

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
      var[box2,setbox2]=useState(true)
      var[box3,setbox3]=useState(true)
      var[box4,setbox4]=useState(true)
      var[box5,setbox5]=useState(true)
    return ( <>
<div style={{backgroundImage:bgimage}} className="main">
    <div  className="productslist">
        <div 
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