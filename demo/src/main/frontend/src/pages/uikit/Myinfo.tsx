import { Row, Col, Card, Button, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
import React from 'react';
import profileImg from 'assets/images/users/avatar-1.jpg';
import axios from 'axios';
import { getUsername } from 'utils/getUsername';
import { post } from 'jquery';
import { ImImages } from 'react-icons/im';


// 내프로필
const Myinfo = () => {
    //이름
    const [realname, setRealname] = useState('');
    useEffect(() => {
        var data: any = sessionStorage.getItem('hyper_user');
        setRealname(JSON.parse(data).realname);
    }, []);

    // 이메일
    const [username, setUsername] = useState('');
    useEffect(() => {
        var data: any = sessionStorage.getItem('hyper_user');
        setUsername(JSON.parse(data).username);
    }, []);

    // 핸드폰번호
    const [phonenumber, setPhonenumber] = useState('');
    useEffect(() => {
        var data: any = sessionStorage.getItem('hyper_user');
        setPhonenumber(JSON.parse(data).phonenumber);
    }, []);

    // point
    const [freecoin, setFreecoin] = useState('1000');

    // 프로필이미지수정
    const [fileImage, setFileImage] = useState('');

    // ---프로필이미지 임시부분
    const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setFileImage(URL.createObjectURL(event.target.files[0]));
    };
    const deleteFileImage = () => {
        URL.revokeObjectURL(fileImage);
        setFileImage('');
    };
    //---------
    
    const [imageCode, setImageCode] = useState<any>(null);
    const imgRef = useRef<any>();

    // 프로필이미지 보내기
    const onChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        console.log('axios 버튼 클릭');

        if (e.target.files) {
            const uploadFile = e.target.files[0];
            const formData = new FormData();
            const file = imgRef.current.files[0];

            
            formData.append('files', uploadFile);
            formData.append('username', username);

            await axios({
                method: 'post',
                url: '/profile/image',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
                
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onloadend = () => {
                    let changeC = fileReader.result;
                    let aaa = changeC+"";
                    if(aaa.indexOf('png',0) < 15){

                        setImageCode(aaa.substr(22));
                    }else{
                        setImageCode(aaa.substr(23));
                        
                    }
                    
                    console.log("이미지주소", aaa);
                  };
        }
    };

    // 이미지 업로드 axios & img 태그 클릭 시 input file 속성
    // const inputRef = useRef<HTMLInputElement | null>(null);
    function GetImage() {
        const username = getUsername();
        
        useEffect(() => {
            const fetchData = async () => {
                await axios.get('/profile/image', { params: { username: username } }).then((res) => {
                    setImageCode(res.data);
                });
                
            };
            fetchData();
        }, []);

        // const onUploadImageButtonClick = useCallback(() => {
        //     if (!inputRef.current) {
        //         return;
        //     }
        //     inputRef.current.click();
        // }, []);

        // const encodeFileToBase64 = (fileBlob: any) => {
            
        //     const reader = new FileReader();
        //     reader.readAsDataURL(fileBlob);
        //     return new Promise<void>((resolve) => {
        //       reader.onload = () => {
        //         setImageCode(reader.result);
        //         resolve();
        //       };
        //     });
        //   };

        if (imageCode) {
            // let printImage = `data:image/jpeg;base64,${imageCode}`;
            // console.log('axios.get : ', imageCode);
            // return (
            //     <>
            //         <input
            //             type="file"
            //             id="profile-upload"
            //             accept="image/*"
            //             ref={imgRef}
            //             // onChange={(e) => {
            //             //     if(e.target.files){

            //             //         encodeFileToBase64(e.target.files[0]);
            //             //     }
            //             //   }}
            //             onChange={onChangeImg}
            //             style={{ display: 'none' }}
            //         />
            //         <br />
            //         <br />
            //         <label htmlFor='profile-upload'>
            //             {printImage && <img key={printImage} className="rounded-circle" width="100" height="100" src={printImage} />}
            //         </label>
            //     </>
            // );
        } else {
            return '로딩 중...';
        }
    }

    return (
        <>
            <Row>
                <Card className="text-center">
                    <Card.Body>
                        {/* axios 이미지  */}
                        {/* <form >
                            <label htmlFor='profile-upload' />

                            {GetImage()}

                            {/* {GetList2} */}

                        {/* <img src={profileImg} className="rounded-circle avatar-lg img-thumbnail" alt="" /> */}
                        {/* 임시 --- */}
                        {/* <div>
                            {fileImage && (<img alt="sample" src={fileImage}
                                className="rounded-circle avatar-lg img-thumbnail"
                                style={{ margin: "auto" }} />)
                            }
                        </div>
                        <div
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                            }} >
                            <input
                                name="imggeUpload"
                                type="file"
                                accept="image/*"
                                onChange={saveFileImage} />
                            <button style={{
                                width: "50px",
                                height: "30px",
                                cursor: "pointer",
                            }}
                                onClick={() => deleteFileImage()} > 삭제 </button>
                        </div> */}
                        <div>{GetImage()}</div>
                        <h4 className="mt-2">{realname}</h4>
                        <div className="text-start mb-2 mt-3">
                            <p className="text-muted mb-2" style={{ fontSize: '18px' }}>
                                <strong>포인트 :</strong>
                                <span className="ms-2">
                                    {freecoin}&nbsp;&nbsp;<strong style={{ color: 'blue' }}>Point</strong>
                                </span>
                            </p>
                        </div>
                        <div className="text-start mb-2">
                            <p className="text-muted mb-2" style={{ fontSize: '18px' }}>
                                <strong>이메일 : </strong>
                                <span>{username}</span>
                            </p>

                            <p className="text-muted mb-2" style={{ fontSize: '18px' }}>
                                <strong>핸드폰 :</strong>
                                <span className="ms-2">{phonenumber}</span>
                            </p>
                        </div>
                        <div className="text-start mb-2">
                            <Row>
                                <Col md={4}>
                                    <p className="text-muted mb-2" style={{ fontSize: '18px' }}>
                                        <strong>소속 :</strong>
                                        <span className="ms-2">인사팀</span>
                                    </p>
                                </Col>
                                <Col md={4}>
                                    <p className="text-muted mb-2" style={{ fontSize: '18px' }}>
                                        <strong>직급 :</strong>
                                        <span className="ms-2">대리</span>
                                    </p>
                                </Col>
                                <Col md={4}>
                                    <p className="text-muted mb-2" style={{ fontSize: '18px' }}>
                                        <strong>직책 :</strong>
                                        <span className="ms-2">팀원</span>
                                    </p>
                                </Col>
                            </Row>
                            {/* <p className="text-muted mb-2" style={{ fontSize: "18px" }}>
                                <strong>소속 :</strong>
                                <span className="ms-2">인사팀</span>
                            </p>
                            <p className="text-muted mb-2" style={{ fontSize: "18px" }}>
                                <strong>직급 :</strong>
                                <span className="ms-2">대리</span>
                            </p>
                            <p className="text-muted mb-2" style={{ fontSize: "18px" }}>
                                <strong>직책 :</strong>
                                <span className="ms-2">팀원</span>
                            </p> */}
                        </div>
                    </Card.Body>
                </Card>
            </Row>
        </>
    );
};

export default Myinfo;
function changeCode() {
    throw new Error('Function not implemented.');
}

