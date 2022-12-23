import React from 'react'
import { Container, Grid } from '@mui/material'
import logo from "../../assets/img/logo.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid md={2} sm={12} xs={12}>
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </Grid>
                    <Grid md={8} sm={12} xs={12}>
                        <ul>
                            <li>
                                <a href="#">Чему вы научитесь</a>
                            </li>
                            <li>
                                <a href="#">Процесс обучения</a>
                            </li>
                            <li>
                                <a href="#">Стоимость</a>
                            </li>
                            <li>
                                <a href="#">Контакты</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid md={2} sm={12} xs={12}>
                        <div className="right">
                            <button> <ArrowForwardIcon/> Войти</button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </nav>
    )
}

export default Navbar
