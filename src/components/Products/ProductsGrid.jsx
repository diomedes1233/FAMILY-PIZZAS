import { ProductCard } from './ProductCard'
import styles from './ProductsGrid.module.css'
export function ProductsGrid({ Data }) {
  return (
    <div>
      <ul className={styles.productsGrid}>
        {Data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}
