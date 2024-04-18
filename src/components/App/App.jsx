import React from 'react';
import Header from '../Header/Header.jsx';
import ResultsContainer from '../ResultsContainer/ResultsContainer.jsx';
import SearchBar from '../search-bar/searchbar.jsx';

import './App.css';

const name = require('@rstacruz/startup-name-generator')
class App extends React.Component {
    state = {
        headerText: "Name it!",
        headerExpanded: true,
        suggestedNames: []
    };

    handleInputChange = (inputText) => {

        if (inputText.length > 0) {
            this.setState({ headerExpanded: false });
            this.setState({ suggestedNames: name(inputText) });
        }
        else {
            this.setState({ headerExpanded: true });
            this.setState({ suggestedNames: [] });
        }
    }

    render() {
        return (
            <div className="App-Container">
                <Header headerTitle={this.state.headerText} headerExpanded={this.state.headerExpanded} />
                <SearchBar handleInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div >

        );
    };
};


export default App;