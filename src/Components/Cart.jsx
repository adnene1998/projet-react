// src/Components/Cart.jsx
import React, { useContext } from 'react'
import { ListGroup, Button, ButtonGroup } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext)

  return (
    <div>
      <h2>Mon Panier</h2>
      {cartItems.length === 0 ? (
        <p>Panier vide</p>
      ) : (
        <ListGroup>
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
              <div>
                <strong>{item.name}</strong> <br />
                <span>{item.price} TND x {item.quantity} = {(item.price * item.quantity).toFixed(2)} TND</span>
              </div>
              <ButtonGroup>
                <Button variant="secondary" size="sm" onClick={() => decreaseQuantity(item.id)}>
                  ➖
                </Button>
                <Button variant="secondary" size="sm" onClick={() => increaseQuantity(item.id)}>
                  ➕
                </Button>
                <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                  🗑️
                </Button>
              </ButtonGroup>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  )
}
