import React from 'react'
import { Container, Grid } from '@mui/material'
import bot from "../../assets/img/bottom.png"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import "./Bottom.css"

function Bottom() {
    return (
        <div className='Bottom'>
           <Container maxWidth="xl">
           <div className="bacround">
                <Grid container alignItems={"center"}>
                    <Grid md={8} sm={12} xs={12}>
                        <div className="flex">
                            <img src={bot} alt="" />
                            <p className="text">Все блоки проходятся строго по порядку. Пропустить какой-то блок или начать обучение с середины нельзя, даже если вы считаете, что уже знаете какую-то часть материала. Только так мы можем гарантировать, что вы получите все знания, предусмотренные учебной программой.</p>
                        </div>
                    </Grid>
                    <Grid md={4} sm={12} xs={12}>
                        <div className="right">
                            <button>Начать обучение <ArrowOutwardIcon/> </button>
                        </div>
                    </Grid>
                </Grid>
           </div>
            </Container>
        </div>
    )
}

export default Bottom
