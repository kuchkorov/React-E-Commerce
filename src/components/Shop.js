import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import BasketList from './BasketList';
import Cart from './Cart';
import GoodLIst from './GoodList';
import Loader from './Loader';
import { toast } from 'react-toastify';

const Shop = () => {

  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false)
  console.log(order)

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      }
      setOrder([...order, newItem])
    }else {
      const newOrder = order.map((orderItem, index) => {
        if(index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        }else {
          return item
        }
      });
      setOrder(newOrder)
    }
    toast.success("Buyurtmangiz savatchaga qo'shildi!!!")

  }

  const RemoveFromBasket = (itemID) => {
    const newOrder = order.filter(item => item.id !== itemID);
    setOrder(newOrder);
    toast.error("Buyurtma savatchadan o'chirildi!!!")
  }
  
  const handleBashketShow = () => {
    setBasketShow(!isBasketShow);
  }

  const incrementQuantity = (itemID) => {
    const newOrder = order.map(el => {
      if (el.id ===itemID) {
        const newQuantity = el.quantity + 1
        return {
          ...el,
          quantity: newQuantity
        }
      }else {
        return el
      }
    })
    setOrder(newOrder);
  }

  const decrementQuantity = (itemID) => {
    const newOrder = order.map(el => {
      if (el.id ===itemID) {
        const newQuantity = el.quantity - 1
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0
        }
      }else {
        return el
      }
    })
    setOrder(newOrder);
  }

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    }).then(res => res.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <div className=" container content">
      <Cart quantity={order.length} handleBashketShow={handleBashketShow} />
      {loading ? <Loader /> : <GoodLIst goods={goods} addToBasket={addToBasket} />}
      {isBasketShow && <BasketList 
        order={order} 
        handleBashketShow={handleBashketShow}  
        RemoveFromBasket={RemoveFromBasket}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        />}
    </div>
  )
}

export default Shop