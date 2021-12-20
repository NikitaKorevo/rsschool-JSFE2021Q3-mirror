import './Header.scss';
import Toys from '../Main/Toys';

class Header {
  render() {
    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('header__wrapper');

    const header = document.createElement('div');
    header.classList.add('header');

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const buttonLogo = document.createElement('button');
    buttonLogo.classList.add('nav__logo', 'nav__button');
    buttonLogo.dataset.goto = 'home';
    buttonLogo.addEventListener('click', () => (window.location.hash = ''));

    const buttonToys = document.createElement('button');
    buttonToys.classList.add('nav__button');
    buttonToys.textContent = 'игрушки';
    buttonToys.dataset.goto = 'toys';
    buttonToys.addEventListener('click', () => (window.location.hash = 'toys'));

    const buttonTree = document.createElement('button');
    buttonTree.classList.add('nav__button');
    buttonTree.textContent = 'ёлка';
    buttonTree.dataset.goto = 'tree';
    buttonTree.addEventListener('click', () => (window.location.hash = 'tree'));

    const control = document.createElement('nav');
    control.classList.add('control');

    const search = document.createElement('input');
    search.type = 'search';
    search.classList.add('control__search');

    const amountToys = document.createElement('div');
    amountToys.classList.add('control__amount-toys', 'control__button');
    amountToys.textContent = `${Toys.pickedToys.size}`;

    headerWrapper.append(header);
    header.append(nav, control);
    nav.append(buttonLogo, buttonToys, buttonTree);
    control.append(search, amountToys);
    return headerWrapper;
  }
}

export default Header;
