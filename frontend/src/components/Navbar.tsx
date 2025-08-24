import { useNavigate } from "react-router"

function Navbar() {
   const navigate = useNavigate();

   const handleClick = (route: string) => {
    navigate(`/${route}`)
   }
    return (
        <>
            <div id="navbar" className="flex gap-2 justify-between px-4 py-4 bg-gray-100 mb-10">
                <div className="logo">LOGO</div>
                <div className="navOptionsWrapper">
                    <ul className="navPages flex gap-2">
                        <li><a href="#" onClick={(e) => handleClick('')}>Home</a></li>
                        <li><a href="#" onClick={(e) => handleClick('register')}>Register</a></li>
                        <li><a href="#" onClick={(e) => handleClick('login')}>Login</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar   