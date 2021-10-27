import Header from '../components/Header';

import PeopleImage from '../../assets/images/people.png';

import '../styles/pages/HomePage.css';
import '../styles/components/Button.css';
import Button from '../components/Button';

function HomePage() {
    return (
        <div id="home-page">
            <Header />
            <main>
                <div className="top">
                    <div className="left">
                        <h1>Make yourself<br />healthy and<br />stronger</h1>
                        <p>Track your workouts, get better results and be the 
                        best version<br /> of you. Less thinking, more lifting.</p>
                        <Button type="primary">Get Free Trial</Button>
                    </div>
                    <div className="right">
                        <img src={PeopleImage} alt="People training" />
                    </div>
                </div>
                <div className="bottom"></div>
            </main>
        </div>
    );
}

export default HomePage;
