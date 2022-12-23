import React from 'react'
import { Container ,  Grid } from '@mui/material'
import cen from "../../assets/img/center.png"
import cen1 from "../../assets/img/caenter 1.png"
import "./Center.css"

function Center() {
    return (
        <div className='Center'>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid md={4} sm={12} xs={12}>
                        <div className="img">
                            <img src={cen} alt="" />
                        </div>
                    </Grid>
                    <Grid md={8} sm={12} xs={12}>
                        <div className="text">
                            <h4>Помощь и поддержка</h4>
                            <p>Если в процессе обучения возникнут сложности, вы <br /> всегда сможете задать вопрос своему наставнику. <br /> <br />
                            Раз в несколько уроков вы будете получать большое задание, которое <br /> нужно будет сдавать на проверку код-ревьюеру. Он внимательно  изучит ваш <br /> код, найдет ошибки и поможет вам стать лучше.  </p>
                        </div>
                    </Grid>
                </Grid>
                <br />
                <br />
                <Grid container alignItems={"center"}>
                    <Grid md={8} sm={12} xs={12}>
                        <div className="text">
                            <h4>Помощь и поддержка</h4>
                             <p>Весь учебный материал структурирован по принципу «спирального обучения». Сначала вы получаете базовые знания, а затем на каждом витке спирали углубляетесь в изученные темы, доводя их понимание до совершенства. Такой подход упрощает обучение и гарантирует, что вы не пропустите ничего важного.</p>
                        </div>
                    </Grid>
                    <Grid md={4} sm={12} xs={12}>
                        <div className="img1">
                            <img src={cen1} alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Center
