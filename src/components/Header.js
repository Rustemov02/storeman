// import { Link } from "react-router-dom"
import Link from "next/link"



const Header = () => {

    const textStyle = {
        width : "100%",
        textAlign : 'center',
        textDecoration: "none",
        color: "white",
        fontFamily: "cursive",
        fontSize: "23px", 
        padding: '30px 0 10px 0 ',
        backgroundColor: "#dead6f",
        
    }

    return (
        <div style={{ display: "flex", flexDirection: 'row',border : 'solid red 1px',height : "40px"}}>
            {/* <Link style={textStyle} href='/'>Sifarişlər</Link> */}
            {/* <Link style={{ textDecoration: "none", color: "black", fontFamily: "cursive", fontSize: "23px", border: 'solid black 1px', padding: '3px 10px', borderRadius: "10px", backgroundColor: "#c3c3df" }} href='/admin'>Admin Panel</Link> */}
        </div>
    )
}

export default Header