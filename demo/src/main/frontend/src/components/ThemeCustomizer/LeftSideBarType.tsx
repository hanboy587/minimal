import { Form } from 'react-bootstrap';
import * as layoutConstants from 'appConstants';

type LeftSideBarTypeProps = {
    changeLeftSiderbarType: (value: string) => void;
    leftSideBarType: string;
    layoutConstants: typeof layoutConstants.SideBarWidth;
};

const LeftSideBarType = ({ changeLeftSiderbarType, leftSideBarType, layoutConstants }: LeftSideBarTypeProps) => {
    return (
        <>
            <Form.Check className="form-check form-switch mb-1 mt-3">
                <Form.Check.Input
                    type="radio"
                    name="leftsidebar-size"
                    id="default-check"
                    value={layoutConstants.LEFT_SIDEBAR_TYPE_FIXED}
                    onChange={(e) => changeLeftSiderbarType(e.target.value)}
                    checked={leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_FIXED}
                />
                <Form.Check.Label htmlFor="default-check">고정</Form.Check.Label>
            </Form.Check>

            <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    name="leftsidebar-size"
                    id="condensed-check"
                    value={layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED}
                    onChange={(e) => changeLeftSiderbarType(e.target.value)}
                    checked={leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED}
                />
                <Form.Check.Label htmlFor="condensed-check">아이콘보기</Form.Check.Label>
            </Form.Check>

            {/* <Form.Check className="form-check form-switch mb-1">
                <Form.Check.Input
                    type="radio"
                    name="leftsidebar-size"
                    id="compact-check"
                    value={layoutConstants.LEFT_SIDEBAR_TYPE_SCROLLABLE}
                    onChange={(e) => changeLeftSiderbarType(e.target.value)}
                    checked={leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_SCROLLABLE}
                />
                <Form.Check.Label htmlFor="compact-check">스크롤</Form.Check.Label>
            </Form.Check> */}
        </>
    );
};

export default LeftSideBarType;