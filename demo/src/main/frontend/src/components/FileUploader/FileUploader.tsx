import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import Dropzone2 from 'react-dropzone';
import useFileUploader from './useFileUploader';
import useFileUploader2 from './useFileUploader';


export type FileType = File & {
    preview?: string;
    formattedSize?: string;
};

type FileUploaderProps = {
    onFileUpload?: (files: FileType[]) => void;
    showPreview?: boolean;
};


export type FileType2 = File & {
    preview?: string;
    formattedSize?: string;
};

type FileUploaderProps2 = {
    onFileUpload?: (files: FileType2[]) => void;
    showPreview?: boolean;
};

// 기본
const FileUploader = ({ showPreview = true, onFileUpload }: FileUploaderProps) => {
    const { selectedFiles, handleAcceptedFiles, removeFile } = useFileUploader(showPreview);

    return (
        <>
            <Dropzone onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles, onFileUpload)}>
                {({ getRootProps, getInputProps }) => (
                    <div className="dropzone" style={{height:'5px'}} >
                        <div className="dz-message needsclick" {...getRootProps()}>
                            <input {...getInputProps()} />
                            <i className="h3 text-muted dripicons-cloud-upload"></i>
                            <h5>파일을 끌어오세요</h5>
                        </div>
                    </div>
                )}
            </Dropzone>

            {showPreview && selectedFiles.length > 0 && (
                <div className="dropzone-previews mt-3" id="uploadPreviewTemplate">
                    {(selectedFiles || []).map((f, i) => {
                        return (
                            <Card className="mt-1 mb-0 shadow-none border" key={i + '-file'}>
                                <div className="p-2">
                                    <Row className="align-items-center">
                                        {f.preview && (
                                            <Col className="col-auto">
                                                <img
                                                    data-dz-thumbnail=""
                                                    className="avatar-sm rounded bg-light"
                                                    alt={f.name}
                                                    src={f.preview}
                                                />
                                            </Col>
                                            
                                        )}
                                        {!f.preview && (
                                            <Col className="col-auto">
                                                <div className="avatar-sm">
                                                    <span className="avatar-title bg-primary rounded">
                                                        {f.type.split('/')[0]}
                                                    </span>
                                                </div>
                                            </Col>
                                        )}
                                        <Col className="ps-0">
                                            <Link to="#" className="text-muted fw-bold">
                                                {f.name}
                                            </Link>
                                            <p className="mb-0">
                                                <strong>{f.formattedSize}</strong>
                                            </p>
                                        </Col>
                                        <Col className="text-end">
                                            <Link to="#" className="btn btn-link btn-lg text-muted shadow-none">
                                                <i className="dripicons-cross" onClick={() => removeFile(f)}></i>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            )}
        </>
    );
};

// 입사서류 직접등록

const FileUploader2 = ({ showPreview = true, onFileUpload }: FileUploaderProps2) => {
    const { selectedFiles, handleAcceptedFiles, removeFile } = useFileUploader(showPreview);

    return (
        <>
            <Dropzone2 onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles, onFileUpload)}>
                {({ getRootProps, getInputProps }) => (
                    <div className="dropzone2" style={{height:'5px'}} >
                        <div className="dz-message2 needsclick" {...getRootProps()}>
                            <input {...getInputProps()} />
                            <i className="h3 text-muted dripicons-cloud-upload"></i>
                            <h5>클릭하여 파일을 올려주세요</h5>
                        </div>
                    </div>
                )}
            </Dropzone2>

            {showPreview && selectedFiles.length > 0 && (
                <div className="dropzone-previews mt-3" id="uploadPreviewTemplate">
                    {(selectedFiles || []).map((f, i) => { 
                        return (
                            <Card className="mt-1 mb-0 shadow-none border" key={i + '-file'}>
                                <div className="p-2">
                                    <Row className="align-items-center">
                                        {f.preview &&(
                                            <Col className="col-auto">
                                                <img
                                                    data-dz-thumbnail=""
                                                    className="avatar-sm rounded bg-light"
                                                    alt={f.name}
                                                    src={f.preview}
                                                />
                                            </Col>
                                        ) }
                                        {!f.preview && (
                                            <Col className="col-auto">
                                                <div className="avatar-sm">
                                                    <span className="avatar-title bg-primary rounded">
                                                        {f.type.split('/')[0]}
                                                    </span>
                                                </div>
                                            </Col>
                                        )}
                                        <Col className="ps-0">
                                            <Link to="#" className="text-muted fw-bold">
                                                {f.name}
                                            </Link>
                                            <p className="mb-0">
                                                <strong>{f.formattedSize}</strong>
                                            </p>
                                        </Col>
                                        <Col className="text-end">
                                            <Link to="#" className="btn btn-link btn-lg text-muted shadow-none">
                                                <i className="dripicons-cross" onClick={() => removeFile(f)}></i>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            )}
        </>
    );
};

// 파일확장자
const fileExtension = "image/gif, image/jpg, image/jpeg, image/png, .pdf, .tif, .tiff";



// fax 용
const FileUploader3 = ({ showPreview = true, onFileUpload }: FileUploaderProps) => {
    const { selectedFiles, handleAcceptedFiles, removeFile } = useFileUploader(showPreview);

    // alert code
    // const test=()=>{
    //     if (fileExtension == fileExtension) {
    //         null
    //     } else {
    //         alert("인증 실패")
    //     }
    // };

    
    return (
        <>
            <Dropzone onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles, onFileUpload)} accept={fileExtension}>
                {({ getRootProps, getInputProps }) => (
                    <div className="dropzone" style={{height:'5px'}} >
                        <div className="dz-message needsclick" {...getRootProps()}>
                            <input {...getInputProps()} />
                            <i className="h3 text-muted dripicons-cloud-upload"></i>
                            <h5>파일을 끌어오세요</h5>
                        </div>
                    </div>
                )}
            </Dropzone>

            {showPreview && selectedFiles.length > 0 && ( 
                <div className="dropzone-previews mt-3" id="uploadPreviewTemplate">
                    {(selectedFiles || []).map((f, i) => {  

                        return (
                            <Card className="mt-1 mb-0 shadow-none border" key={i + '-file'}>
                                <div className="p-2">
                                    <Row className="align-items-center">
                                        {f.preview && (
                                            <Col className="col-auto">
                                                <img
                                                    data-dz-thumbnail=""
                                                    className="avatar-sm rounded bg-light"
                                                    alt={f.name}
                                                    src={f.preview}
                                                    
                                                />
                                            </Col>
                                        )}
                                        {!f.preview && (
                                            <Col className="col-auto">
                                                <div className="avatar-sm">
                                                    <span className="avatar-title bg-primary rounded">
                                                        {f.type.split('/')[0]}
                                                    </span>
                                                </div>
                                            </Col>
                                        )}
                                        <Col className="ps-0">
                                            <Link to="#" className="text-muted fw-bold">
                                                {f.name}
                                            </Link>
                                            <p className="mb-0">
                                                <strong>{f.formattedSize}</strong>
                                            </p>
                                        </Col>
                                        <Col className="text-end">
                                            <Link to="#" className="btn btn-link btn-lg text-muted shadow-none">
                                                <i className="dripicons-cross" onClick={() => removeFile(f)}></i>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export { FileUploader, FileUploader2, FileUploader3 };
