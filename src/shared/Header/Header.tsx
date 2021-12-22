import React, {useState} from 'react';
import './Header.css';

export default function Header() {

    const [isShowMobileMenu, setIsShowMobileMenu] = useState<boolean>(false)

    console.log(isShowMobileMenu)
    return (
        <header className={isShowMobileMenu ? "Header__layout_opened Header" : "Header"} id="header">
            <div className="Header__logo-container">
                <div
                    className={isShowMobileMenu ? "Header__logo" : ""}
                    id="header-logo"
                >
                    <svg width="80" height="72" viewBox="0 0 80 72" fill="none" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="80" height="72" fill="url(#pattern0)"/>
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_201_19"
                                     transform="translate(-0.00101215) scale(0.00364372 0.00404858)"/>
                            </pattern>
                            <image id="image0_201_19" width="275" height="247"
                                   xlinkHref="data:image/png;base64,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"/>
                        </defs>
                    </svg>
                </div>
                <div
                    className="Header__mobile-menu"
                    onClick={() => setIsShowMobileMenu(e => !e)}
                >
                    <div
                        className={isShowMobileMenu
                            ? "Header__mobile-menu_opened"
                            : ""}
                        id="pencet">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div
                className={isShowMobileMenu
                    ? "Header__nav-container Header__nav-container_opened"
                    : "Header__nav-container"}
                id="nav"
            >
                <a href="#welcome">Главная</a>
                <a href="#sightseeing">Достопримечательности</a>
                <a href="#tours">Туры</a>
                <a href="#contacts">Контакты</a>
            </div>
        </header>

    );
}