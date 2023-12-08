import { useForm, Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import { Row, Col, Button, Card, Table } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import MaskedInput from 'react-text-mask';
import { FormInput, FileUploader } from 'components';
import { countries } from './data';
import { TableRecord } from './types';

const Billing = () => {
    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            name: yup.string().required('Please enter firstname'),
            billing_lastname: yup.string().required('Please enter lastname'),
            billing_email: yup.string().required('Please enter Email address'),
        })
    );


    // table
    const records: TableRecord[] = [
        { id: 1, Name: '나이스', jumin: '770202-2005474', },
        { id: 2, Name: '추가대상자', jumin: '301125-1225684', },
        { id: 3, Name: '추가대상자', jumin: '001005-3448837', },
        { id: 4, Name: '추가대상자', jumin: '190424-4663848', },
        { id: 5, Name: '추가대상자', jumin: '800928-1455576', },
    ];

    const BasicTable = () => {
        return (
            <div>
                <Table className="mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index.toString()}>
                                    <th scope="row">{record.id}</th>
                                    <td>{record.Name}</td>
                                    <td>{record.jumin}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    };

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
    return (
        <Row>
            <Col>
                <form onSubmit={handleSubmit(() => { })}>
                    <Row>
                        <Col md={4}>
                            <FormInput
                                label="이름"
                                type="text"
                                name="name"
                                placeholder="나이스"
                                containerClass={'mb-3'}
                                register={register}
                                key="firstname"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                        <Col md={4}>
                            <FormInput
                                label="주민등록번호"
                                type="text"
                                name="billing_lastname"
                                placeholder="ex)990101-1XXXXXX"
                                containerClass={'mb-3'}
                                register={register}
                                key="lastname"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                        <Col md={4}>
                            <FormInput
                                label="주소"
                                type="text"
                                name="address"
                                placeholder="주소를입력해주세요"
                                containerClass={'mb-3'}
                                register={register}
                                key="address"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className="form-group mb-3">
                                <label className="form-label">핸드폰번호</label>
                                <MaskedInput
                                    mask={[
                                        /[0-9]/,
                                        /\d/,
                                        /\d/,
                                        '-',
                                        /\d/,
                                        /\d/,
                                        /\d/,
                                        /\d/,
                                        '-',
                                        /\d/,
                                        /\d/,
                                        /\d/,
                                        /\d/,
                                    ]}
                                    placeholder="010-1234-5678"
                                    className="form-control"
                                />
                            </div>
                        </Col>
                    </Row>
                </form>
                <form>
                    <Col>
                        <h4 className="mb-2 text-uppercase bg-white p-2">
                            인적공제대상자 추가
                        </h4>
                        <h4 className="mb-3 text-uppercase bg-light p-2">
                            부양가족공제 요건이 맞는 가족만 신청하세요< br /><br />
                            <span className="text-muted font-13">• 소득제한: 연간 소득금액 100만원 이하 (근로소득만있는경우 총급여 500만원 이하)</span>< br />
                            <span className="text-muted font-13">• 나이제한: 60세 이상,20세이하 ※장애인은 연령불문(소득,생계요건 충족)</span><br />
                            <span className="text-muted font-13">• 부녀자: 세법상 총급여가 41,470,588원 이하인 여성근로자 본인만 공제 가능 </span>
                        </h4>
                    </Col>
                    <div>
                        <Row>
                            <Col>
                                <form onSubmit={handleSubmit(() => { })}>
                                    <Row>
                                        <Col md={4}>
                                            <FormInput
                                                label="이름"
                                                type="text"
                                                name="name"
                                                placeholder="나이스"
                                                containerClass={'mb-3'}
                                                register={register}
                                                key="firstname"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col md={4}>
                                            <FormInput
                                                label="주민등록번호"
                                                type="text"
                                                name="billing_lastname"
                                                placeholder="ex)990101-1XXXXXX"
                                                containerClass={'mb-3'}
                                                register={register}
                                                key="lastname"
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col md={4}>
                                            <div className="form-group mb-1">
                                                <label className="form-label">소득자와의 관계</label>
                                                <Select
                                                    isMulti={true}
                                                    options={[
                                                        { value: 'baeuja', label: '배우자' },
                                                        { value: 'sodeugjajiggye', label: '소득자직계존속' },
                                                        { value: 'baeujajiggye', label: '배우자직계존속' },
                                                        { value: 'jiggyebisog', label: '직계비속' },
                                                        { value: 'hyeongjejamae', label: '형제자매' },
                                                        { value: 'witag-adong', label: '위탁아동' },
                                                    ]}
                                                    className="react-select"
                                                    classNamePrefix="react-select"
                                                ></Select>
                                            </div>
                                            <FormInput
                                                label='기본공제대상'
                                                type="checkbox"
                                                name="checkboxsignup"
                                                containerClass={'text-muted'}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <h4 className=" mt-1 mb-1 text-uppercase bg-white p-2">인적공제 정보</h4>
                                        <Col md={4}>
                                            <FormInput
                                                label='추가공제대상'
                                                type="checkbox"
                                                name="checkboxsignup"
                                                containerClass={'mt-2 text-muted'}
                                            />
                                            <div className="form-group mb-3">
                                                {/* <label className="form-label">추가공제대상</label> */}
                                                <Select
                                                    isMulti={true}
                                                    options={[
                                                        { value: 'jang-aein', label: '장애인' },
                                                        { value: 'gyeongloudae', label: '경로우대' },
                                                        { value: 'bunyeoja', label: '부녀자' },
                                                        { value: 'hanbumo', label: '한부모' },
                                                    ]}
                                                    className="react-select"
                                                    classNamePrefix="react-select"
                                                ></Select>
                                            </div>
                                        </Col>
                                        <h4 className=" mt-2 mb-1 text-uppercase bg-white p-2">증빙자료 첨부</h4>
                                        <Col md={12}>
                                            <FileUploader
                                                onFileUpload={(files) => {
                                                    console.log(files);
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Col sm={12} className="text-sm-end mt-3">
                                        <Button variant="primary" type="submit">
                                            추가
                                        </Button>
                                    </Col>
                                </form>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h4 className="mb-2 text-uppercase bg-white p-2">
                            인적공제 확인
                        </h4>
                        <Row>
                            <Col xl={12}>
                                <BasicTable />
                            </Col>
                        </Row>
                    </div>
                    <Col sm={12} className="text-sm-end mt-4">
                        <Button variant="primary" type="submit">
                            저장
                        </Button>
                    </Col>
                </form>
            </Col>
        </Row>
    );
};



export default Billing;
