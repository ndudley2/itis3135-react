import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./home.jsx"
import Introduction from "./introduction.jsx"
import Contract from "./contract.jsx"
import About from "./about.jsx"
import dragonflyImg from './assets/dragonfly.jpg'
import IntroImg from './assets/introduction_portrait.jpeg'

export default function MyApp() {
    return (
        <Router>
        <body>
            <Header />
            <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="index.html" element={<Home />}/>
            <Route exact path="introduction.html" element={<Introduction />}/>
            <Route exact path="about.html" element={<About />}/>
            <Route exact path="contract.html" element={<Contract />}/>
            </Routes>
            <Footer />
        </body>
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
                <a href="index.html">Home</a> | 
                <a href="introduction.html">Introduction</a> | 
                <a href="contract.html">Contract</a> | 
                <a href="about.html">About</a>
                </p>
            </nav>
        </header>
    );
}
function Footer() {
    return (
        <footer>
            <nav>
                <p>
                <a href="https://webpages.charlotte.edu/ndudley2/" target="_blank">CLT Web</a> |
                <a href="https://ndudley2.github.io/" target="_blank">GitHub.io</a> |
                <a href="https://github.com/ndudley2" target="_blank">GitHub</a> |
                <a href="https://www.freecodecamp.org/ndudley2" target="_blank">freeCodeCamp</a> |
                <a href="https://www.codecademy.com/profiles/ndudley2" target="_blank">Codecademy</a> |
                <a href="https://www.linkedin.com/in/natalia-dudley-41b9312bb/" target="_blank">LinkedIn</a>
                </p>
            </nav>
            <p>Site Designed By <a href="nataliadudleydesigns.com/">Natalia Dudley Designs</a></p>
            <p>Certified in <a target="_blank" href="https://www.freecodecamp.org/certification/ndudley2/responsive-web-design-v9">Responsive Web Design</a></p>
            <p>Natalia Dudley ©2026</p>
        </footer>
    )
}

