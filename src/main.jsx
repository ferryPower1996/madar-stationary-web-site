import './main.css'
import Slider from './slider'
const Main = () => {
    return ( <>
<div className="main">
    <div className="productslist">
        <div className="products">
            <i class="fa fa-chevron-left"></i>
            <div className="product active" id='slide1 ' ></div>
            <div className="product active" id='slide2 ' ></div>
            <div className="product active" id='slide3 ' ></div>
            <div className="product" id='slide4'></div>
            <div className="product" id='slide5'></div>
            <i class="fa fa-chevron-right"></i>
        </div>
        <div className="products">
            <i class="fa fa-chevron-left"></i>
            <div className="product active" id='slide6 ' ></div>
            <div className="product active" id='slide7 ' ></div>
            <div className="product active" id='slide8 ' ></div>
            <div className="product" id='slide9'></div>
            <div className="product" id='slide10'></div>
            <i class="fa fa-chevron-right"></i>
        </div>
        <div className="products">
            <i class="fa fa-chevron-left"></i>
            <div className="product active" id='slide11 ' ></div>
            <div className="product active" id='slide12 ' ></div>
            <div className="product active" id='slide13 ' ></div>
            <div className="product" id='slide14'></div>
            <div className="product" id='slide15'></div>
            <i class="fa fa-chevron-right"></i>
        </div>
        <div className="products">
            <i class="fa fa-chevron-left"></i>
            <div className="product active" id='slide16 ' ></div>
            <div className="product active" id='slide17 ' ></div>
            <div className="product active" id='slide18 ' ></div>
            <div className="product" id='slide19'></div>
            <div className="product" id='slide20'></div>
            <i class="fa fa-chevron-right"></i>
        </div>
        <div className="products">
            <i class="fa fa-chevron-left"></i>
            <div className="product active" id='slide21 ' ></div>
            <div className="product active" id='slide22 ' ></div>
            <div className="product active" id='slide23 ' ></div>
            <div className="product" id='slide24'></div>
            <div className="product" id='slide25'></div>
            <i class="fa fa-chevron-right"></i>
        </div>
    </div>
</div>
<Slider/>
    </> );
}
 
export default Main;