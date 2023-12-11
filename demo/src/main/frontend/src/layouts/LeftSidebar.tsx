import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import { getMenuItems } from 'helpers';
import AppMenu from './Menu/';
import logoSm from 'assets/images/logo_sm.png';
import logoDark from 'assets/images/logo-dark.png';
import logoDarkSm from 'assets/images/logo_sm_dark.png';
import logo from 'assets/images/logo.png';
import profileImg from 'assets/images/users/avatar-1.jpg';

type SideBarContentProps = {
    hideUserProfile: boolean;
};

const SideBarContent = ({ hideUserProfile }: SideBarContentProps) => {
    return (
        <>
            {!hideUserProfile && (
                <div className="leftbar-user">
                    <Link to="/">
                        <img src={profileImg} alt="" height="42" className="rounded-circle shadow-sm" />
                        <span className="leftbar-user-name">Dominic Keller</span>
                    </Link>
                </div>
            )}
            <AppMenu menuItems={getMenuItems()} />
            <div className="clearfix" />
        </>
    );
};

type LeftSidebarProps = {
    hideLogo?: boolean;
    hideUserProfile: boolean;
    isLight: boolean;
    isCondensed: boolean;
};

const LeftSidebar = ({ isCondensed, isLight, hideLogo, hideUserProfile }: LeftSidebarProps) => {
    const menuNodeRef = useRef<HTMLDivElement>(null);

    // console.log("LeftSidebar");
    /**
     * Handle the click anywhere in doc
     */
    const handleOtherClick = (e: MouseEvent) => {
        if (menuNodeRef && menuNodeRef.current && menuNodeRef.current.contains(e.target as Node)) return;
        // else hide the menubar
        if (document.body) {
            document.body.classList.remove('sidebar-enable');
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOtherClick, false);

        return () => {
            document.removeEventListener('mousedown', handleOtherClick, false);
        };
    }, []);

    // console.log("LeftSidebar.tsx");
    // console.log("menuItems", getMenuItems());
    return (
        <div className="leftside-menu" ref={menuNodeRef}>
            {!hideLogo && (
                <>
                    {/* 로고 크기변경 */}
                    <Link to="/" className="logo text-center logo-light">
                        <span className="logo-lg">
                            <img src={isLight ? logoDark : logo} alt="logo" height="20" />
                        </span>
                        <span className="logo-sm">
                            <img src={isLight ? logoSm : logoDarkSm} alt="logo" height="16" />
                        </span>
                    </Link>

                    <Link to="/" className="logo text-center logo-dark">
                        <span className="logo-lg">
                            <img src={isLight ? logoDark : logo} alt="logo" height="16" />
                        </span>
                        <span className="logo-sm">
                            <img src={isLight ? logoSm : logoDarkSm} alt="logo" height="16" />
                        </span>
                    </Link>
                </>
            )}

            {!isCondensed && (
                <SimpleBar style={{ maxHeight: '100%' }} timeout={500} scrollbarMaxSize={320}>
                    <SideBarContent hideUserProfile={hideUserProfile} />
                </SimpleBar>
            )}
            {isCondensed && <SideBarContent hideUserProfile={hideUserProfile} />}
        </div>
    );
};

export default LeftSidebar;