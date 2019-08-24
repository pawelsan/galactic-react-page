import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '../styles/App.scss';

import Animation from '../components/Animation'
import moon1 from '../images/moon-63129_640.png'
import moon2 from '../images/moon-63136_640.png'
import moon3 from '../images/moon-67501_640.png'
import Header from '../layouts/Header'
import Navigation from '../layouts/Navigation'
import Page from '../layouts/Page'
import Footer from '../layouts/Footer'
// import Form from '../components/Form';
// import Autosuggest from '../components/Autosuggest'
// import Result from '../components/Result';


// const APIS = [
//     `https://swapi.co/api/planets/?page=1`,
//     `https://swapi.co/api/planets/?page=2`,
//     `https://swapi.co/api/planets/?page=3`,
//     `https://swapi.co/api/planets/?page=4`,
//     `https://swapi.co/api/planets/?page=5`,
//     `https://swapi.co/api/planets/?page=6`,
//     `https://swapi.co/api/planets/?page=7`];


// const promises = APIS.map(API => fetch(API)).map(API => API.then(response => {
//     if (response.ok) {
//         return response
//     }
//     throw Error("Nie udało się")
// }).then(res => res.json()));



// class App extends React.Component {
//     state = {
//         value: "",
//         name: "",
//         diameter: "",
//         climate: "",
//         terrain: "",
//         population: "",
//         err: false,
//         suggestions: []
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

//             console.log(this.state.suggestions)
//         })


//     }
//     handleClick = (id) => {
//         console.log(id)
//         this.setState({
//             value: id
//         })
//         // this.handleSubmit()
//         Promise.all(promises).then(allData => {
//             const singleApiData = allData.find(singleApiData => singleApiData.results.find(planet => planet.name.toUpperCase() === this.state.value.toUpperCase()));
//             const planet = singleApiData.results.find(planet => planet.name.toUpperCase() === this.state.value.toUpperCase());


//             console.log(planet)

//             this.setState(prevState => ({
//                 err: false,
//                 value: '',
//                 name: prevState.value,
//                 diameter: planet.diameter,
//                 climate: planet.climate,
//                 terrain: planet.terrain,
//                 population: planet.population,
//                 suggestions: []
//             }))
//         }).catch(err => {
//             this.setState(prevState => ({
//                 err: true,
//                 name: prevState.value
//             }))
//         });
//     }

// part of the code where there was a button to submit
// handleSubmit = (e) => {
//   // if (e) {
//   //   e.preventDefault()
//   // }
//   Promise.all(promises).then(allData => {
//     // const planetArray = allData.map(dataOfSingleApi => dataOfSingleApi.results).flat(1);

//     // const getSuggestion = () => {
//     //   const suggestionValue = this.state.value.trim().toUpperCase();
//     //   const suggestionLength = suggestionValue.length;
//     //   return suggestionLength === 0 ? [] : planetArray.filter(planet => planet.name.toUpperCase().slice(0, suggestionLength) === suggestionValue)
//     // }

//     const singleApiData = allData.find(singleApiData => singleApiData.results.find(planet => planet.name.toUpperCase() === this.state.value.toUpperCase()));
//     const planet = singleApiData.results.find(planet => planet.name.toUpperCase() === this.state.value.toUpperCase());


//     console.log(planet)

//     this.setState(prevState => ({
//       err: false,
//       value: '',
//       name: prevState.value,
//       diameter: planet.diameter,
//       climate: planet.climate,
//       terrain: planet.terrain,
//       population: planet.population,
//       suggestions: []
//     }))
//   }).catch(err => {
//     this.setState(prevState => ({
//       err: true,
//       name: prevState.value
//     }))
//   });
// }

// render() {

const App = () => {
    return (
        <Router>
            <Animation
                src={moon1}
                ratioX="0.3"
                ratioY="0.7"
            />
            <Animation
                src={moon2}
                ratioX="0.1"
                ratioY="0.4"
            />
            <Animation
                src={moon3}
                ratioX="0.5"
                ratioY="0.25"
            />
            <div className="app">
                <header className="app-header">
                    {<Header />}

                </header>
                <main className="app-main">

                    {<Navigation />}


                    {<Page />}

                </main>
                <footer className="app-footer">
                    {<Footer />}
                </footer>

            </div>
        </Router>
    );
}

export default App;


// return (

// );
//     }
// }
// export default App;
