import { Link } from 'react-router-dom';
import { ProgressBar, Button } from 'react-bootstrap';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Write from './Write';
type LeftSideProps = {
    totalUnreadEmails: number;
    showAllEmails?: () => void;
    showStarredEmails?: () => void;
    toggleComposeModal: () => void;
};
const LeftSide = ({ totalUnreadEmails, showAllEmails, showStarredEmails, toggleComposeModal }: LeftSideProps) => {
    return (
        <>
            <div className="d-grid">
                <Link to="/apps/email/Write" className="email-subject">
                    <Button variant='danger' style={{width:"100%"}}>메일작성</Button>
                </Link>
                    {/* <button type="button" className="btn btn-danger"  onClick={toggleComposeModal}>
                        모달 작성
                    </button> */}

            </div>

            <div className="email-menu-list mt-3">
                <Link to="/apps/email/inbox" className="text-danger fw-bold" onClick={showAllEmails}>
                    <i className="dripicons-inbox me-2"></i>전체메일
                    <span className="badge badge-danger-lighten float-end ms-2">{totalUnreadEmails}</span>
                </Link>
                <Link to="/apps/email/inbox" onClick={showStarredEmails}>
                    <i className="dripicons-star me-2"></i>즐겨찾기
                </Link>
                {/* <Link to="/apps/email/inbox">
                    <i className="dripicons-clock me-2"></i>Snoozed
                </Link> */}
                <Link to="/apps/email/inbox">
                    <i className="dripicons-document me-2"></i>임시저장
                    <span className="badge badge-info-lighten float-end ms-2">32</span>
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-exit me-2"></i>보낸메일
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-trash me-2"></i>휴지통
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-tag me-2"></i>중요
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-warning me-2"></i>스팸
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-wrong me-2"></i>수신거부
                </Link>
            </div>

            <div className="mt-4">
                <h6 className="text-uppercase">Labels</h6>
                <div className="email-menu-list labels-list mt-2">
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-info me-2"></i>새메일
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-danger me-2"></i>중요
                    </Link>
                    {/* <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-warning me-2"></i>Friends
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-success me-2"></i>Family
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-primary me-2"></i>Social
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-secondary me-2"></i>
                        Promotions
                    </Link> */}
                </div>
            </div>

            <div className="mt-5">
                <h6 className="text-uppercase mt-3">용량</h6>
                <ProgressBar variant="success" now={46} className="my-2 progress-sm" />
                <p className="text-muted font-13 mb-0">7 GB / 15 GB</p>
            </div>
        </>
    );
};

export default LeftSide;
