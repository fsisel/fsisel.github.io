import { Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import PageHeader from '../components/PageHeader'

export default class Contacts extends Component {

    render() {
        return (
            <div className="page">
                <Container maxWidth="md">
                    <PageHeader pageName="Contact us" />
                    <Grid container spacing={2}>
                        <Grid item xs={12} className="email-container">           
                            <h1>Email:</h1>
                            <a className="email" href="mailto:communication.formulastudent@isel.pt">communication.formulastudent@isel.pt</a>
                        </Grid>
                        <Grid item xs className="map-container">
                            <h1>Where we are:</h1>
                            <iframe width="600" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-9.119666218757631%2C38.75494504832735%2C-9.11518692970276%2C38.756877723656615&amp;layer=mapnik" style={{ border: "1px solid black" }}></iframe>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }

}