import React, { useEffect } from 'react';
import IntroImg from '../images/introduction_portrait.jpeg'
const Introduction = () =>{
    useEffect(() => {
            document.title = "Natalia Dudley's Nice Dragonfly | ITIS3135 | Introduction";
        }, []);
    return (
        <main>
        <h2>Introduction</h2>
        <h6>Natalia Dudley | Nice Dragonfly</h6>
        <figure>
            <img src={IntroImg} alt="portrait of myself"/>
            <figcaption>Wearing my Duck shirt</figcaption>
        </figure>
        <p>Hello! My name is Natalia Dudley. I’m 20 years old and in my third year at UNC Charlotte. I’m a computer science major with a concentration in software engineering.</p>
        <ul>
            <li><b>Personal Background:</b> I grew up in a town called Wheaton in the Chicago suburbs. My family moved to Holly Springs, North Carolina, in 2021, when I was in my sophomore year of high school. I’ll never get used to the weather here!</li>
            <li><b>Professional Background:</b> I’m a tutor here at UNC Charlotte.</li>
            <li><b>Academic Background:</b> Computer Science, Spring 2028</li>
            <li><b>Primary Work Computer:</b> Acer Swift SFG16-72T</li>
            <li><b>Primary Work Location:</b> Fretwell</li>
            <li><b>Alternate Computer:</b> I can borrow one from the library</li>
            <li><b>Courses I’m taking & why:</b>
            <ol>
                <li><b>ITSC3688H - Computing and AI: Ethics, Society & Communication:</b> Required for my major, honors course</li>
                <li><a href="contract.html"><b>ITIS3135 - Front-End Web Application Development:</b></a> Required for my concentration</li>
                <li><b>ITSC2175 - Logic and Algorithms:</b> Required for my major</li>
                <li><b>MATH2164 - Matrices & Linear Algebra:</b> Required for my major</li>
                <li><b>ITIS3310 - Software Architecture & Design:</b> Required for my concentration</li>
            </ol>
            </li>
        </ul>
        <blockquote>“Lose yourself to dance!”</blockquote>
        <p><i>- Pharrell Williams</i></p>
        </main>
    )
};
export default Introduction;