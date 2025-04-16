import React, { useContext } from 'react'
import './Popular.css'
// import Item from '../Item/Item'
import tshirt1 from '../Assets/SouledStore.webp'
import tshirt2 from '../Assets/SpiderVerse.webp'
import tshirt3 from '../Assets/OutOfThis.webp'
import { ShopContext } from '../../Context/ShopContext'

const Popular = (props) => {

  const {addToCart} = useContext(ShopContext);

  const products = [
    {id:1, name: 'Batman: Wayne Industries', image: tshirt1, price: 20},
    {id:2, name: 'Spider-Man: Spider-Verse', image: tshirt2, price: 25},
    {id:3, name: 'Batman: Out of this World', image: tshirt3, price: 30}
  ]

  const handleClick = (data) => {
    // console.log('data', data);
    addToCart(data);
  }

  return (
    <div className='popular'>
      <h1>MY PRODUCTS</h1>
      {/* { <div className="popular-item">
        {props.data.map((item,index)=>{
            return <Item id={item.id} key={index} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div> } */}
<section className="products" id="products">
        <div className="container">
            <div class="product-list" id="product-list">
                {/* <div class="product-item">
                    <img src={tshirt1} alt="T-shirt Design 1"/>
                    <h3>Batman: Wayne Industries</h3>
                    <p>Price: $20.00</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
                <div class="product-item">
                    <img src={tshirt2} alt="T-shirt Design 2"/>
                    <h3>Spider Verse</h3>
                    <p>Price: $25.00</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
                <div class="product-item">
                    <img src={tshirt3} alt="T-shirt Design 3"/>
                    <h3>Out Of This World</h3>
                    <p>Price: $30.00</p>
                    <button class="add-to-cart" onClick={() => handleClick()}>Add to Cart</button>
                </div> */}
                {
                  products.map((product, index) => {
                    return (
                      <div key={index} className="product-item">
                        <img src={product.image} alt={`T-shirt Design ${index + 1}`} />
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}.00</p>
                        <button className="add-to-cart" onClick={() => handleClick(product)}>Add to Cart</button>  
                      </div>
                    )
                  })
                }
            </div>
          </div>
</section>
    </div>
  );
};

export default Popular;
