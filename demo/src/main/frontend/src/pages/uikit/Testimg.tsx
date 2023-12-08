import { Row, Col, Card, Button, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
import React from 'react';
import profileImg from 'assets/images/users/avatar-1.jpg';
import axios from 'axios';
import { getUsername } from 'utils/getUsername';
import { post } from 'jquery';
import { ImImages } from 'react-icons/im';

// topbar 에 프로필 이미지를위해 꺼내봄
const Testimg = () => {
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
                let aaa = changeC + "";
                if (aaa.indexOf('png', 0) < 15) {

                    setImageCode(aaa.substr(22));
                } else {
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
            let printImage = `data:image/jpeg;base64,${imageCode}`;
            return (
                <>
                    <input
                        type="file"
                        id="profile-upload"
                        accept="image/*"
                        ref={imgRef}
                        // onChange={(e) => {
                        //     if(e.target.files){

                        //         encodeFileToBase64(e.target.files[0]);
                        //     }
                        //   }}
                        onChange={onChangeImg}
                        style={{ display: 'none' }}
                    />
                    <br />
                    <br />
                    {/* 
                    따로 profileimg 분리를 했지만 indextop 에서 이미지 크기 조정이 
                    className accout-user-avartar 속성이 필수로 들어가야해서 따로 추가로넣어둠 
                    */}
                    <label htmlFor='profile-upload'>
                        {printImage && <img key={printImage} className="rounded-circle account-user-avatar  " width="50" height="50" src={printImage} alt="profile" />}
                    </label>
                    
                </>
            );
        } else {
            return '로딩 중...';
        }
    }

    return (
        <>
        
        <span >{GetImage()}</span>
        </>
    );
};

export default Testimg;