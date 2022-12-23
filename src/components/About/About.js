import React from 'react'
import { Container, Grid } from '@mui/material'
import car7 from "../../assets/img/card 7.png"
import car8 from "../../assets/img/card 8.png"
import car9 from "../../assets/img/card 9.png"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./About.css"

function About() {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Введение в программирование', 159, 6.0, ),
        createData('Основы программирования на Python', 237, 9.0),
        createData('Базы данных', 262, 16.0, ),
        createData('Фреймворк Django', 305, 3.7),
        createData('Разработка «боевого» проекта', 356, 16.0, ),
    ];
    return (
        <div className='About'>
            <Container maxWidth="xl">
                <h2 className="title">Стоимость обучения</h2>
                <Grid container alignItems={"center"}>
                    <Grid md={4} sm={12} xs={12}>
                        <div className="flex">
                            <img src={car7} alt="" />
                            <p className="text">Весь курс разбит на несколько блоков. Оплата поэтапная вы платите только за тот блок, который сейчас проходите.
                            </p>
                        </div>
                    </Grid>
                    <Grid md={4} sm={12} xs={12}>
                        <div className="flex">
                            <img src={car8} alt="" />
                            <p className="text">Весь курс разбит на несколько блоков. Оплата поэтапная вы платите только за тот блок, который сейчас проходите.
                            </p>
                        </div>
                    </Grid>
                    <Grid md={4} sm={12} xs={12}>
                        <div className="flex">
                            <img src={car9} alt="" />
                            <p className="text">Весь курс разбит на несколько блоков. Оплата поэтапная вы платите только за тот блок, который сейчас проходите.
                            </p>
                        </div>
                    </Grid>
                </Grid>
                <br />
                <br />
                <br />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Блок</TableCell>
                                <TableCell align="right">Стоимость (₽)</TableCell>
                                <TableCell align="right">Расчетное время обучения (мес.) *&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}

export default About
