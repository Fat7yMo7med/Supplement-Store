import { createContext, useState } from "react";

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (product) => {
        setCart(prev => {
        const exists = prev.find(item => item.id === product.id);
        if (exists) {
            return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item);
        }
        return [...prev, { ...product, quantity: product.quantity }];
        });
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const decreaseQuantity = (id) => {
        setCart(prev =>
        prev.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0)
        );
    };
    const clearCart = () => setCart([]);

    return (
        <cartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity, clearCart }}>
        {children}
        </cartContext.Provider>
    );
};
