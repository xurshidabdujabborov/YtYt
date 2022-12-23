import React from 'react'
import { Container, Grid } from '@mui/material'
import car from "../../assets/img/card.png"
import car1 from "../../assets/img/card 1.png"
import car2 from "../../assets/img/card 2.png"
import car3 from "../../assets/img/card 3.png"
import car4 from "../../assets/img/card 4.png"
import car5 from "../../assets/img/card 5.png"
import car6 from "../../assets/img/card 6.png"
import "./Work.css"

function Work() {
    return (
        <div className='Work'>
            <Container maxWidth="xl">
                <h2 className="title">Обучение в YtYt – это <br /> удобно и результативно</h2>
                <Grid container>
                    <Grid md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={car} alt="" />
                            <h5>Огромное <br /> количество практики</h5>
                            <p className="text">Более 500 самостоятельных заданий и 20 полноценных больших проектов</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={car1} alt="" />
                            <h5>Современные <br /> методики обучения</h5>
                            <p className="text">Более 500 самостоятельных заданий и 20 полноценных больших проектов</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={car2} alt="" />
                            <h5>Простое <br /> и понятное изложение</h5>
                            <p className="text">Более 500 самостоятельных заданий и 20 полноценных больших проектов</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={car3} alt="" />
                            <h5>Гибкий <br /> график занятий</h5>
                            <p className="text">Более 500 самостоятельных заданий и 20 полноценных больших проектов</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={car4} alt="" />
                            <h5>Прямая связь с опытными <br /> программистами</h5>
                            <p className="text">Более 500 самостоятельных заданий и 20 полноценных больших проектов</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={car5} alt="" />
                            <h5>Оплата небольшими <br /> частями</h5>
                            <p className="text">Более 500 самостоятельных заданий и 20 полноценных больших проектов</p>
                        </div>
                    </Grid>
                    <Grid md={3} sm={12} xs={12}>
                        <div className="box">
                            <img src={car6} alt="" />
                            <h5>Быстрый и легкий <br /> возврат</h5>
                            <p className="text">Более 500 самостоятельных заданий и 20 полноценных больших проектов</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Work
