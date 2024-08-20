// import { Link } from "react-router-dom"
import Link from "next/link"



const Header = () => {


    return (
        <div style={{ display: "flex", flexDirection: 'row', justifyContent: "space-around" }}>
            <Link style={{ textDecoration: "none", color: "black", fontFamily: "cursive", fontSize: "23px", border: 'solid black 1px', padding: '3px 10px', borderRadius: "10px", backgroundColor: "#c3c3df" }} href='/'>Sifarişlər</Link>
            <Link style={{ textDecoration: "none", color: "black", fontFamily: "cursive", fontSize: "23px", border: 'solid black 1px', padding: '3px 10px', borderRadius: "10px", backgroundColor: "#c3c3df" }} href='/admin'>Admin Panel</Link>
        </div>
    )
}

export default Header