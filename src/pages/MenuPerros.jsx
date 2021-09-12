import React from 'react'
import Footer from '../components/layout/Footer/Footer'
import Header from '../components/layout/Header/Header'
import { ProductsGrid } from '../components/Products/ProductsGrid'
import data from '../Data/products'

function MenuPerros() {
  console.log(data)
  const DataPerros = data.filter((ele) => ele.Categoria === 'PERRO')
  console.log(DataPerros)

  return (
    <div>
      <Header />
      <ProductsGrid Data={DataPerros} />
      <Footer />
    </div>
  )
}

export { MenuPerros }
