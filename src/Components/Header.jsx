import moment from 'moment'
import logo from '../../public/logo.png'

const Header = () => {
  return (

    <div className='flex flex-col justify-center items-center'>
        
        <div className="logo mt-6">
            <img className='w-[300px]' src={logo} alt="" />
        </div>
        <h2 className='text-gray-500 mt-3'>Journalism Without Fear or Favour</h2>
        <p className='text-gray-700 mt-2'>{moment().format("dddd, MMMM Do YYYY")}</p>
   
    </div>
  )
}

export default Header
