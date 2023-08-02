import './app.css'
import Ads_and_logo from "./ads_and_logo";
import Header from "./header";
import Main from './main';
import Footer from './footer';
import { useState } from 'react';
const App = () => {
    var [srcimage,setsrcimage]=useState('url(http://localhost:3000/static/media/164991717764925374.6061086430f21016c173.png)')
    var [bgimage,setbgimage]=useState('url(http://localhost:3000/static/media/164991717764925374.6061086430f21016c173.png)')
        var changeBackgroundImage = () => {          
        if(srcimage==='url(http://localhost:3000/static/media/164991717764925374.6061086430f21016c173.png)'&& bgimage==='url(http://localhost:3000/static/media/164991717764925374.6061086430f21016c173.png)'){
            setsrcimage('url(http://localhost:3000/static/media/164994263839087811.464b4e1e474c29d10b4c.jpg)');
            setbgimage('url(http://localhost:3000/static/media/164994263839087811.464b4e1e474c29d10b4c.jpg)')
        }
        if(srcimage==='url(http://localhost:3000/static/media/164994263839087811.464b4e1e474c29d10b4c.jpg)'&& bgimage==='url(http://localhost:3000/static/media/164994263839087811.464b4e1e474c29d10b4c.jpg)'){
            setsrcimage('url(http://localhost:3000/static/media/164991717764925374.6061086430f21016c173.png)');
            setbgimage('url(http://localhost:3000/static/media/164991717764925374.6061086430f21016c173.png)')
        }
        }
    return ( <div>
    <Header/>
    <Ads_and_logo changeBackgroundImage={changeBackgroundImage} srcimage={srcimage}/>
    <Main bgimage={bgimage}/>
    <Footer/>
    </div> );
}
 
export default App;