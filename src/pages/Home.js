import { useEffect, useState } from 'react'
import products from '../data/data';
import Card from '../components/Card';
import { ToastContainer as Alert, toast } from 'react-toastify';

const Home = () => {
    let cartProducts = JSON.parse(localStorage.getItem('cart')) || [];

    const [cart, setCart] = useState(cartProducts);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);


    const addToCart = (item) => {
        let isProductExistInCart = cart.filter((prod) => item.id === prod.id).length;
        if (!isProductExistInCart) {
            setCart([...cart, item]);
            toast.success("Product added to the cart!");
            return true
        }
        toast.warn("This product available in cart!")
    }
    return (
        <div className='row'>
            {
                products?.map((item) => <Card item={item} key={item.id} addToCart={addToCart} />)
            }
            <Alert position="bottom-right" />
        </div>
    )
}

export default Home