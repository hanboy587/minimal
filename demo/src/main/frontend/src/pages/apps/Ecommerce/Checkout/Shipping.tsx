import { useForm, FieldErrors, UseFormRegister, Control } from 'react-hook-form';
import { Row, Col, Button, Table, Card, Badge } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import MaskedInput from 'react-text-mask';
import { FormInput, FileUploader } from 'components';
import { countries } from './data';
import { TableRecord1, TableRecord2 } from './types';

type ShippingProps = {
    updateShipping: (shippingCost: number) => void;
};

const Shipping = ({ updateShipping }: ShippingProps) => {
    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            bb: yup.string().required('종(전)회사명을 입력해주세요'),
            aa: yup.string().required('사업자등록번호를 입력해주세요'),
            cc: yup.string().required('근무시작일을 입력해주세요'),
            dd: yup.string().required('근무종료일을 입력해주세요'),
            ee: yup.string().required('급여를 입력해주세요'),
        })
    );

    /*
     * form methods
     */
    const methods = useForm({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;


    // 비과세및감면소득세
    const records1: TableRecord1[] = [
        { id: 1, gubun: '(802)직원월급', nabsejohab: '500,000 원', },
        { id: 2, gubun: '(806)퇴직급여', nabsejohab: '2,500,000 원',  },
        { id: 3, gubun: '(803)상여금', nabsejohab: '300,000 원', },
    ];

    // 세액명세 table

    const records2: TableRecord2[] = [
        { id: 1, gubun: '(72)결정세액', sodeugse: '50,000원', jibangsodeugse: '5,000원', nongeochon: '0원', },
        { id: 2, gubun: '(75)납부특례세액', sodeugse: '0원', jibangsodeugse: '0원', nongeochon: '0원', },
    ];

    // 비과세및감면소득명세 테이블

    const BasicTable = () => {
        return (
            <div>
                <Table className="mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>구분</th>
                            <th>납세조합</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records1.map((record, index) => {
                            return (
                                <tr key={index.toString()}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.gubun}</td>
                                    <td>{record.nabsejohab}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    };


    // 세액명세 테이블
    const BasicTable2 = () => {
        return (
            <div>
                <Table className="mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>구분</th>
                            <th>(78)소득세</th>
                            <th>(79)지방소득세</th>
                            <th>(80)농어촌특별세</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records2.map((record, index) => {
                            return (
                                <tr key={index.toString()}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.gubun}</td>
                                    <td>{record.sodeugse}</td>
                                    <td>{record.jibangsodeugse}</td>
                                    <td>{record.nongeochon}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    };


    return (
        <Row>
            <Col>
                <h5 className="text-muted mb-3">※전 직장이 없으신 분은 다음으로 넘어가 주세요</h5>
                <h4 className="mt-2 text-uppercase bg-light p-2">파일업로드</h4>
                <p className="text-muted mb-3">※종(전)근무지 원천징수영수증 파일을 반드시 업로드해주세요</p>
                <div className="uploader mt-3 mb-3">
                    <Row>
                        <Col md={12}>
                            <FileUploader
                                onFileUpload={(files) => {
                                    console.log(files);
                                }}
                            />
                        </Col>
                    </Row>
                </div>
                <h4 className="mt-2 text-uppercase bg-light p-2">근무처별소득명세</h4>
                <p className="text-muted mb-4">※근로소득 원천징수영수증 내용 입력해주세요(전직장)</p>

                <form onSubmit={handleSubmit(() => { })}>
                    <Row>
                        <Col md={6}>
                            <FormInput
                                label="(9)근무처명 *"
                                type="text"
                                name="jeongeunmu"
                                placeholder="종(전)회사명을 입력해주세요"
                                containerClass={'mb-3'}
                                register={register}
                                key="jeongeunmu"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                        <Col md={6}>
                            <FormInput
                                label="(10)사업자등록번호 *"
                                type="number"
                                name="saeobjaNum"
                                placeholder="사업자등록번호를입력해주세요"
                                containerClass={'mb-3'}
                                register={register}
                                key="saeobjaNum"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <h5 className="text-start">(11)근무기간 *</h5> 
                        <Col md={6}>
                            <FormInput
                                label="시작일"
                                type="date"
                                name="startgammyeon"
                                placeholder="시작일"
                                containerClass={'mb-3'}
                                register={register}
                                key="startgammyeon"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                        <Col md={6}>
                            <FormInput
                                label="종료일"
                                type="date"
                                name="endgammyeon"
                                placeholder="종료일"
                                containerClass={'mb-3'}
                                register={register}
                                key="endgammyeon"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <h5>(12)감면기간</h5>
                        <Col md={6}>
                            <FormInput
                                label="시작일"
                                type="date"
                                name="startgammyeon"
                                placeholder="시작일"
                                containerClass={'mb-3'}
                                register={register}
                                key="startgammyeon"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                        <Col md={6}>
                            <FormInput
                                label="종료일"
                                type="date"
                                name="endgammyeon"
                                placeholder="종료일"
                                containerClass={'mb-3'}
                                register={register}
                                key="endgammyeon"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormInput
                                label="(13)급여 *"
                                type="text"
                                name="geubyeo"
                                placeholder="급여를입력해주세요"
                                containerClass={'mb-3'}
                                register={register}
                                key="geubyeo"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                        <Col md={6}>
                            <FormInput
                                label="(14)상여"
                                type="text"
                                name="sangyeo"
                                placeholder="상여를입력해주세요"
                                containerClass={'mb-3'}
                                register={register}
                                key="sangyeo"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Row> 
                    <Row>
                        <Col md={6}>
                            <FormInput
                                label="(15)인정상여"
                                type="text"
                                name="injeongsangyeo"
                                placeholder="인정상여를입력해주세요"
                                containerClass={'mb-3'}
                                register={register}
                                key="injeongsangyeo"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Row>  
                    <Row>
                        <Col md={3}>
                            <FormInput
                                label="(15)-1 주식매수선택권 행사이익"
                                type="text"
                                name="injeongsangyeo-1"
                                containerClass={'mb-3'}
                                register={register}
                                key="injeongsangyeo-1"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                        <Col md={3}>
                            <FormInput
                                label="(15)-2 우리사주조합인출금"
                                type="text"
                                name="injeongsangyeo-2"
                                containerClass={'mb-3'}
                                register={register}
                                key="injeongsangyeo-2"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                        <Col md={3}>
                            <FormInput
                                label="(15)-3 임원퇴직소득금액 한도초과액"
                                type="text"
                                name="injeongsangyeo-3"
                                containerClass={'mb-3'}
                                register={register}
                                key="injeongsangyeo-3"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                        <Col md={3}>
                            <FormInput
                                label="(15)-4 직무발명보상금"
                                type="text"
                                name="injeongsangyeo-4"
                                containerClass={'mb-3'}
                                register={register}
                                key="injeongsangyeo-4"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <FormInput
                                label="(16)계"
                                type="text"
                                name="habgye"
                                placeholder="합계를입력해주세요"
                                containerClass={'mb-3'}
                                register={register}
                                key="habgye"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Row>

                    <h4 className="mt-2 text-uppercase bg-light p-2">비과세 및 감면소득명세</h4>
                    <h5 className="text-muted">※가입된 항목이 있는 경우에만 추가해주세요</h5>
                    <h6 className="text-muted">(근로소득 원천징수영수증의 비과세 및 감면소득명세 항목을 입력합니다)</h6>
                    <Row>
                        <Col md={6}>
                            <div className="form-group mb-2">
                                <label className="form-label"></label>
                                <Select
                                    isMulti={true}
                                    options={[
                                        { value: 'baeuja', label: '(801)임원급여' },
                                        { value: 'sodeugjajiggye', label: '(802)직원급여' },
                                        { value: 'baeujajiggye', label: '(803)상여금' },
                                        { value: 'jiggyebisog', label: '(804)제수당' },
                                        { value: 'hyeongjejamae', label: '(805)잡급' },
                                        { value: 'witag-adong', label: '(806)퇴직급여' },
                                        { value: 'witag-adong', label: '(807)퇴직보험충당금전입' },
                                    ]}
                                    className="react-select"
                                    classNamePrefix="react-select"
                                ></Select>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="mt-3">
                                <Button variant="primary" type="submit">
                                    추가
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
                        <BasicTable/>
                        </Col>
                    </Row>

                    <h4 className="mt-2 text-uppercase bg-light p-2">세액명세</h4>
                    <Row>
                        <Col xl={12}>
                            <BasicTable2 />
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        {/* <Col sm={6}>
                            <Link
                                to="/apps/ecommerce/checkout#"
                                className="btn text-muted d-none d-sm-inline-block btn-link fw-semibold"
                            >
                                <i className="mdi mdi-arrow-left"></i> 이전{' '}
                            </Link>
                        </Col> */}
                        <Col sm={12} className="text-sm-end">
                            <Button variant="primary" type="submit">
                                저장
                            </Button>
                        </Col>
                    </Row>
                </form>
            </Col>
        </Row>
    );
};

export default Shipping;
