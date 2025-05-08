import React, { useContext } from 'react'
import { Container, Alert, Card } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import Cart from '../Components/Cart'
import { Link } from 'react-router-dom'

export default function CartPage() {
  const { cartItems } = useContext(CartContext)
  const total = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2)

  return (
    <div className="d-flex flex-column min-vh-100">
      <Container className="flex-grow-1 my-4">
        <Card className="p-4 shadow-sm border-0 h-100">
          <h2 className="mb-4 text-center">
            🛍️ <strong>Votre Panier</strong>
          </h2>

          {cartItems.length === 0 ? (
            <Alert variant="info" className="text-center">
              Votre panier est vide pour le moment.
              <br />
              <Link to="/" className="btn btn-outline-primary mt-3">
                Explorer les produits
              </Link>
            </Alert>
          ) : (
            <>
              <Cart />
              {/* Affichage du total à payer juste après la liste des produits */}
              <div className="d-flex justify-content-between align-items-center mt-4">
                <h4 className="mb-0">
                  Total à payer : <strong>{total} TND</strong>
                </h4>
              </div>
            </>
          )}
        </Card>
      </Container>
    </div>
  )
}
