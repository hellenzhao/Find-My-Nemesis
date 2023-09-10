import {BrowserRouter, Route, Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Profile'>this doesnt matter rn</Link>
                </li>
            </ul>
        </nav>
    )
}