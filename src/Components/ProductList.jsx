import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from './Product'

const products = [
  { id: 1, name: 'Produit A', price: 30, image: 'https://picsum.photos/id/101/400/300' },
  { id: 2, name: 'Produit B', price: 50, image: 'https://picsum.photos/id/101/400/300' },
  { id: 3, name: 'Produit C', price: 20, image: 'https://picsum.photos/id/101/400/300' },
  { id: 4, name: 'Produit D', price: 20, image: 'https://picsum.photos/id/101/400/300' },
  { id: 5, name: 'Produit E', price: 20, image: 'https://picsum.photos/id/101/400/300' },
  { id: 6, name: 'Produit F', price: 20, image: 'https://picsum.photos/id/101/400/300' },
  { id: 7, name: 'Produit G', price: 20, image: 'https://picsum.photos/id/104/400/300' },
]

export default function ProductList() {
  return (
    <>
      <h2 className="mb-4">Produits</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} md={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}
