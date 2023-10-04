import { Link } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
    return ( <
        div className = "NavStyle" >
        <
        h1 className = 'Nav-brand' > React JS < /h1>

        <
        Link className = 'Nav-menu'
        to = '/' > Home < /Link> 

        <
        Link className = 'Nav-menu'
        to = '/about' > About < /Link> 

        <
        Link className = 'Nav-menu'
        to = '/contact' > Contact < /Link>  

        <
        /div >
    )
}