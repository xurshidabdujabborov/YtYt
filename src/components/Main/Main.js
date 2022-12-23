import React from 'react'
import { Container, Grid } from '@mui/material'
import main from "../../assets/img/main.png"
import "./Main.css"

function Main() {
    return (
        <main>
            <Container maxWidth="xl">
                <h2 className="title">Какие технологии вы изучите:</h2>
               <div className="box">
               <Grid container alignItems={"center"}>
               <Grid md={6} sm={12} xs={12}>
                   <div className="left">
                   <img src={main} alt="" />
                   </div>
                </Grid>
                <Grid md={6} sm={12} xs={12}>
                    <div className="flex">
                        <button>Язык программирования Python</button>
                        <a href="#">Сети</a>
                        <button>Базы данных</button>
                        <a href="#">Фреймворки Flask и Django</a>
                        <button>Фреймворки Flask и Django</button>
                    </div>
                        <p>Это необходимый минимум для <br /> современного backend-разработчика</p>
                </Grid>
               </Grid>
               </div>
            </Container>
        </main>
    )
}

export default Main
