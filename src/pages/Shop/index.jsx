import React, {useState} from 'react'
import Basket from '../../components/Basket'
import Main from '../../components/Main'
import data from '../../data'
import Header from '../../components/Header'


const Shop = () => {

    const { products } = data;

    const [cartItems, setCartItems] = useState([])

    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id)
        if(exist) {
            setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x)
            )
        } else {
            setCartItems([...cartItems, {...product, qty: 1}])
        }
    }

   const onRemove = (product) => {
    const exist = cartItems.find(x => x.id === product.id)
    if(exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
        setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty -1} : x)
            )
    }
   }

    return (
        <div>
            <Header countCartItems={cartItems.length}/>
            <Main 
                products={products}
                onAdd={onAdd}
            />
            <Basket 
                onAdd={onAdd}
                cartItems={cartItems}
                onRemove={onRemove}
            />
        </div>
    )
}

export default Shop

// https://www.youtube.com/watch?v=AmIdY1Eb8tY