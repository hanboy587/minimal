import { Container, Row, Col, Card } from 'react-bootstrap';

const Jeojaggwon = () => {
    return (
        <>
            <section className="py-3">
                <Container>
                    <div className="clearfix">
                        <div className="float-start mb-3 text-black">
                            <p style={{ fontSize: "40px", fontWeight: "bolder" }}>
                                저작권</p>
                        </div>
                    </div>
                    <Row>
                        <li>
                            <a href="https://www.flaticon.com/kr/free-animated-icons/" title="검색 애니메이션 아이콘">
                                검색 애니메이션 아이콘 제작자: Freepik - Flaticon
                            </a>
                        </li>
                        <li>
                            <a href="https://www.flaticon.com/kr/free-icons/" title="뛰어나다 아이콘">
                                뛰어나다 아이콘  제작자: Pixel perfect - Flaticon
                            </a>
                        </li>
                        <li>
                            <a href="https://www.freepik.com/free-vector/illustration-e-mail-protection-concept-e-mail-envelope-with-file-document-attach-file-system-security-approved_13744792.htm#page=2&query=email%20success&position=24&from_view=search&track=robertav1_2_sidr">
                                Image by jcomp
                            </a> on Freepik
                        </li>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Jeojaggwon;