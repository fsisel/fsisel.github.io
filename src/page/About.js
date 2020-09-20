import { Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import PageHeader from '../components/PageHeader'

import front_wheel_body from '../img/front_wheel_body.jpg'
import Side_sponsors from '../img/Side_sponsors.jpg'

export default class About extends Component {

    render() {
        return (
            <div className="page">
                <Container maxWidth="md">
                    <PageHeader pageName="About us" />
                    <Grid container spacing={2}>
                        <Grid item xs={6} className="text-block">           
                        O projeto foi iniciado por um grupo de alunos do Instituto Superior de Engenharia de Lisboa (ISEL) em 2013. Competimos em 2014 na Class 2 e em Class 1 na competição de Espanha em 2015. Em 2016 participamos na República Checa. Apesar de sermos uma equipa jovem, temos também a vantagem de contar com pessoas competentes, dedicadas, responsáveis, com vontade de aprender mas sobretudo com um objetivo comum, Vencer!
                        </Grid>
                        <Grid item xs={6}>
                            <img src={front_wheel_body} width="100%" />
                        </Grid>
                        <Grid item xs>
                            <img src={Side_sponsors} width="100%" />
                        </Grid>
                        <Grid item xs className="text-block">           
                            Neste projeto, além de se desenvolverem capacidades de engenharia acima dos conteúdos dos cursos, também se desenvolvem as capacidades de gestão de tempo e recursos, apresentação pública e trabalho em equipa.
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }

}