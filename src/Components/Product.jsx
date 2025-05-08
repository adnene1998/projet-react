import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'

export default function Product({ product }) {
  const { addToCart } = useContext(CartContext)

  return (
    <Card className="shadow-sm mb-4">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        style={{ height: '200px', objectFit: 'cover' }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/400x300?text=Image+indisponible';
        }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Prix : {product.price} TND</Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>
          Ajouter au panier
        </Button>
      </Card.Body>
    </Card>
  )
}
