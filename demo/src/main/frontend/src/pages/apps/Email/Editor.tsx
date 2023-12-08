import { Row, Col, Card } from 'react-bootstrap';
import SimpleMDEReact, { SimpleMDEReactProps } from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { PageTitle } from 'components';

const Editor = () => {
    const delay = 1000;
    const options: SimpleMDEReactProps['options'] = {
        autosave: {
            enabled: true,
            uniqueId: '1',
            delay,
        },
    };

    return (
        <>
            <Row>
                <SimpleMDEReact id={'1'} options={options} />
            </Row>
        </>
    );
};

export default Editor;
