import React, { Component } from 'react';
import './App.css'
// import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
            // name:'',
            // background_image:'',
            // rating:''
        }
        // handleClick = () => {

        // }
    }


    render() {

        return (
            <div>
                
                <main class="wrapper">
                    <section class="games">
                        <ul>
                            <li>
                                <figure>
                                    <img class="imagesize"src={this.props.background_image} alt='background_image'/>
                                    <figcaption>
                                        <h3> {this.props.name}</h3>
                                        <h4> {this.props.rating}</h4>
                                        <button onClick={this.handleClick}> Delete</button>
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>
                    </section>
                </main>

            </div>
        )
    }


}

export default App