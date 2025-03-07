import Header from "../Header"
import Navbar from "../Navbar"
import Contack from "../Contact"

const Leftsection = () => {
  return (
    <div className="px-4">
        <div className='sticky top-0 grid gap-y-4 lg:grid-rows-[35%_40%_25%] lg:h-[90vh]'>
           <Header />
           <Navbar />
           <Contack />
        </div>   
    </div>
  )
}
export default Leftsection;    