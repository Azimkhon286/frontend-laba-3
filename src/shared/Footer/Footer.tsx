import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="Footer">
            <div className="Footer__content-container">
                <div className="Footer__column">
                    <p className="Footer__title">Меню</p>
                    <a className="Footer__link" href="#welcome">Главная</a>
                    <a className="Footer__link" href="#sightseeing">Достопримечательности</a>
                    <a className="Footer__link" href="#tours">Туры</a>
                    <a className="Footer__link" href="#contacts">Контакты</a>
                </div>
                <div className="Footer__column_second">
                    <p className="Footer__title_second">Контакты</p>
                    <span>
                655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67 Справочная служба: 8 (3902) 22-53-35,
                факс: 8 (3902) 24-30-71 Электронная почта: kancler@vskhakasia.ru
            </span>
                </div>
                <div className="Footer__column_third">
                    <span>Официальный сайт Агенства Туризма Республики Хакасия  ©  2021</span>
                </div>
            </div>
        </footer>
    );
}