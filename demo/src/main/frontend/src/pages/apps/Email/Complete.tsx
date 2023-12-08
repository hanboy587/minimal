import { Row, Col, Card, Button, } from 'react-bootstrap';
import LeftSide from './LeftSide';
import { useInbox } from './hooks';
import { useToggle } from 'hooks';
import Sendmail from 'assets/images/sendmail3.png';
import { Link } from 'react-router-dom';


const Complete = () => {
    const [isModalOpen, toggleComposeModal] = useToggle();
    const {
        emails,
        totalEmails,
        startIndex,
        endIndex,
        page,
        totalPages,
        totalUnreadEmails,
        getPrevPage,
        getNextPage,
        showAllEmails,
        showStarredEmails,
    } = useInbox();
    return (
        <>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="page-aside-left">
                                <LeftSide
                                    totalUnreadEmails={totalUnreadEmails}
                                    showAllEmails={showAllEmails}
                                    showStarredEmails={showStarredEmails}
                                    toggleComposeModal={toggleComposeModal}
                                />
                            </div>
                            <div className="page-aside-right">
                                <Row className="mt-3">
                                    <p style={{fontSize:"30px",textAlign:"center"}}>메일 발송을 완료 했습니다</p>
                                    <span className="text-center">
                                        <Link to="/apps/email/Write" className="" style={{fontSize:"30px",textAlign:"center"}}  >
                                            <Button variant='outline-primary'>메일작성</Button>
                                        </Link> &nbsp;&nbsp;&nbsp;&nbsp;
                                        <Link to="/apps/email/inbox" className="" style={{fontSize:"30px",textAlign:"center"}}>
                                            <Button variant='outline-primary'>메일목록</Button>
                                        </Link>
                                    </span>
                                </Row>
                                <div className="text-center mt-3 mt-md-0">
                                    <img src={Sendmail} alt="" className="img-fluid" style={{width: "900px", height: "600px" }} />
                                </div>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Complete;