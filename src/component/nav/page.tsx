import Link from "next/link";

const Nav  = () => {

    return (
        <div className="flex end-5 mx-4 bg-green-600">
            <Link href= "/"> Home</Link>
            <Link href= "/about"> About</Link>
            <Link href= "/contactus"> ContactUS </Link>
            <Link href= "/detail"> Detail </Link>
        </div>    
 
    )
}

export default Nav;