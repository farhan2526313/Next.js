import Link from "next/link";

const Nav  = () => {

    return (
        <div className="flex end-5 mx-4 bg-green-600">
            <Link href= "/"> Home</Link>
            <Link href= "/about"> About</Link>
            <Link href= "/contactus"> Contact US </Link>
            <Link href= "/product"> Product </Link>
        </div>    
 
    )
}

export default Nav;