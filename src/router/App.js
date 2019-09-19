import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/js/bootstrap';
import Navigation from '../layouts/Navigation'
import Main from '../layouts/Main'
import Footer from '../layouts/Footer'


const App = () => {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchPlanets = async () => {
            setLoading(true);
            try {
                const responses = await axios.all([
                    axios.get(`https://swapi.co/api/planets/?page=1`),
                    axios.get(`https://swapi.co/api/planets/?page=2`),
                    axios.get(`https://swapi.co/api/planets/?page=3`),
                    axios.get(`https://swapi.co/api/planets/?page=4`),
                    axios.get(`https://swapi.co/api/planets/?page=5`),
                    axios.get(`https://swapi.co/api/planets/?page=6`),
                    axios.get(`https://swapi.co/api/planets/?page=7`),
                ]);
                const flatResponses = [];
                responses.forEach(response => flatResponses.push(response.data.results));
                setPlanets(flatResponses.flat(1).filter(planet => planet.name !== "unknown").sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
            } catch (error) {
                setError(true);
            }

            setLoading(false);
        }
        fetchPlanets();

    }, []);

    return (

        <Router>
            <Navigation />
            <Main
                planets={planets}
                loading={loading}
                error={error}
            />
            <Footer />
        </Router >
    );
}

export default App;