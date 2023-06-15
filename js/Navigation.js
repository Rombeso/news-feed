import { categoryNames} from "./utils.js";

export const Navigation = ({ onNavClick, currentCategory, className = '' }) => {
    return (
        <nav className={`grid navigation ${className}`}>
            <a className="navigation__logo" data-href="index" href="js/script#">
                <img className="navigation__logo-image" src="../images/logo.svg" alt="Логотип" />
            </a>
            <ul className="navigation__list">
                {['index', 'fashion', 'technologies', 'sport', 'karpov'].map((item) => {
                    return (
                        <li className="navigation__item" key={item}>
                            <a
                                onClick={onNavClick}
                                className={`navigation__link ${currentCategory === item ? 'navigation__link--active' : '' }`}
                                data-href={item}
                                href="js/script#"
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
