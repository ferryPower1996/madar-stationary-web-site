import { useState } from 'react';
import './ads_and_logo.css'
const Ads_and_logo = () => {
    var [srcimage,setsrcimage]=useState('url(http://localhost:3000/static/media/photo_2020-09-09_13-24-01.f1a3a8d97c942813d49b.jpg)')
        var changeBackgroundImage = () => {          
        if(srcimage==='url(http://localhost:3000/static/media/photo_2020-09-09_13-24-01.f1a3a8d97c942813d49b.jpg)'){
            setsrcimage('url(http://localhost:3000/static/media/164991717764925374.7714a68e260b48c91cfe.jpg)')
        }
        if(srcimage==='url(http://localhost:3000/static/media/164991717764925374.7714a68e260b48c91cfe.jpg)'){
            setsrcimage('url(http://localhost:3000/static/media/164994263839087811.75338fa79194bf2b88cb.jpg)')
        }
        if(srcimage==='url(http://localhost:3000/static/media/164994263839087811.75338fa79194bf2b88cb.jpg)'){
            setsrcimage('url(http://localhost:3000/static/media/164991717764925374.7714a68e260b48c91cfe.jpg)')
        }
        }
    return ( <>
    <div className="container">
    <h2>برای حالت دارک مود و لایت مود روی لوگو کلیک کنید</h2>
    <div className="ads_and_logo">
        <div className="ads"></div>
        <div className="ads"></div>
        <div style={{backgroundImage:srcimage}} onClick={changeBackgroundImage} className="logo"></div>
        <div className="ads"></div>
        <div className="ads"></div>
    </div>
    </div>
    </> );
}
 
export default Ads_and_logo;