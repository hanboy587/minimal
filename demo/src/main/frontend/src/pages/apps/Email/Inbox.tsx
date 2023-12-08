import { Link } from 'react-router-dom';
import { Row, Col, Card, Dropdown, ButtonGroup, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import classNames from 'classnames';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useToggle } from 'hooks';
import { Email } from './types';
import ComposeMail from './ComposeMail';
import LeftSide from './LeftSide';
import { useInbox } from './hooks';
import axios from 'axios';
import { getUserIdx } from 'utils/getUserIdx';



const EmailsList = ({ emails }: { emails: Email[] }) => {

    const emailTestList = () => {
        const userId = getUserIdx();
        axios.get(`https://email.rba.kr/mail?requesterUserId=${userId}`)
            .then(res => {
                console.log('id 값 판별 email list : ', res);
            })
            .catch(err => {
                console.log('emailList catch', err);
            })
    }

    return (
        <ul className="email-list">
            {emails.map((email, index) => {
                return (
                    <li className={classNames({ unread: !email.is_read })} key={index.toString()}>
                        <div className="email-sender-info">
                            <div className="checkbox-wrapper-mail">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id={'mail' + email.id} />
                                    <label className="form-check-label" htmlFor={'mail' + email.id}></label>
                                </div>
                            </div>

                            <span
                                className={classNames('star-toggle', 'mdi', 'mdi-star-outline', {
                                    'text-warning': email.is_important,
                                })}
                            ></span>
                            <Link to="/apps/email/details" className="email-title">
                                {email.from_name}
                                {email.number_of_reply > 1 && <span> ({email.number_of_reply})</span>}
                            </Link>
                        </div>
                        <div className="email-content">
                            <Link to="/apps/email/details" className="email-subject">
                                {email.subject}
                            </Link>
                            <div className="email-date">{email.time}</div>
                        </div>
                        <div className="email-action-icons">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <i className="mdi mdi-archive email-action-icons-item"></i>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <i className="mdi mdi-delete email-action-icons-item"></i>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <i className="mdi mdi-email-open email-action-icons-item"></i>
                                    </Link>
                                </li>
                                {/* <li className="list-inline-item">
                                    <Link to="#">
                                        <i className="mdi mdi-clock email-action-icons-item"></i>
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

const Inbox = () => {
    // handle compose modal
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
                                <ButtonGroup className="me-1 my-1">
                                    <OverlayTrigger placement="bottom" overlay={<Tooltip>보관함</Tooltip>}>
                                        <Button variant="secondary">
                                            <i className="mdi mdi-archive font-16"></i>
                                        </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="bottom" overlay={<Tooltip>스팸</Tooltip>}>
                                        <Button variant="secondary">
                                            <i className="mdi mdi-alert-octagon font-16"></i>
                                        </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger key="bottm" placement="bottom" overlay={<Tooltip>휴지통</Tooltip>}>
                                        <Button variant="secondary">
                                            <i className="mdi mdi-delete-variant font-16"></i>
                                        </Button>
                                    </OverlayTrigger>
                                </ButtonGroup>

                                <ButtonGroup as={Dropdown} className="d-inline-block me-1 my-1">
                                    <Dropdown.Toggle variant="secondary" className="arrow-none">
                                        <i className="mdi mdi-folder font-16"></i>
                                        <i className="mdi mdi-chevron-down"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <span className="dropdown-header">이동:</span>
                                        {/* <Dropdown.Item>Social</Dropdown.Item>
                                        <Dropdown.Item>Promotions</Dropdown.Item>
                                        <Dropdown.Item>Updates</Dropdown.Item>
                                        <Dropdown.Item>Forums</Dropdown.Item> */}
                                    </Dropdown.Menu>
                                </ButtonGroup>

                                <ButtonGroup as={Dropdown} className="d-inline-block me-1 my-1">
                                    <Dropdown.Toggle variant="secondary" className="arrow-none">
                                        <i className="mdi mdi-label font-16"></i>
                                        <i className="mdi mdi-chevron-down"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <span className="dropdown-header">Label:</span>
                                        <Dropdown.Item>새메일</Dropdown.Item>
                                        <Dropdown.Item>중요</Dropdown.Item>
                                        {/* <Dropdown.Item>Social</Dropdown.Item>
                                        <Dropdown.Item>Forums</Dropdown.Item> */}
                                    </Dropdown.Menu>
                                </ButtonGroup>

                                <ButtonGroup as={Dropdown} className="d-inline-block me-1 my-1">
                                    <Dropdown.Toggle variant="secondary" className="arrow-none">
                                        <i className="font-16"></i> 더보기
                                        <i className="mdi mdi-chevron-down"></i>
                                    </Dropdown.Toggle>
                                    {/* <Dropdown.Menu>
                                        <span className="dropdown-header">More Options :</span>
                                        <Dropdown.Item>Mark as Unread</Dropdown.Item>
                                        <Dropdown.Item>Add to Tasks</Dropdown.Item>
                                        <Dropdown.Item>Add Star</Dropdown.Item>
                                        <Dropdown.Item>Mute</Dropdown.Item>
                                    </Dropdown.Menu> */}
                                </ButtonGroup>

                                <div className="mt-3">
                                    <EmailsList emails={emails} />
                                </div>

                                <Row>
                                    <Col sm={7} className="mt-1">
                                        Showing {startIndex} - {endIndex} of {totalEmails}
                                    </Col>
                                    <Col sm={5}>
                                        <ButtonGroup className="float-end">
                                            {page === 1 ? (
                                                <Button variant="light" className="btn-sm" disabled>
                                                    <i className="mdi mdi-chevron-left"></i>
                                                </Button>
                                            ) : (
                                                <Button variant="info" className="btn-sm" onClick={getPrevPage}>
                                                    <i className="mdi mdi-chevron-left"></i>
                                                </Button>
                                            )}

                                            {page < totalPages ? (
                                                <Button variant="info" className="btn-sm" onClick={getNextPage}>
                                                    <i className="mdi mdi-chevron-right"></i>
                                                </Button>
                                            ) : (
                                                <Button variant="light" className="btn-sm" disabled>
                                                    <i className="mdi mdi-chevron-right"></i>
                                                </Button>
                                            )}
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ComposeMail isModalOpen={isModalOpen} toggleComposeModal={toggleComposeModal} />
        </>
    );
};

export default Inbox;
