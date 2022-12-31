import styles from "../styles/Footer.module.css";

import Image from "next/image";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />


            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA...
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANT
                    </h1>
                    <p className={styles.text}>
                        131 R. Shivappa Naik Road #304.
                        <br /> Shivamogga, 577201
                        <br /> 9380183256
                    </p>
                    <p className={styles.text}>
                        181 R. BH Road #21.
                        <br /> Sagara, 577431
                        <br /> 8197834454
                    </p>
                    <p className={styles.text}>
                        171 R. Jog Road #999.
                        <br /> Sagara, 577401
                        <br /> 9380183256
                    </p>
                    <p className={styles.text}>
                        151 R. Ashok Road #100.
                        <br /> Sagara, 577401
                        <br /> 9380183256
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br /> 9:00 - 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:00 - 24:00
                    </p>
                    <h1 className={styles.title}>WEBSITE MAKER</h1>
                    <p className={styles.text}>
                        MANOJ H
                        <br />   Associate Software Engineer
                        <br />From Bangalore
                        <br />    <div className={styles.item}>
                            <Image src="/img/pic.png" objectFit="cover" layout="fill" alt="" />


                        </div>
                    </p>
                </div>
            </div>
        </div>

    );
}


export default Footer