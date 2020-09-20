import React, { Component } from "react";
import logo from '../img/logowhite.svg'

export default class PageHeader extends Component {

    render() {
        return (
            <div className="page-header">
                <a href="/">
                    <img className="logo logo-font" src={ logo } alt="ISEL Formula Student" />
                </a>
                <h1>{this.props.pageName}</h1>
            </div>
        )
    }

}