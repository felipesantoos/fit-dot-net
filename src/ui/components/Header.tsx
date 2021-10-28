import { BiDumbbell } from 'react-icons/bi'
import Button from './Button';

import '../styles/components/Header.scss';
import '../styles/components/Button.scss';

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

            <Button type="normal">Get Free Trial</Button>
        </header>
    );
}

export default Header;
