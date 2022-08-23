import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen() {
  return (
    <div>
      <h1>Featured Products</h1>

      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <strong>
                  <p>{product.name}</p>
                </strong>
              </Link>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
