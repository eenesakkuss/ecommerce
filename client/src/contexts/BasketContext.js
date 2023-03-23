import { useState,createContext,useContext,useEffect } from "react";

const BasketContext = createContext();

const defaultBasket = JSON.parse(localStorage.getItem("basket")) || [];

const BasketProvider = ({children}) =>{
    const [items,setItems] = useState(defaultBasket);
    
    useEffect(()=>{
        localStorage.setItem("basket", JSON.stringify(items))
    },[items])

    const addToBasket =(data,findBasketItem)=>{
        if(!findBasketItem){
            return setItems((items)=>[data,...items])
        }

        const filteredItem = items.filter((items) => items._id !== findBasketItem._id)
        setItems(filteredItem)
    }

    const emptyBasket = ()=> setItems([])

    const removeBasket =(item_id)=>{
        const filtered = items.filter((item) => item._id !== item_id)
        setItems(filtered);
    }
    const values={
        items,
        setItems,
        addToBasket,
        removeBasket,
        emptyBasket
    };

    return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
}

const useBasket = () =>  useContext(BasketContext);

export{
    BasketProvider,
    useBasket,
}