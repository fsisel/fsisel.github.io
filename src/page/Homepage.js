import { Button } from "@material-ui/core";
import React, { Component } from "react";
import logo from '../img/logowhite.svg'

export default class Homepage extends Component {

    render() {
        return (
            <div className="main-container">
                <div className="container-opacity">
                    <img className="logo" src={ logo } alt="ISEL Formula Student" />
                    <div className="content">
                        <Button color="primary" variant="contained" href="/about">About us</Button>
                        <Button color="primary" variant="contained" href="/sponsors">Sponsors</Button>
                        <Button color="primary" variant="contained" href="/contacts">Contacts</Button>
                    </div>
                </div>
            </div>
        )
    }

}