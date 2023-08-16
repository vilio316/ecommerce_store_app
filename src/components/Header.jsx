export default function Header(){
    return(
        <div className="grid five_cols">
            <p>CompanyName</p>
            <a href={"/products"}>Products</a>
            <a>About Us</a>
            <a>Contact Us</a>
            <div className="grid centered_items two_cols">
        <i>Contact Icon</i>
        <i>Cart Icon</i>
            </div>
        </div>
    )
}