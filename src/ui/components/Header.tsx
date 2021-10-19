import { BiDumbbell } from 'react-icons/bi'

import '../styles/components/Header.css';

function Header() {
    return (
        <header id="app-header">
            <div>
                <BiDumbbell />
                <h1>Fit.net</h1>
            </div>

            <nav>
                <ul>
                    <li>Features</li>
                    <li>Princing</li>
                    <li>Kits</li>
                    <li>Lifestyle</li>
                </ul>
            </nav>

            <button>Get Free Trial</button>
        </header>
    );
}

export default Header;
