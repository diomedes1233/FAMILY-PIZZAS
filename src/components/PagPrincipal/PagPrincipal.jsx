import React from 'react'
import styles from './PagPrincipal.module.css'
import hawallana from '../../assets/img/Hawallana.jpg'
import hamburgesa from '../../assets/img/HamburguesaSencillaDeCarne.jpg'
import perro from '../../assets/img/Perro.png'

function PagPrincipal() {
  return (
    <div className={styles.container}>
      <section className={styles.text}>
        Bienvenidos a pizza famili.com Un lugar familiar acogedor para venga y
        disfrute con tu familia de nuestras deliciosas pizzas y comidas rápidas
        a tu gusto
      </section>
      <div className={styles.image}>
        <img width={230} height={345} src={hawallana} alt="pizza" />
        <img width={230} height={345} src={hamburgesa} alt="Burger" />
        <img width={230} height={345} src={perro} alt="PERRO" />
      </div>
    </div>
  )
}

export default PagPrincipal
