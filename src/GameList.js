import React, { Component } from 'react';
import axios from 'axios';
import Game from './Game.js';
import { Route } from 'react-router-dom';




class GameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        axios.get('https://wild-games.herokuapp.com/api/v1')
            .then((res, err) => {
                if (err) console.log(err);
                this.setState({ list: res.data, all: res.data, bool: false })
                console.log(res.data)
            })
    }
    showGames = () => {
        return this.state.list.map((item, i) => {
            return (
                <Game {...item} key={i} index={i} delete={this.deleteGame} />
            )
        })
    }
    deleteGame = (i) => {
        let a = this.state.list;
        a.splice(i, 1);
        this.setState({
            list: a
        })
    }

    filter = (bool) => {
        if (!bool) {
            const result = this.state.list.filter(game => game.rating > 4.5);
            this.setState({
                list: result,
                bool: true
            })
        }
        else {
            this.setState({
                list: this.state.all,
                bool: false
            })
        }
    }
    render() {
        return (
            <div>
                <button class="filterbutton" onClick={() => this.filter(this.state.bool)}>{!this.state.bool ? "BEST" : "ALL"}</button>
                <Route exact path="/">
                    {this.state.list.length > 0 ? this.showGames() : null}
                </Route>
                {/* <Route path="/game/screenshots/:id" render={(props) => <DisplayScreenshots {...props} state={this.state.list} />}/> */}
            </div>



        )
    };

}


export default GameList










    //  fetch('https://wild-games.herokuapp.com/api/v1') 
    //  .then(results => results.json())
    //  .then(data => {this.setState({games: data.games});})



    //  showGames = () => {
    //     return this.state.games.map(item => {
    //         return(
    //             <Game name={item.name} image={item.background_image} rating={item.rating}/>
    //         )
    //     } );
    // }