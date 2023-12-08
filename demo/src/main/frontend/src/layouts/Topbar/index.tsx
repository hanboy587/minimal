import { Row, Col, Card, Dropdown, Tab, Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { showRightSidebar, changeSidebarType } from 'redux/actions';
import * as layoutConstants from 'appConstants';
import { useRedux, useToggle, useViewport } from 'hooks';
import { notifications, profileMenus, searchOptions } from './data';
import LanguageDropdown from './LanguageDropdown';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import SearchDropdown from './SearchDropdown';
import TopbarSearch from './TopbarSearch';
import AppsDropdown from './AppsDropdown';
import userImage from 'assets/images/users/avatar-1.jpg';
import logoSmDark from 'assets/images/logo_sm_dark.png';
import logoSmLight from 'assets/images/logo_sm.png';
import logo from 'assets/images/logo-light.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import classnames from 'classnames';
import { PageTitle } from 'components';
import {HiBanknotes, HiClock  } from "react-icons/hi2";
import { useMediaQuery } from "react-responsive";
import {MdOutlinePendingActions, } from "react-icons/md";
import {RiFileShield2Line } from "react-icons/ri";
import {BsFillDiagram3Fill } from "react-icons/bs";
import { HiOutlineCash } from "react-icons/hi";
import Testimg from 'pages/uikit/Testimg'

// 상단바 
// 프로필

type TopbarProps = {
    hideLogo?: boolean;
    navCssClasses?: string;
    openLeftMenuCallBack?: () => void;
    topbarDark?: boolean;
};

const Topbar = ({ hideLogo, navCssClasses, openLeftMenuCallBack, topbarDark }: TopbarProps) => {
    const { dispatch, appSelector } = useRedux();
    const { width } = useViewport();
    const [isMenuOpened, toggleMenu] = useToggle();

    const containerCssClasses = !hideLogo ? 'container-fluid' : '';

    const { layoutType, leftSideBarType } = appSelector((state) => ({
        layoutType: state.Layout.layoutType,
        leftSideBarType: state.Layout.leftSideBarType,
    }));

    // 이름
    const [realname, setRealname]= useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setRealname(JSON.parse(data).realname);
    }, []);
    
    /**
     * Toggle the leftmenu when having mobile screen
     */
    const handleLeftMenuCallBack = () => {
        toggleMenu();
        if (openLeftMenuCallBack) openLeftMenuCallBack();

        switch (layoutType) {
            case layoutConstants.LayoutTypes.LAYOUT_VERTICAL:
                if (width >= 768) {
                    if (leftSideBarType === 'fixed' || leftSideBarType === 'scrollable')
                        dispatch(changeSidebarType(layoutConstants.SideBarWidth.LEFT_SIDEBAR_TYPE_CONDENSED));
                    if (leftSideBarType === 'condensed')
                        dispatch(changeSidebarType(layoutConstants.SideBarWidth.LEFT_SIDEBAR_TYPE_FIXED));
                }
                break;

            case layoutConstants.LayoutTypes.LAYOUT_FULL:
                if (document.body) {
                    document.body.classList.toggle('hide-menu');
                }
                break;
            default:
                break;
        }
    };

    /**
     * Toggles the right sidebar
     */
    const handleRightSideBar = () => {
        dispatch(showRightSidebar());
    };

    // 메뉴 미디어쿼리
    const isPC: boolean = useMediaQuery({
        query: "(min-width:550px)",
    });
    const isMobile: boolean = useMediaQuery({
        query: "(max-width:549px)",
    });

    return (
        <div className={classNames('navbar-custom', navCssClasses)}>
            <div className={containerCssClasses}>
                {/* {!hideLogo && (
                    <Link to="/" className="topnav-logo">
                        <span className="topnav-logo-lg">
                            <img src={logo} alt="logo" height="16" />
                        </span>
                        <span className="topnav-logo-sm">
                            <img src={topbarDark ? logoSmLight : logoSmDark} alt="logo" height="16" />
                        </span>
                    </Link>
                )} */}
                <ul className="list-unstyled topbar-menu float-end  mb-0">
                    <Container>
                        <ProfileDropdown
                            userImage={userImage}
                            menuItems={profileMenus}
                            username={''}
                        // userTitle={'Founder'}
                        />
                    </Container>
                    <li className="dropdown notification-list topbar-dropdown">
                        <LanguageDropdown />
                    </li>
                    {/* 모드 setting */}
                    {/* <li className="notification-list">
                        <button
                            className="nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none"
                            onClick={handleRightSideBar}
                        >
                            <i className="dripicons-gear noti-icon"></i>
                        </button>
                    </li> */}
                    {/* <li className="dropdown notification-list">
                        <ProfileDropdown
                            userImage={userImage}
                            menuItems={profileMenus}
                            username={''}
                        // userTitle={'Founder'}
                        />
                    </li> */}
                </ul>
                
                {/*  width:550px 이상일때 */}
                {/* {isPC && */}
                    <ul className="list-unstyled topbar-menu float-end mt-3 mb-0"style={{fontSize:"18px"}}>
                        <Navbar className="navbar-expand-extra-la px-1">
                            <Container>
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav as="ul" className="me-auto align-items-center">
                                        <Nav.Item as="li" className="mx-lg-1">
                                            <Nav.Link href="/ui/base-ui/tabsTop">인사</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="mx-lg-1">
                                            <Nav.Link href="/ui/base-ui/Geubyeomyeongseseo">급여</Nav.Link>
                                        </Nav.Item>
                                        {/*<Nav.Item className="mx-lg-1">
                                            <Nav.Link href="/ui/base-ui/chwideugsingo">보험</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="mx-lg-1">
                                            <NavDropdown  title="사업장관리" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="/ui/base-ui/saeobjangjeongboiblyeog">설정</NavDropdown.Item>
                                                <NavDropdown.Item href="#">?</NavDropdown.Item>
                                                <NavDropdown.Item href="#">??</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav.Item>*/}
                                        {/* <Nav.Item as="li" className="mx-lg-1">
                                            <Nav.Link href="/ui/base-ui/tabs">ㅇㅇ</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li" className="mx-lg-1">
                                            <Nav.Link href="/ui/base-ui/tabs">ㅎㅇㅎㅇ</Nav.Link>
                                        </Nav.Item> */}
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </ul>
                {/* } */}
                {/*  width:549px 이하일때 */}
                {/* {isMobile &&
                    <ul className="list-unstyled topbar-menu float-end mt-2 mb-0">
                        <Navbar className="navbar-expand-extra-sm px-1">
                            <Container>
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav as="ul" className="me-auto align-items-center">
                                        <Nav.Item as="li" className="mx-sm-1 pr-4">
                                            <Nav.Link as="link" href="/ui/base-ui/tabs" style={{margin:"0px"}}><MdOutlinePendingActions style={{width:"25px",height:"25px",}} /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="mx-lg-1">
                                            <Nav.Link href="/ui/base-ui/chwideugsingo" style={{margin:"0px"}}><RiFileShield2Line style={{ width: "25px", height: "25px" }} /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="mx-lg-1">
                                            <NavDropdown title={<BsFillDiagram3Fill style={{width: "25px", height: "25px" }} />} id="basic-nav-dropdown">
                                                <NavDropdown.Item href="/ui/base-ui/saeobjangjeongboiblyeog">사업장정보</NavDropdown.Item>
                                                <NavDropdown.Item href="#">?</NavDropdown.Item>
                                                <NavDropdown.Item href="#">??</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav.Item>
                                        <Nav.Item className="mx-lg-1">
                                            <Nav.Link href="/ui/base-ui/Geubyeomyeongseseo" style={{margin:"0px"}}><HiOutlineCash style={{ width: "25px", height: "25px" }} /></Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                        
                    </ul>
                } */}

                {/* toggle for vertical layout */}
                {(layoutType === layoutConstants.LayoutTypes.LAYOUT_VERTICAL ||
                    layoutType === layoutConstants.LayoutTypes.LAYOUT_FULL) && (
                    <button className="button-menu-mobile open-left" onClick={handleLeftMenuCallBack}>
                        <i className="mdi mdi-menu" />
                    </button>
                )}

                {/* toggle for horizontal layout */}
                {layoutType === layoutConstants.LayoutTypes.LAYOUT_HORIZONTAL && (
                    <Link
                        to="#"
                        className={classNames('navbar-toggle', { open: isMenuOpened })}
                        onClick={handleLeftMenuCallBack}
                    >
                        <div className="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                )}

                {/* toggle for detached layout */}
                {layoutType === layoutConstants.LayoutTypes.LAYOUT_DETACHED && (
                    <Link to="#" className="button-menu-mobile disable-btn" onClick={handleLeftMenuCallBack}>
                        <div className="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                )}      
            </div>
        </div>
    );
};

export default Topbar;
