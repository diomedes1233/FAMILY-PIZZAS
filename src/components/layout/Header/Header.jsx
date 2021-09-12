import styles from './Header.module.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>FAMILY PIZZAS</h1>
      <div>
        <button className={styles.cart}>
          <Link to="/Comprar" className="fas fa-cart-arrow-down"></Link>
        </button>
      </div>

      <nav>
        <button className={styles.menu}>
          <Link to="/">INICIO</Link>
        </button>
        <button className={styles.menu}>
          <Link to="/menupizzas">PIZZAS</Link>
        </button>
        <button className={styles.menu}>
          <Link to="/menuburgers">HAMBURGUESA</Link>
        </button>
        <button className={styles.menu}>
          <Link to="/menuperros">PERROS</Link>
        </button>

        <div className={styles.buscar}>
          <input type="text" className={styles.input} placeholder="Buscar..." />
          <button className={styles.imagbtn}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header
