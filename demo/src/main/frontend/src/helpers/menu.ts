import { MENU_ITEMS, MENU_ITEMS_All, MenuItemType } from 'appConstants';
import axios from 'axios';
import { getUsername } from 'utils/getUsername';
import { AUTH, ROLE_WORKER, ROLE_USER, ROLE_ADMIN } from '../utils/Auth';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// console.log(ROLE_WORKER);
// console.log(ROLE_USER);
// console.log(ROLE_ADMIN);

// 현재 url의 파라미터 반환
function GetLocation() {
    const location = useLocation();

    // console.log('location URL : ', location);
    // useEffect(() => {
    //     console.log(location);
    // }, [ location ]);
    return location.pathname;
}


/**
 *  specialUsername : 총무님 (이메일 또는 아이디)
 */


const specialUsername : string = "whitesnowjy@naver.com"; //총무님 계정
const specialUsername2 : string = "0052@nicenomu.com"; //박동훈 과장님 계정
const specialUsername3 : string = " ans-tpqls@hanmail.net"; //문세빈 팀장님 계정
//  const specialUsername : string = "qwer";

const getMenuItems = () => {
    // NOTE - You can fetch from server and return here as well
    // console.log(MENU_ITEMS);
    // return MENU_ITEMS;
    // 권한 설정
    const sessionJson: any = sessionStorage.getItem("hyper_user");
    // const businessdata = axios.post("businessInfoInquiry",{
    //     username: getUsername()
    // });


    let role: string;
    if (sessionJson) {

        role = JSON.parse(sessionJson).role;
        console.log("role : ", role);
        console.log(AUTH[role]);


        // '/ui/base-ui/tabs' - 인사 -- MENU_ITEMS
        // '/ui/base-ui/Geubyeomyeongseseo' - 급여 -- MENU_ITEMS_test
        // '/ui/base-ui/chwideugsingo' - 보험 -- MENU_ITEMS_test_test

        // includes('')이안에 페이지 를 넣으면 
        // topbar 인사 에서 페이지 탭변경시에도 메뉴가 메인메뉴sidebar로 변경안댐
        if (GetLocation().includes('tabsTop')) {
            return MENU_ITEMS.filter((data) => {
                if (data.label == "근태현황_총무" && getUsername() == specialUsername && getUsername() == specialUsername2) {
                    return data;
                }
                else if (data && data.role && data.role <= AUTH[role]) {

                    console.log("data.label : ", data.label);
                    console.log('helpers if 인사 :', data);

                    return data;
                }
                return null;
            });
        }

        if (GetLocation().includes('accordionsTop')) {
            return MENU_ITEMS.filter((data) => {
                if (data.label == "근태현황_총무" && getUsername() == specialUsername && getUsername() == specialUsername2) {
                    return data;
                }
                else if (data && data.role && data.role <= AUTH[role]) {

                    console.log("data.label : ", data.label);
                    console.log('helpers if 인사 :', data);

                    return data;
                }
                return null;
            });
        }
        if (GetLocation().includes('ScheduleCalendarTop')) {
            return MENU_ITEMS.filter((data) => {
                if (data.label == "근태현황_총무" && getUsername() == specialUsername && getUsername() == specialUsername2) {
                    return data;
                }
                else if (data && data.role && data.role <= AUTH[role]) {

                    console.log("data.label : ", data.label);
                    console.log('helpers if 인사 :', data);

                    return data;
                }
                return null;
            });
        }

    }
    return MENU_ITEMS_All.filter((data) => {
        if (data.label == "근태현황_총무" && getUsername() == specialUsername && getUsername() == specialUsername2) {
            return data;
        }
       
        if (data && data.role && data.role <= AUTH[role]) {
            return data;
        }
        return null;
    })

};

const findAllParent = (menuItems: MenuItemType[], menuItem: MenuItemType): string[] => {
    let parents: string[] = [];
    const parent = findMenuItem(menuItems, menuItem['parentKey']);


    if (parent) {
        parents.push(parent['key']);
        if (parent['parentKey']) parents = [...parents, ...findAllParent(menuItems, parent)];
    }

    // console.log("parents : ", parents);
    // console.log("parent : ", parent);
    return parents;
};

const findMenuItem = (
    menuItems: MenuItemType[] | undefined,
    menuItemKey: MenuItemType['key'] | undefined
): MenuItemType | null => {
    if (menuItems && menuItemKey) {
        for (var i = 0; i < menuItems.length; i++) {
            if (menuItems[i].key === menuItemKey) {
                return menuItems[i];
            }
            var found = findMenuItem(menuItems[i].children, menuItemKey);
            if (found) return found;
        }
    }
    return null;
};

export { getMenuItems, findAllParent, findMenuItem };
