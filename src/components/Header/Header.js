import React from 'react'
import { Container, Grid } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import header from "../../assets/img/header.png"
import "./Header.css"

function Header() {
    return (
        <header>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid md={6} sm={12} xs={12} >
                       <div className="left">
                       <h2 className="title">Школа программиро ваниядля тех, кому нужны реальные навыки,
                            а не просто сертификат</h2>
                            <p className="text">Пройдите тестирование, чтобы получить доступ <br /> к бесплатным вводным урокам</p>
                            <button>Пройти тестирование <ArrowOutwardIcon/></button>
                       </div>
                    </Grid>
                    <Grid md={6} sm={12} xs={12}>
                        <div className="right">
                            <img src={header} alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </header>
    )
}

export default Header
