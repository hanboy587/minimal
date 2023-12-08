import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Dropdown, ButtonGroup, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useToggle } from 'hooks';
import { PageTitle } from 'components';
import { EmailDetails } from './types';
import { emails } from './data';
import avatarImg from 'assets/images/users/avatar-2.jpg';
import LeftSide from './LeftSide';
import ComposeMail from './ComposeMail';


// 메일내용에대한 code
const EmailDetail = () => {
    const [totalUnreadEmails] = useState<number>(emails.filter((e) => e.is_read === false).length);
    const [email] = useState<EmailDetails>({
        avatar: avatarImg,
        subject: 'Your elite author Graphic Optimization reward is ready!',
        from_name: 'Steven Smith',
        from_email: 'jonathan@domain.com',
        recieved_on: 'Jul 24, 2019, 5:17 AM',
        attachments: [
            { id: 1, name: 'Hyper-admin-design.zip', size: '2.3MB', ext: '.zip' },
            { id: 2, name: 'DUashboard-design.jpg', size: '0.3MB', ext: '.jpg' },
            { id: 3, name: 'Admin-bug-report.mp4', size: '4.1MB', ext: '.mp4' },
        ],
    });

    // handle compose modal
    const [isModalOpen, toggleComposeModal] = useToggle();

    
    return (
        <>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="page-aside-left">
                                <LeftSide
                                    totalUnreadEmails={totalUnreadEmails}
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
                                    <OverlayTrigger placement="bottom" overlay={<Tooltip>휴지통</Tooltip>}>
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
                                    <h5 className="font-18">안녕!</h5>
                                    <hr />

                                    <div className="d-flex mb-3 mt-1">
                                        <img
                                            className="d-flex me-2 rounded-circle"
                                            src={email.avatar}
                                            alt={email.from_name}
                                            height="32"
                                        />
                                        <div className="w-100 overflow-hidden">
                                            <small className="float-end">{email.recieved_on}</small>
                                            <h6 className="m-0 font-14">{email.from_name}</h6>
                                            <small className="text-muted">From: {email.from_email}</small>
                                        </div>
                                    </div>

                                    <p>Hi!</p>
                                    
                                    <hr />

                                    <h5 className="mb-3">첨부파일</h5>
                                    <Row>
                                        {email.attachments.map((f, index) => {
                                            return (
                                                <Col xl={4} key={index.toString()}>
                                                    <Card className="mb-1 shadow-none border">
                                                        <div className="p-2">
                                                            <Row className="align-items-center">
                                                                <Col className="col-auto">
                                                                    <div className="avatar-sm">
                                                                        <span className="avatar-title bg-primary-lighten text-primary rounded">
                                                                            {f.ext}
                                                                        </span>
                                                                    </div>
                                                                </Col>
                                                                <Col className="col ps-0">
                                                                    <Link
                                                                        to="#"
                                                                        className="text-muted font-weight-bold"
                                                                    >
                                                                        {f.name}
                                                                    </Link>
                                                                    <p className="mb-0">{f.size}</p>
                                                                </Col>
                                                                <Col className="col-auto">
                                                                    <Link
                                                                        to="#"
                                                                        className="btn btn-link btn-lg text-muted"
                                                                    >
                                                                        <i className="dripicons-download"></i>
                                                                    </Link>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            );
                                        })}
                                    </Row>

                                    {/* <div className="mt-5">
                                        <Link to="#" className="btn btn-secondary me-2">
                                            <i className="mdi mdi-reply me-1"></i> Reply
                                        </Link>
                                        <Link to="#" className="btn btn-light">
                                            Forward <i className="mdi mdi-forward ms-1"></i>
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* compose email modal */}
            <ComposeMail isModalOpen={isModalOpen} toggleComposeModal={toggleComposeModal} />
        </>
    );
};

export default EmailDetail;
