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
        window.onload = () => {
            // hiding the preloader after component mounts
            this.setState({ isLoading: false });
        };
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
