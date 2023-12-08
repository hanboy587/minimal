import { Row, Col, Card } from 'react-bootstrap';
import classNames from 'classnames';
import { PageTitle, FormInput, } from 'components';
import { useForm } from 'react-hook-form';


// 전자세금계산서 거래처정보 개인

const Avatars = () => {

    const methods = useForm({
        defaultValues: {
            password: '12345',
            statictext: 'email@example.com',
            color: '#727cf5',
        },
    });
    
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;


    return (
        <>
            <PageTitle
                breadCrumbItems={[

                ]}
                title={''}
            />
            <Row>
                <Col xl={6}>
                    <form onSubmit={handleSubmit(() => { })}>
                        <FormInput
                            label="등록번호 *"
                            type="number"
                            name="text"
                            containerClass={'mb-3'}
                            register={register}
                            key="text"
                            errors={errors}
                            control={control}
                        />
                    </form>
                </Col>
                <Col xl={6}>
                    <form onSubmit={handleSubmit(() => { })}>
                        <FormInput
                            label="상호 *"
                            type="text"
                            name="text"
                            containerClass={'mb-3'}
                            register={register}
                            key="text"
                            errors={errors}
                            control={control}
                        />
                    </form>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <form onSubmit={handleSubmit(() => { })}>
                        <FormInput
                            label="성명 *"
                            type="text"
                            name="text"
                            containerClass={'mb-3'}
                            register={register}
                            key="text"
                            errors={errors}
                            control={control}
                        />
                    </form>
                </Col>
                <Col xl={6}>
                    <form onSubmit={handleSubmit(() => { })}>
                        <FormInput
                            label="사업장"
                            type="text"
                            name="text"
                            containerClass={'mb-3'}
                            register={register}
                            key="text"
                            errors={errors}
                            control={control}
                        />
                    </form>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <form onSubmit={handleSubmit(() => { })}>
                        <FormInput
                            label="업태"
                            type="text"
                            name="text"
                            containerClass={'mb-3'}
                            register={register}
                            key="text"
                            errors={errors}
                            control={control}
                        />
                    </form>
                </Col>
                <Col xl={6}>
                    <form onSubmit={handleSubmit(() => { })}>
                        <FormInput
                            label="종목"
                            type="text"
                            name="text"
                            containerClass={'mb-3'}
                            register={register}
                            key="text"
                            errors={errors}
                            control={control}
                        />
                    </form>
                </Col>
            </Row>

        </>
    );
};

export default Avatars;
