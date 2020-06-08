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
            // const cors_api_url = 'https://cors-anywhere.herokuapp.com/';
            const sw_api_url = 'https://swapi.dev/api/planets/';
            setLoading(true);
            // All APIs fetched at once, solution is deliberate because swapi does not provide a way to fetch particular items

            const promises = [];
            const normalizedResponses = [];
            for (let i = 1; i <= 59; i++) {
                promises.push(
                    axios.get(sw_api_url + i).then(response => normalizedResponses.push(response.data))
                )
            }
            Promise.all(promises).then(() => {
                setPlanets(normalizedResponses
                    // .flat(1)
                    // .filter(planet => planet.name !== "unknown")
                    .sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
            }).catch((error) => {
                setError(true);
            });


            // try {
            //     const responses = await axios.all([
            //         axios.get(`${cors_api_url}https://swapi.co/api/planets/?page=1`),
            //         axios.get(`${cors_api_url}https://swapi.co/api/planets/?page=2`),
            //         axios.get(`${cors_api_url}https://swapi.co/api/planets/?page=3`),
            //         axios.get(`${cors_api_url}https://swapi.co/api/planets/?page=4`),
            //         axios.get(`${cors_api_url}https://swapi.co/api/planets/?page=5`),
            //         axios.get(`${cors_api_url}https://swapi.co/api/planets/?page=6`),
            //         axios.get(`${cors_api_url}https://swapi.co/api/planets/?page=7`),
            //     ]);
            //     const normalizedResponses = [];
            //     responses.forEach(response => normalizedResponses
            //         .push(response.data.results));
            //     setPlanets(normalizedResponses
            //         .flat(1)
            //         .filter(planet => planet.name !== "unknown")
            //         .sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
            // } catch (error) {
            //     setError(true);
            // }

            setLoading(false);
        }
        fetchPlanets();

    }, [planets]);

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