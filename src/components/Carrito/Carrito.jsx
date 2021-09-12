import React from 'react'
import './Carrito.css'

const Carrito = ({ carrito, agregarProduct }) => {
  console.log(carrito)

  const eliminar = (id) => {
    const product = carrito.filter((product) => product.id !== id)
    agregarProduct(product)
  }
  return (
    <div className="carrito">
      {carrito.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        carrito.map((product) => (
          <div key={product.id}>
            <h2>{product.neme}</h2>
            <p>${product.precio}</p>
            <button type="submit" onClick={() => eliminar(product.id)}>
              Eliminar
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default Carrito
