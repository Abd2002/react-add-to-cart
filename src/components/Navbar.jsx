import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs'
import { AiOutlineLogout } from 'react-icons/ai'

const Navbar = () => {
    return (
        <>
            <div className="bg-light w-100 py-3 px-4 mt-3 border rounded shadow-sm">
                <div className='d-flex justify-content-between align-item-center my-auto'>
                    <h3><Link className='text-decoration-none text-dark' to="/"><AiOutlineLogout style={{ marginTop: "-7px", color: "#e91e63" }} /> Home </Link></h3>
                    <h5><Link className='text-decoration-none' to="/cart"><BsCart3 style={{ marginTop: "10px", color: "#e91e63" }} /></Link></h5>
                </div>
            </div>
        </>
    )
}

export default Navbar