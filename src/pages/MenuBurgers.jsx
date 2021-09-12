import React from 'react'
import Footer from '../components/layout/Footer/Footer'
import Header from '../components/layout/Header/Header'
import { ProductsGrid } from '../components/Products/ProductsGrid'
import data from '../Data/products'

function MenuBurgers() {
  console.log(data)
  const DataBurger = data.filter((ele) => ele.Categoria === 'Burger')
  console.log(DataBurger)

  return (
    <div>
      <Header />
      <ProductsGrid Data={DataBurger} />

      <Footer />
    </div>
  )
}

export { MenuBurgers }
