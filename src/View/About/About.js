import './About.css';
import Navbar from './../../Component/Navbar/Navbar';
import Footer from './../../Component/Footer/Footer';
import Nature from './src/View/Nature';

export default function About() {
    return ( <
        div className = 'footer-conatiner' >
        <
        Navbar / >
        <
        h1 > About < /h1>  <
        Footer / >
        <
        img src = { Nature }
        /> < /
        div >
    )
}