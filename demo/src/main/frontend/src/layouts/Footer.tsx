import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <></>
    );
};

export default Footer;

// return 안의 원본 코드
{/* <footer className="footer">
    <div className="container-fluid">
        <Row>
            <Col md={6}>{currentYear} © Hyper - Coderthemes.com</Col>

            <Col md={6}>
                <div className="text-md-end footer-links d-none d-md-block">
                    <Link to="#">About</Link>
                    <Link to="#">Support</Link>
                    <Link to="#">Contact Us</Link>
                </div>
            </Col>
        </Row>
    </div>
</footer> */}
