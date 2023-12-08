import { Form } from 'react-bootstrap';
import * as layoutConstants from 'appConstants';

type LeftSideBarThemeProps = {
    changeLeftSidebarTheme: (value: string) => void;
    leftSideBarTheme: string;
    layoutConstants: typeof layoutConstants.SideBarTheme;
};

const LeftSideBarTheme = ({ changeLeftSidebarTheme, leftSideBarTheme, layoutConstants }: LeftSideBarThemeProps) => {
    return (
        <>
            <h5 className="mt-4">사이드바 색상</h5>
            <hr className="mt-1" />

            {/* <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    name="theme"
                    id="brand-check"
                    value={layoutConstants.LEFT_SIDEBAR_THEME_DEFAULT}
                    onChange={(e) => changeLeftSidebarTheme(e.target.value)}
                    checked={leftSideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_DEFAULT}
                />
                <Form.Check.Label htmlFor="brand-check">Default</Form.Check.Label>
            </Form.Check> */}

            <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    name="theme"
                    id="light-check"
                    value={layoutConstants.LEFT_SIDEBAR_THEME_LIGHT}
                    onChange={(e) => changeLeftSidebarTheme(e.target.value)}
                    checked={leftSideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_LIGHT}
                />
                <Form.Check.Label htmlFor="light-check">라이트</Form.Check.Label>
            </Form.Check>

            <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    name="theme"
                    id="dark-check"
                    value={layoutConstants.LEFT_SIDEBAR_THEME_DARK}
                    onChange={(e) => changeLeftSidebarTheme(e.target.value)}
                    checked={leftSideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_DARK}
                />
                <Form.Check.Label htmlFor="dark-check">다크</Form.Check.Label>
            </Form.Check>
        </>
    );
};

export default LeftSideBarTheme;