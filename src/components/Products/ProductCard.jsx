import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom'

export function ProductCard({ product }) {
  const image = product.image
  console.log(product)

  return (
    <ul>
      <li className={styles.productCard}>
        <img
          width={230}
          height={345}
          className={styles.productImage}
          src={image}
          alt={product.name}
        />
        <div>{product.name}</div>
        <Link to="/Comprar">
          <button>AGREGAR AL CARRITO</button>
        </Link>
      </li>
    </ul>
  )
}
