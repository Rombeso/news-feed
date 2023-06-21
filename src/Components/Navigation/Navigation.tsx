import React, { FC } from 'react';
import { categoryNames } from '../../utils';
import './Navigation.css';
import logo from '../../images/logo.svg';
import { Link, NavLink } from 'react-router-dom';

interface Props {
  className?: string;
  placement: 'header' | 'footer';
}

export const Navigation: FC<Props> = ({ className = '', placement = 'header' }) => {
  return (
    <nav className={`grid navigation navigation--${placement} ${className}`}>
      <Link to="/" className="navigation__logo">
        <img className="navigation__logo-image" src={logo} alt="Логотип" />
      </Link>
      <ul className="navigation__list">
        {['index', 'fashion', 'technologies', 'sport', 'karpov'].map((item) => {
          return (
            <li className="navigation__item" key={item}>
              <NavLink
                to={item}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'navigation__link'
                    : isActive
                    ? 'navigation__link navigation__link--active'
                    : 'navigation__link'
                }
              >
                {/* @ts-ignore */}
                {categoryNames[item]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
