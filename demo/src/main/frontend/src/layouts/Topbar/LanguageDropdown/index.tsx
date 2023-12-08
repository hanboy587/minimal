import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useToggle } from 'hooks';
import { Language } from '../../types';
import enFlag from './flags/us.jpg';
import germanyFlag from './flags/germany.jpg';
import italyFlag from './flags/italy.jpg';
import spainFlag from './flags/spain.jpg';
import russiaFlag from './flags/russia.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';

// get the languages
const Languages: Language[] = [
    {
        name: 'English',
        flag: enFlag,
    },
    {
        name: 'German',
        flag: germanyFlag,
    },
    {
        name: 'Italian',
        flag: italyFlag,
    },
    {
        name: 'Spanish',
        flag: spainFlag,
    },
    {
        name: 'Russian',
        flag: russiaFlag,
    },
];

const LanguageDropdown = () => {
    // 내포인트
    // const [freecoin, setFreecoin]= useState("1000");

    // const enLang = Languages[0] || {};
    // const [isOpen, toggleDropdown] = useToggle();

    return (
        <></>
        // <div className="mt-3">
        //     <span className="me-0 me-sm-1">{freecoin}&nbsp;&nbsp;<strong style={{color:"blue"}}>Point</strong></span>
        // </div>

        // 기존코드
        // <Dropdown show={isOpen} onToggle={toggleDropdown}>
        //     <Dropdown.Toggle
        //         variant="link"
        //         id="dropdown-languages"
        //         as={Link}
        //         to="#"
        //         onClick={toggleDropdown}
        //         className="nav-link dropdown-toggle arrow-none"
        //     >
        //         <img src={enLang.flag} alt={enLang.name} className="me-0 me-sm-1" height="12" />{' '}
        //         <span className="align-middle d-none d-sm-inline-block">Point</span>
        //         <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle"></i>
        //     </Dropdown.Toggle>
        //     <Dropdown.Menu align={'end'} className="dropdown-menu-animated topbar-dropdown-menu">
        //         <div onClick={toggleDropdown}>
        //             {Languages.map((lang, i) => {
        //                 return (
        //                     <Link to="#" className="dropdown-item notify-item" key={i + '-lang'}>
        //                         <img src={lang.flag} alt={lang.name} className="me-1" height="12" />{' '}
        //                         <span className="align-middle">{lang.name}</span>
        //                     </Link>
        //                 );
        //             })}
        //         </div>
        //     </Dropdown.Menu>
        // </Dropdown>
    );
};

export default LanguageDropdown;
