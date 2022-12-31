import React from 'react'
import styles from "../styles/PizzaList.module.css";
import PizzaCard from './PizzaCard';


function PizzaList() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                Be it any occasion, we all love to eat pizza at home. But,
                what goes behind making this delicious dish? Well, learn all about making a delicious pizza at home with this easy recipe that will take you
                through detailed steps some tips that will guide you in preparing a Pizza at home.
            </p>
            <div className={styles.wrapper}>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>

        </div>
    )
}

export default PizzaList