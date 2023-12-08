import React from 'react';

type MenuItem = {
    label: string;
    icon?: string;
    variant?: string;
    hasDivider?: boolean;
};

type CardTitleProps = {
    menuItems: Array<MenuItem>;
    title: string | React.ReactNode;
    containerClass: string;
    icon?: string;
};

// 표옆에 있는 점(dropdown)
const CardTitle = ({ title, containerClass, icon, menuItems }: CardTitleProps) => {
    return (
       <></>
    );
};

export default CardTitle;
