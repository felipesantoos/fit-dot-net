import Header from '../components/Header';

import PeopleImage from '../../assets/images/people.png';

import Button from '../components/Button';

import styles from '../styles/pages/HomePage.module.scss';

function HomePage() {
    return (
        <div className={styles.container}>
            <Header />
            <main>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <h1>Make yourself<br />healthy and<br />stronger</h1>
                        <p>Track your workouts, get better results and be the 
                        best version<br /> of you. Less thinking, more lifting.</p>
                        <Button type="primary">Get Free Trial</Button>
                    </div>
                    <div className={styles.right}>
                        <img src={PeopleImage} alt="People training" />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HomePage;
