import { Nav, Navbar, Container, Dropdown, DropdownButton, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useRedux } from 'hooks';
import logo from 'assets/images/logo.png';

const NavBar = () => {
    const { appSelector } = useRedux();

    return (
        // variant="dark" Navbar 속성안에 들어가있었음
        <Navbar collapseOnSelect expand="lg"  className="py-lg-3">
            <Container>
                <Navbar.Brand href="/" className="me-lg-5">
                    <img src={logo} alt="" className="logo-dark" height="18" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"  style={{color:"#C6C6C6",fontWeight:"bolder", outline: "none" }}>
                    <i className="mdi mdi-menu"></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav as="ul" className="me-auto align-items-center">
                        <Nav.Item as="li" className="mx-lg-1">
                            <Nav.Link href="/landing" className="active toggle-outline-none" style={{color:"#C6C6C6",fontWeight:"bolder"}}>
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="mx-lg-1" >
                            <Dropdown>
                                <Dropdown.Toggle as={Link} to="#" className="btn btn-link" id="dropdown-basic" style={{color:"#C6C6C6",fontWeight:"bolder", outline: "none" }}>
                                    서비스안내
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/Seobiseusogae" >서비스소개</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Samudaehaengjedo">사무대행제도</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Sahoeboheomsingo">사회보험신고</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="#">근태관리(오픈예정)</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="#">급여관리(오픈예정)</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                        {/* <Nav.Item className="mx-lg-1">
                            <Dropdown>
                                <Dropdown.Toggle as={Link} to="#" className="btn btn-link" id="dropdown-basic" style={{color:"#778899", outline: "none" }}>
                                    고객센터
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/Gongjisahang">공지사항</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/QnA">1:1 문의하기</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="#">자주하는질문</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item> */}
                        {/* <Nav.Item className="mx-lg-1">
                            <Dropdown>
                                <Dropdown.Toggle as={Link} to="#" className="btn btn-link" id="dropdown-basic" style={{ color: "white", outline: "none" }}>
                                    마이페이지
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">서비스소개</Dropdown.Item>
                                    <Dropdown.Item href="#">사무대행제도</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item> */}
                    </Nav>
                        <Link to="/account/login" style={{color:"#778899"}}>
                            로그인
                        </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
