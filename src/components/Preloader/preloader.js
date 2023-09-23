import React, { Component } from 'react';
import Home from '../../Screens/HomeScreen/home';
import "./preloader.css";

class Preloader extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount() {
        // Add an event listener to the 'load' event of the window
        window.addEventListener('load', () => {
            // Hide the preloader when the window is fully loaded
            this.setState({ isLoading: false });
        });
    }
    componentWillUnmount() {
        // Remove the event listener when the component is unmounted
        window.removeEventListener('load', () => {});
    }

    render() {
        const { isLoading, updateCurse, updateLeave } = this.state;

        return isLoading ? (
            <div className="preloader">
                <div class="pyramid-loader">
                    <div class="wrapper">
                        <span class="side side1"></span>
                        <span class="side side2"></span>
                        <span class="side side3"></span>
                        <span class="side side4"></span>
                        <span class="shadow"></span>
                    </div>
                </div>
                <p>The Awesomeness awaits, give it a minute</p>
            </div>
        ) : (
            <Home
                updateCurse={updateCurse}
                updateLeave={updateLeave}
            />
        );
    }
}

export default Preloader;
