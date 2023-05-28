import { useEffect, useState } from 'react'
import CartCard from '../components/CartCard';
import MsgBox from '../components/MsgBox';

const List = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        let products = localStorage.getItem('cart');
        setCart(JSON.parse(products))
    }, []);

    const removeProduct = (item) => {
        let product = cart.filter((product) => product.id !== item.id);
        localStorage.setItem('cart', JSON.stringify(product));
        setCart(product)
    }

    return cart.length || cart === undefined ? cart.map((item) => <CartCard item={item} key={item.id} removeProduct={removeProduct} />) : <MsgBox />
}

export default List