import React, { useState } from 'react';//An example of a hook. Hooks are functions that let you hook into React features
import Product from "./product";
import Cart from "./cart";


function Store() {

    //add a product list, and a fuction to add product use state
    const [productsList, setProductList] = useState([
        { name: "Gucci", price: 10, id: 1 },//
        { name: "Prada", price: 45, id: 2 },//
        { name: "Mui Mui", price: 20, id: 3 }//
    ]);
    // function to add new product using the Add Prouduct Button
    // const addProduct= (newProduct) =>{
    //     setproductList([...productsList,newProduct]);//append the new product to the productList array
    // }

    //Add products to productList suing handleInputChange, and handleAddproduct button
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: ""
    });

    const [cartItems, setCartItems] = useState([]);
    //handleChange Function
    const handleInputChange = (event) => {
        setNewProduct({
            ...newProduct, [event.target.name]: event.target.value
        });
    };
        // handleAddProduct
        const handleAddProduct = () => {
            if (newProduct.name && newProduct.price) {
                setProductList([...productsList, { ...newProduct }
                ]);
                setNewProduct({ name: "", price: "" });
            }
        };

        //cerate a remove product function
        const handleRemoveProduct = (productName) => {
         setProductList(productsList.filter((product)=> product.name !== productName))
        };

       
        const addCartItems = ()  =>{

        }

        const handleAddToCart = (productName) =>{
            const existingItem= cartItems.find((item)=>item.name === product.name);
                if (existingItem){
                  const  updateCartItems = cartItems.map((item)=> item.name===product.name, {...item, Quanttity:item.quanttity=1})
                  setCartItems(updateCartItems);
                }
                else{
                    setCartItems([...cartItems, {...product, quantity: item.quantity}]);
                }
        }
    return (
        <div>
            <h1>Store</h1>
            {/* <button onClick={() => 
            addProduct({name:"New product",price:0})
        }>
           Add New Product 
        </button> */}
        <input
        type="text" 
        name="name"
        placeholder='Enter Product Name' 
        value={newProduct.name}
        onChange={handleInputChange}
         /> 

         <input 
         type="text"
         name="price"
         placeholder='Enter Product Price'
        value={newProduct.price}
        onChange={handleInputChange}
        />
        <button onClick={handleAddProduct}>Add Product</button>
        <button onClick={()=> handleRemoveProduct(newProduct.name)}>Remove Product</button>
        <button onclick ={()=> handleAddToCart(product)}>Add to Cart </button>
    
            {productsList.map((product) => (
                <Product
                    name={product.name}
                    price={product.price}
                    id={product.id}
                />
            ))}
            <div>
                <Cart  cartItems={cartItems}/>
            </div>
        </div>
    )
};

export default Store;