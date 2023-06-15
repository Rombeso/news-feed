import { categoryNames} from "../../utils.js";
import React from "react";
import './Navigation.css'
import logo from '../../images/logo.svg'

export const Navigation = ({ onNavClick, currentCategory, className = '' }) => {
    return (
        <nav className={`grid navigation ${className}`}>
            <a className="navigation__logo" data-href="index" href="src/script#">
                <img className="navigation__logo-image" src={logo} alt="Логотип" />
            </a>
            <ul className="navigation__list">
                {['index', 'fashion', 'technologies', 'sport', 'karpov'].map((item) => {
                    return (
                        <li className="navigation__item" key={item}>
                            <a
                                onClick={onNavClick}
                                className={`navigation__link ${currentCategory === item ? 'navigation__link--active' : '' }`}
                                data-href={item}
                                href="src/script#"
                            >
                                {categoryNames[item]}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
