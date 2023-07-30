import './footer.css'
const Footer = () => {
    return ( <>
    <div className="footer">
        <div className="footerleft">
            <div className="sochialmedias">
                <img src={require("./photo_2020-09-09_13-24-01.jpg")} />
                <div className="accounts">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-youtube"></i>
                    <i className="fa fa-telegram"></i>
                    <i className="fa fa-instagram"></i>
                </div>
            </div>
        </div>
        <div className="footerright">
            <div className="detiles">
                <h2 className='fa fa-phone'> 086 4222 4286</h2>
                <h2 className='fa fa-mobile'> 09219684556</h2>
                <h2 className='fa fa-map-marker'> ساوه-خیابان شریعتی-کوچه 14-روبروی سینما</h2>
            </div>
        </div>
    </div>
    </> );
}
 
export default Footer;