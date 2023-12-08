import { Row, Col, Button, Modal } from 'react-bootstrap';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { VerticalForm, FormInput } from 'components';
import { useComposeMail } from './hooks';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

type ComposeMailProps = {
    isModalOpen: boolean;
    toggleComposeModal: () => void;
};

const ComposeMail = ({ isModalOpen, toggleComposeModal }: ComposeMailProps) => {
    const { editorState, schemaResolver, handleEmailSave, onEditorStateChange } = useComposeMail(toggleComposeModal);
    const [title, setTitle] = useState('');

    

    return (
        <Modal show={isModalOpen} onHide={toggleComposeModal}>
            <Modal.Header closeButton onHide={toggleComposeModal} className="modal-colored-header bg-primary">
                <Modal.Title className="m-0">메일쓰기</Modal.Title>
            </Modal.Header>
            <div className="p-1">
                <Modal.Body className="px-3 pt-3 pb-0">
                    <VerticalForm onSubmit={handleEmailSave} resolver={schemaResolver}>
                        <FormInput
                            label="받는사람"
                            type="text"
                            name="to"
                            placeholder="nice@nice.com"
                            containerClass={'mb-2'}
                        />
                        <FormInput
                            label="제목"
                            type="text"
                            name="subject"
                            placeholder="제목을 입력해 주세요"
                            containerClass={'mb-2'}
                        />
                        
                        <Row className="mb-3">
                            <Col>
                                <label className="form-label">내용</label>
                                <Editor
                                    editorState={editorState}
                                    onEditorStateChange={onEditorStateChange}
                                    toolbarClassName="draft-toolbar"
                                    wrapperClassName="react-draft-wrapper border border-1 rounded-1"
                                    editorStyle={{ minHeight: '150px' }}
                                    toolbar={{
                                        options: ['inline', 'fontSize', 'fontFamily', 'list', 'textAlign', 'link'],
                                        inline: { inDropdown: true },
                                        list: { inDropdown: true },
                                        textAlign: { inDropdown: true },
                                        link: { inDropdown: true },
                                    }}
                                />
                            </Col>
                            <FormInput
                            label='파일 첨부'
                            type='file'
                            name='file'
                            />
                        </Row>
                        <div className="pb-3">
                            <Button variant="primary" type="submit" className="me-1">
                                <i className="mdi mdi-send me-1"></i> 보내기
                            </Button>
                            <Button variant="light" onClick={toggleComposeModal}>
                                취소
                            </Button>
                        </div>
                    </VerticalForm>
                </Modal.Body>
            </div>
        </Modal>
    );
};

export default ComposeMail;
