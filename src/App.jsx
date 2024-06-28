import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
    constructor(){
        super();
        this.state = {
            monsters: [],
            searchField: ''
        };
    }
    async componentDidMount() {
        let responce = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await responce.json();
        this.setState({monsters: data})
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    }
    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
            <div className="App">
            <h1>Monsters Rolodex</h1>
                <SearchBox placeholder='search monsters' handleChange={this.handleChange}></SearchBox>
                <CardList monsters={filteredMonsters}></CardList>
                
            </div>
        );
    }
}
  
export default App;
