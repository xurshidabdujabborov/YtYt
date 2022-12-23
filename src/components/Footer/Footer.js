import React from 'react'
import { Container, Grid } from '@mui/material'
import logo from "../../assets/img/logo.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid md={4} sm={6} xs={12}>
                       <div className="left">
                       <div className="flex">
                            <img src={logo} alt="" />
                            <span>Школа <br /> программирования</span>
                        </div>
                        <div className="icon">
                            <div className="nan">
                                <InstagramIcon />
                            </div>
                            <div className="nan">
                                <FacebookIcon />
                            </div>
                            <div className="nan">
                                <TelegramIcon />
                            </div>
                            <div className="nan">
                                <TwitterIcon />
                            </div>
                        </div>
                       </div>
                    </Grid>
                    <Grid md={4} sm={6} xs={12}>
                        <ul>
                            <li>
                                <a href="#">Чему вы научитесь</a>
                            </li>
                            <li>
                                <a href="#">Процесс обучения</a>
                            </li>
                            <li>
                                <a href="#">Стоимость   </a>
                            </li>
                            <li>
                                <a href="#">Контакты</a>
                            </li>
                            <li>
                                <a href="#">Регистрация</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid md={4} sm={12} xs={12}>
                        <div className="right">
                            <span>+7 (499) 348 93 96</span>
                            <p className="text">info@ytyt.ru</p>
                            <h5>ИП Умаров Т. А. <br />
                                ИНН 745216229809 ОГРНИП <br /> 315745200001358</h5>
                        </div>
                    </Grid>
                </Grid>
                <hr />
            <div className="text">
                <p className="text">© 2022 ytyt — Все права защищены</p>
                <p className="text">Пользовательское соглашение</p>
                <p className="text">Политика конфиденциальности</p>
            </div>
            </Container>
        </footer>
    )
}

export default Footer
