import './ads_and_logo.css'
const Ads_and_logo = ({changeBackgroundImage,srcimage}) => {
    return ( <>
    <div className="container">
    <h2>برای حالت دارک مود و لایت مود روی لوگو کلیک کنید</h2>
    <div className="ads_and_logo">
        <div className="ads"></div>
        <div className="ads"></div>
        <div style={{backgroundImage:`${srcimage}`}} onClick={changeBackgroundImage} className="logo"></div>
        <div className="ads"></div>
        <div className="ads"></div>
    </div>
    </div>
    </> );
}
 
export default Ads_and_logo;