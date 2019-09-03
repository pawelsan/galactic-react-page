import React from 'react';
import { NavLink } from 'react-router-dom';
import Form from '../components/Form';
// import Modal from '../components/Modal'
// import Autosuggest from '../components/Autosuggest';
// import GoButton from '../components/GoButton';
import '../styles/PlanetList.scss';


const APIS = [
    `https://swapi.co/api/planets/?page=1`,
    `https://swapi.co/api/planets/?page=2`,
    `https://swapi.co/api/planets/?page=3`,
    `https://swapi.co/api/planets/?page=4`,
    `https://swapi.co/api/planets/?page=5`,
    `https://swapi.co/api/planets/?page=6`,
    `https://swapi.co/api/planets/?page=7`];


const promises = APIS.map(API => fetch(API)).map(API => API.then(response => {
    console.log(response)
    if (response.status !== 200) {
        throw Error("Nie udało się")
    } else {
        return response.json()
    }
}))
//     throw Error("Nie udało się")
// }).then(res => res.json()));

class PlanetListPage extends React.Component {
    state = {
        // id: "",
        value: "",
        name: "",
        diameter: "",
        climate: "",
        terrain: "",
        population: "",
        err: false,
        fullList: [],
        populationList: [],
        suggestions: [],
        loading: true,
    }

    componentDidMount() {
        Promise.all(promises).then(allData => {
            const planetArray = allData.map(dataOfSingleApi => dataOfSingleApi.results).flat(1);

            this.setState({
                loading: false,
                fullList: planetArray.map(planet => planet.name).filter(name => name !== 'unknown').sort(),
                populationList: planetArray.map(planet => planet.population * 1).filter(population => !isNaN(population)).sort()
            })
        })

    }

    handleInputChange = (e) => {
        this.setState({
            name: '',
            err: false,
            value: e.target.value,
        })
        Promise.all(promises).then(allData => {
            const planetArray = allData.map(dataOfSingleApi => dataOfSingleApi.results).flat(1);
            const suggestionValue = this.state.value.trim().toUpperCase();
            const suggestionLength = suggestionValue.length;

            this.setState({
                suggestions: suggestionLength === 0 ? [] : planetArray.filter(planet => planet.name.toUpperCase().slice(0, suggestionLength) === suggestionValue).map(planet => planet.name)
            })
        })
    };

    handleClick = (id) => {
        this.setState({
            value: id
        });

        Promise.all(promises).then(allData => {
            const singleApiData = allData.find(singleApiData => singleApiData.results.find(planet => planet.name.toUpperCase() === this.state.value.toUpperCase()));
            const planet = singleApiData.results.find(planet => planet.name.toUpperCase() === this.state.value.toUpperCase());
            console.log(planet)
            this.setState(prevState => ({
                err: false,
                // value: '',
                name: prevState.value,
                diameter: planet.diameter,
                climate: planet.climate,
                terrain: planet.terrain,
                population: planet.population,
                suggestions: []
            }))

        }).catch(err => {
            this.setState(prevState => ({
                err: true,
                name: prevState.value
            }))
        });

    };


    // showModal = (e) => {
    //     this.setState({
    //         showModal: true
    //     })
    // };

    // closeModal = (e) => {
    //     this.setState({
    //         showModal: false
    //     })
    // }


    render() {

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
                    <h1 className="planet-list__title">
                        Galactic Archives
                </h1>

                    <Form
                        value={this.state.value}
                        suggestions={this.state.suggestions}
                        change={this.handleInputChange}
                        click={this.handleClick}
                        planet={this.state}
                    // showModal={this.showModal}
                    // closeModal={this.closeModal}
                    // show={this.state.showModal}

                    />

                    {/* <GoButton
                    planet={this.state}
                /> */}


                    {/* {this.state.value ? */}

                    {/* <Autosuggest
                    suggestions={this.state.suggestions}
                    click={this.handleClick}
                    planet={this.state}
                /> */}
                    {/* <Modal show={this.state.show} closeModal={this.closeModal} /> */}
                    {/* : */}
                    {/* {!this.state.value || !this.state.suggestions.toString() ? <FullList
                    planet={this.state}
                    click={this.handleClick}
                /> : null} */}
                    {/* <FullList
                    planet={this.state}
                    click={this.handleClick}
                /> */}
                    {/* } */}

                </div>
            </>
        );
    }
}
export default PlanetListPage;