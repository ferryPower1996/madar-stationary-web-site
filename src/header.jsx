import './header.css'
const Header = () => {
    return ( <>
    <div className="header">
        <div className="header_left">
            <i><a href="#">خانه</a></i>
            <i><a href="#">درباره ی ما</a></i>
            <i><a href="#">حساب کاربری</a></i>
            <i><a href="#">سبد خرید</a></i>
        </div>
        <div className="header_right">
        <i><a href="#">نوشت افزار</a></i>
        <i><a href="#">دفتر</a></i>
        <i><a href="#">لوازم هنری</a></i>
        <i><a href="#">کتاب داستان</a></i>
        <i><a href="#">اسباب بازی</a></i>
        </div>
    </div>
    </> );
}
 
export default Header;