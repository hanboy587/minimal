import { Link } from 'react-router-dom';
import { Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import classNames from 'classnames';
import { useToggle } from 'hooks';
import { ProfileOption } from '../types';
import Testimg from 'pages/uikit/Testimg'
import { useState, useEffect } from 'react';


type ProfileDropdownProps = {
    menuItems: Array<ProfileOption>;
    userImage: string;
    username: string;
    userTitle?: string;
};

const ProfileDropdown = ({ userTitle, username, menuItems, userImage }: ProfileDropdownProps) => {
    const [isOpen, toggleDropdown] = useToggle();

    // 이름
    const [realname, setRealname] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setRealname(JSON.parse(data).realname);
    }, []);

    return (
        <>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>{realname}</Tooltip>} >
                <Dropdown show={isOpen} onToggle={toggleDropdown}>
                    <Dropdown.Toggle
                        variant="link"
                        id="dropdown-profile"
                        as={Link}
                        to="#"
                        onClick={toggleDropdown}
                        className="nav-link dropdown-toggle nav-user arrow-none me-0"
                    >
                        <p >
                            <Testimg />
                        </p>
                        {/* <span className="account-user-name">{username}</span>
                <span className="account-position">{username}</span> */}
                        {/* <span className="account-user-avatar">
                    <Testimg />
                </span>
                <span className="account-user-name mt-1" >{username}</span> */}
                        {/* <span>
                    <span className="account-user-name">{username}</span>
                    <span className="account-position">{userTitle}</span>
                </span> */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu align={'end'} className="dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                        <div onClick={toggleDropdown}>
                            {/* <div className="dropdown-header noti-title">
                        <h6 className="text-overflow m-0">Welcome !</h6>
                    </div> */}
                            {menuItems.map((item, i) => {
                                return (
                                    <Link to={item.redirectTo} className="dropdown-item notify-item" key={i + '-profile-menu'}>
                                        <i className={classNames(item.icon, 'me-1')}></i>
                                        <span>{item.label}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
            </OverlayTrigger>
        </>
    );
};

export default ProfileDropdown;
