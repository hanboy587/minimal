import * as layoutConstants from 'appConstants';
import LayoutTypes from './LayoutTypes';
import LayoutColor from './LayoutColor';
import LayoutWidth from './LayoutWidth';
import LeftSideBarTheme from './LeftSideBarTheme';
import LeftSideBarType from './LeftSideBarType';
import useThemeCustomizer from './useThemeCustomizer';

// 오른쪽 사이드 바 화면 구성변경 세팅
const ThemeCustomizer = () => {
    const {
        layoutColor,
        layoutType,
        layoutWidth,
        leftSideBarType,
        leftSideBarTheme,
        disableLayoutWidth,
        disableSidebarTheme,
        disableSidebarType,
        changeLayoutType,
        changeLayoutColorScheme,
        changeWidthMode,
        changeLeftSidebarTheme,
        changeLeftSiderbarType,
        reset,
    } = useThemeCustomizer();

    return (
        <div className="p-3">
            <div className="alert alert-warning" role="alert">
                화면구성을 변경할 수 있습니다
            </div>

            {/* Layouts */}
            <LayoutTypes
                changeLayoutType={changeLayoutType}
                layoutType={layoutType}
                layoutConstants={layoutConstants.LayoutTypes}
            />

            {/* color scheme */}
            <LayoutColor
                changeLayoutColorScheme={changeLayoutColorScheme}
                layoutColor={layoutColor}
                layoutConstants={layoutConstants.LayoutColor}
            />

            {/* Width */}
            {disableLayoutWidth && (
                <LayoutWidth
                    changeWidthMode={changeWidthMode}
                    layoutWidth={layoutWidth}
                    layoutConstants={layoutConstants.LayoutWidth}
                />
            )}

            {/* Left Sidebar */}
            {disableSidebarTheme && (
                <LeftSideBarTheme
                    changeLeftSidebarTheme={changeLeftSidebarTheme}
                    leftSideBarTheme={leftSideBarTheme}
                    layoutConstants={layoutConstants.SideBarTheme}
                />
            )}

            {/* Left Sidebar Size */}
            {disableSidebarType && (
                <LeftSideBarType
                    changeLeftSiderbarType={changeLeftSiderbarType}
                    leftSideBarType={leftSideBarType}
                    layoutConstants={layoutConstants.SideBarWidth}
                />
            )}

            <div className="d-grid mt-4">
                <button className="btn btn-primary" id="resetBtn" onClick={() => reset()}>
                    기본 설정으로 되돌리기
                </button>
            </div>
        </div>
    );
};

export default ThemeCustomizer;
