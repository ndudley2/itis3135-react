import React, { useEffect } from 'react';
const Home = () => {
    useEffect(() => {
            document.title = "Natalia Dudley's Nice Dragonfly | ITIS3135 | Home";
        }, []);
    return (
        <main>
            <h2>Home</h2>
            <p>Welcome to my webpage for ITIS3135!</p>
        </main>
    )
};
export default Home;