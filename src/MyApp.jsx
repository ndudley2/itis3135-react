import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Home from "../src/home.jsx"
import Introduction from "../src/introduction.jsx"
import Contract from "../src/contract.jsx"
import About from "../src/about.jsx"
import dragonflyImg from '../images/dragonfly.jpg'

export default function MyApp() {
    return (
        <Router basename={import.meta.env.BASE_URL}>
        <>
            <Header />
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/index" element={<Home />}/>
            <Route path="/introduction" element={<Introduction />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contract" element={<Contract />}/>
            </Routes>
            <Footer />
        </>
        </Router>
    )
}

function Header() {
    return (
        <header>
            <h1>Natalia Dudley's Nice Dragonfly | ITIS3135</h1>
            <img src={dragonflyImg} alt="a blue dragonfly on a leaf"/>
            <p><i>"The site I made for class"</i></p>
            <nav>
                <p>
                <Link to="/index">Home</Link> | <Link to="/introduction">Introduction</Link> | <Link to="/contract">Contract</Link> | <Link to="/about">About</Link>
                </p>
            </nav>
            <hr/>
        </header>
    );
}
function Footer() {
    return (
        <footer>
            <hr />
            <nav>
                <p>
                <a href="https://webpages.charlotte.edu/ndudley2/" target="_blank">CLT Web</a> | <a href="https://ndudley2.github.io/" target="_blank">GitHub.io</a> | <a href="https://github.com/ndudley2" target="_blank">GitHub</a> | <a href="https://www.freecodecamp.org/ndudley2" target="_blank">freeCodeCamp</a> | <a href="https://www.codecademy.com/profiles/ndudley2" target="_blank">Codecademy</a> | <a href="https://www.linkedin.com/in/natalia-dudley-41b9312bb/" target="_blank">LinkedIn</a>
                </p>
            </nav>
            <p>Site Designed By <a href="nataliadudleydesigns.com/">Natalia Dudley Designs</a></p>
            <p>Certified in <a target="_blank" href="https://www.freecodecamp.org/certification/ndudley2/responsive-web-design-v9">Responsive Web Design</a></p>
            <p>Natalia Dudley ©2026</p>
        </footer>
    )
}

