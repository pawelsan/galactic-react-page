import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import axios from 'axios';
import Planets from '../components/Planets';
import Pagination from '../components/Pagination';
import Form from '../components/Form';
// import FullListButton from '../components/FullListButton';
// import Modal from '../components/Modal'
// import Autosuggest from '../components/Autosuggest';
import PlanetItem from '../components/PlanetItem';
import '../styles/PlanetList.scss';

const PlanetListPage = () => {

    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [value, setValue] = useState('');
    let [suggestions] = useState([]);
    const [currentPage, setCurentPage] = useState(1);
    const [postsPerPage] = useState(10);

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
    console.log(planets);
    //Get search suggestion list
    const suggestionValue = value.trim().toUpperCase();
    const suggestionLength = suggestionValue.length;
    suggestions = suggestionLength === 0 ? [] : planets.filter(planet => planet.name.toUpperCase().slice(0, suggestionLength) === suggestionValue);
    // .map(planet => planet.name);
    console.log(suggestions)
    //Get planets per each part of the long list
    const indexOfLastPlanet = currentPage * postsPerPage;
    const indexOfFirstPlanet = indexOfLastPlanet - postsPerPage;
    const currentPlanets = planets.slice(indexOfFirstPlanet, indexOfLastPlanet)

    //Change parts of the long list
    const paginate = (pageNumber) => {
        setCurentPage(pageNumber);
    }
    console.log(value)

    // const APIS = [
    //     `https://swapi.co/api/planets/?page=1`,
    //     `https://swapi.co/api/planets/?page=2`,
    //     `https://swapi.co/api/planets/?page=3`,
    //     `https://swapi.co/api/planets/?page=4`,
    //     `https://swapi.co/api/planets/?page=5`,
    //     `https://swapi.co/api/planets/?page=6`,
    //     `https://swapi.co/api/planets/?page=7`];


    // const promises = APIS.map(API => fetch(API)).map(API => API.then(response => {
    //     console.log(response)
    //     if (response.status !== 200) {
    //         throw Error("Nie udało się")
    //     } else {
    //         return response.json()
    //     }
    // }))
    // //     throw Error("Nie udało się")
    // // }).then(res => res.json()));

    // class PlanetListPage extends React.Component {
    //     state = {
    //         // id: "",
    //         value: "",
    //         name: "",
    //         diameter: "",
    //         climate: "",
    //         terrain: "",
    //         population: "",
    //         err: false,
    //         fullList: [],
    //         populationList: [],
    //         suggestions: [],
    //         loading: true,
    //     }

    //     componentDidMount() {
    //         Promise.all(promises).then(allData => {
    //             const planetArray = allData.map(dataOfSingleApi => dataOfSingleApi.results).flat(1);

    //             this.setState({
    //                 loading: false,
    //                 fullList: planetArray.map(planet => planet.name).filter(name => name !== 'unknown').sort(),
    //                 populationList: planetArray.map(planet => planet.population * 1).filter(population => !isNaN(population)).sort()
    //             })
    //         })

    //     }

    //     handleInputChange = (e) => {
    //         this.setState({
    //             name: '',
    //             err: false,
    //             value: e.target.value,
    //         })
    //         Promise.all(promises).then(allData => {
    //             const planetArray = allData.map(dataOfSingleApi => dataOfSingleApi.results).flat(1);
    //             const suggestionValue = this.state.value.trim().toUpperCase();
    //             const suggestionLength = suggestionValue.length;

    //             this.setState({
    //                 suggestions: suggestionLength === 0 ? [] : planetArray.filter(planet => planet.name.toUpperCase().slice(0, suggestionLength) === suggestionValue).map(planet => planet.name)
    //             })
    //         })
    //     };

    // handleClick = (id) => {
    //     this.setState({
    //         value: id
    //     });

    //     Promise.all(promises).then(allData => {
    //         const singleApiData = allData.find(singleApiData => singleApiData.results.find(planet => planet.name.toUpperCase() === this.state.value.toUpperCase()));
    //         const planet = singleApiData.results.find(planet => planet.name.toUpperCase() === this.state.value.toUpperCase());
    //         console.log(planet)
    //         this.setState(prevState => ({
    //             err: false,
    //             // value: '',
    //             name: prevState.value,
    //             diameter: planet.diameter,
    //             climate: planet.climate,
    //             terrain: planet.terrain,
    //             population: planet.population,
    //             suggestions: []
    //         }))

    //     }).catch(err => {
    //         this.setState(prevState => ({
    //             err: true,
    //             name: prevState.value
    //         }))
    //     });

    // };



    // render() {
    const add = (a, b) => a + b;
    const populationList = planets.map(planet => planet.population * 1).filter(population => !isNaN(population)).sort()
    const populationSum = populationList.reduce(add, 0);

    if (loading) {
        return (
            <>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </>
        )
    } else if (error) {
        return <h2>Something went wrong...</h2>

    }

    return (
        <>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li
                            key='Home'
                            className="breadcrumb-item">
                            <NavLink
                                to='/'
                                exact='true'
                                // className="nav-link"
                                activeClassName="active" >
                                Home
                            </NavLink>
                        </li>
                        <li className="breadcrumb-item">
                            Galactic Archives
                            </li>
                    </ol>
                </nav>
            </div>
            <div className="container">
                <h1 className="planet-list__title">Search the Galactic Archives</h1>
                <h2>Currently there are {planets.length} planets, moons, and asteroids in the archives</h2>
                <p>The total humanoid population of the galaxy is approximately {(populationSum / 1000000000000).toFixed(3)} trillion</p>

                <Form
                    value={value}
                    suggestions={suggestions}
                    change={event => setValue(event.target.value)}
                    planets={planets}
                />

            </div>
            <div className="container mt-5">
                <div className="row no-gutters">
                    <div className="col-5">

                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={planets.length}
                            paginate={paginate}
                        />

                        <Planets
                            planets={currentPlanets}
                            loading={loading}
                            error={error}
                        />

                    </div>
                </div>
            </div>
        </>
    );
    // }
}
export default PlanetListPage;