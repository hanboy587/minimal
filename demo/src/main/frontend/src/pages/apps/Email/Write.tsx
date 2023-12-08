import { Row, Col, Card, Dropdown, ButtonGroup, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useToggle } from 'hooks';
import LeftSide from './LeftSide';
import { useInbox } from './hooks';
import { useEffect, useState } from 'react';
import Editor from './Editor';
import { FormInput } from 'components';
import { SlPlus } from "react-icons/sl";
import useComposeMail2 from './hooks/useComposeMail2';
import { getUsername } from 'utils/getUsername';
import { getUserid } from 'utils/getUserid';
import axios from 'axios';
import SimpleMDEReact, { SimpleMDEReactProps } from 'react-simplemde-editor';
import { marked } from "marked";
import ReactMarkdown from 'react-markdown';
import { editorMarkdown } from 'utils/editorMarkdown';


const Write = () => {
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

    // 참조
    const [ccInput, setCcInput] = useState(false);
    const handleCcClick = () => {
        setCcInput(!ccInput);
    };
    // 숨은참조
    const [bccInput, setBccInput] = useState(false);
    const handleBccClick = () => {
        setBccInput(!bccInput);
    };
    // 서명
    const [seomyeong, setSeomyeong] = useState(false);
    const handleseomyeong = () => {
        setSeomyeong(!seomyeong);
    }

    const { editorState, schemaResolver, onEditorStateChange } = useComposeMail2();
    const [formData, setFormData] = useState({
        file: '',
        email: '',
        message: '',
        requestUser: '',
        title: '',
        requestUserId: ''
    });

    const [selectedFile, setSelectedFile] = useState<any>(null);

    const handleFileInput = (e: any) => {
        setSelectedFile(e.target.files[0]);
    }

    
    function converContent(content:any) {
        return <ReactMarkdown>{content}</ReactMarkdown>;
    }
    const handleEmailSave2 = (event: any) => {
        event.preventDefault();


        const { file, email, message, requestUser, title, requestUserId } = formData;
        const formDataToSend = new FormData();
        formDataToSend.append('files', selectedFile);
        formDataToSend.append('email', email);
        formDataToSend.append('message', content);
        formDataToSend.append('requestUser', getUsername());
        formDataToSend.append('requestUserId', getUserid());
        formDataToSend.append('title', title);

        axios.post('https://email.rba.kr/mail', formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(res => {
                console.log('mail axios 내부 :::', res)
                window.location.href ="/apps/email/Complete";
            })
            .catch(er => (
                console.log('mail axios catch :::', er)
            ))
    }
    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };


    //에디터 테스트
    const [content, setContent] = useState<any>('');

    function MarkdownEditor() {
        const [markdown, setMarkdown] = useState('');
      
        const handleEditorChange = (value:any) => {
          setMarkdown(value);
        };
      
        return (
          <div>
            <SimpleMDEReact onChange={handleEditorChange} value={markdown} />
      
            <h3>Preview:</h3>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        );
      }

    const delay = 1000;
    const options: SimpleMDEReactProps['options'] = {
        autosave: {
            enabled: true,
            uniqueId: '1',
            delay,
        },
    };

    const handleEditorChange = (value:any) => {
        setContent(value);
      };

    useEffect(() => {
        console.log('content :::: ', marked(content));
        console.log('markdown :: ', editorMarkdown(content))
    },[content])
      
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
                            {/* <form onSubmit={handleEmailSave2}>
                                <input type='text' id='title' name='title' placeholder='제목' value={formData.title} onChange={handleInputChange} />
                                <input type='text' id='email' name='email' placeholder='이메일주소' value={formData.email} onChange={handleInputChange} />
                                <input type='text' id='message' name='message' placeholder='내용' value={formData.message} onChange={handleInputChange} />
                                <input type='file' id='file' name='file' onChange={handleFileInput} />
                                    <Button type="submit">Submit</Button>
                            </form> */}
                            <form onSubmit={handleEmailSave2}>

                                <div className="page-aside-right">
                                    <div>
                                        {/* <Link to="/apps/email/Complete" className="">
                                        </Link> */}
                                            <Button type='submit' variant='outline-primary'>보내기</Button>
                                        {/* <Button type='submit' variant='outline-primary'>보내기</Button> */}
                                    </div>
                                    <div className="border-bottom px-8 mt-2">
                                        <div> 보내는사람
                                            <span style={{ display: "inline-block", width: "90%" }}>
                                                <input
                                                    className='form-control form-control-transparent border-0'
                                                    type="text" name=""
                                                    style={{ width: "100%" }}
                                                />
                                                {/* <input type="text" className="form-control form-control-transparent border-0" style={{ width: "100%" }}></input> */}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-bottom px-8 mt-2">
                                        <div> 받는사람
                                            <Button className="mb-1" variant='link' style={{ padding: "0px", boxShadow: "none", outline: "none" }}>
                                                <SlPlus onClick={() => { handleCcClick(); handleBccClick(); }} />
                                            </Button>
                                            <span style={{ display: "inline-block", width: "90%", }}>
                                                <input
                                                    className='form-control form-control-transparent border-0'
                                                    type='text'
                                                    id='email'
                                                    name='email'
                                                    placeholder='이메일주소'
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    style={{ width: "100%" }}
                                                />
                                                {/* <input type="text" name="email" value={formData.email}></input> */}
                                            </span>
                                        </div>
                                    </div>
                                    {ccInput && (
                                        <div className="border-bottom px-8 mt-2">
                                            <div>참 조:
                                                <span style={{ display: "inline-block", width: "90%" }}>
                                                    <FormInput
                                                        className='form-control form-control-transparent border-0'
                                                        type="text" name=""
                                                        style={{ width: "100%" }}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                    {bccInput && (
                                        <div className="border-bottom px-8 mt-2">
                                            <div>숨은참조:
                                                <span style={{ display: "inline-block", width: "90%" }}>
                                                    <FormInput
                                                        className='form-control form-control-transparent border-0'
                                                        type="text" name=""
                                                        style={{ width: "100%" }}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                    <div className="border-bottom px-8 mt-2">
                                        <div> 제 목:
                                            <span style={{ display: "inline-block", width: "90%" }}>
                                                <input
                                                    className='form-control form-control-transparent border-0'
                                                    type='text'
                                                    id='title'
                                                    name='title'
                                                    placeholder='제목'
                                                    value={formData.title}
                                                    onChange={handleInputChange}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-bottom px-8 mt-2 mb-3">
                                        <input className="mb-2" type="checkbox" style={{ marginLeft: "5px" }} onClick={handleseomyeong}></input> 서명 &nbsp;
                                        {seomyeong && (
                                            <span style={{ display: "inline-block", width: "10%" }}>
                                                <FormInput className='form-select mb-1' type="select" name="" style={{ width: "100%" }}>
                                                    <option>서명1</option>
                                                </FormInput>
                                            </span>
                                        )}
                                    </div>
                                    <div className="mb-2">
                                        <input type='file' id='file' name='file' onChange={handleFileInput} />
                                    </div>
                                    <div className="mb-2">
                                        <SimpleMDEReact id={'1'} onChange={handleEditorChange} value={content}/>
                                        <ReactMarkdown>{content}</ReactMarkdown>

                                        <MarkdownEditor/>
                                          
                                        {/* <input 
                                        className='form-control form-control-transparent border-0'
                                        type='text' 
                                        id='message' 
                                        name='message' 
                                        placeholder='내용' 
                                        value={formData.message} 
                                        onChange={handleInputChange} 
                                     /> */}
                                    </div>
                                    <div className="d-none">
                                        <Editor />
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Write;