import { NavLink } from "react-router-dom"
import userIcon from "../../public/user.png"


const Navbar = () => {
  return (
    <div className="flex justify-between items-center">

      <div className="div"></div>

      <div className="nav space-x-5">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/career'>Career</NavLink>
        
      </div>

      <div className="flex gap-2 items-center">
        <div>
          <img src={userIcon} alt="" />
        </div>
        <button className="btn btn-neutral rounded-none">Login</button>
      </div>



    </div>
  )
}

export default Navbar
