import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';
function Product(props) {
  const { product } = props;
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <strong>
            <Card.Title>{product.name}</Card.Title>
          </strong>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Link to={`/product/${product.slug}`}>
          <Button>Add to cart</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default Product;
