import { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { getUsername } from 'utils/getUsername';
import axios from 'axios';
export default function useComposeMail2() {
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            to: yup.string().required('Please specify to email').email('Please enter valid Email'),
            subject: yup.string().required('Please specify subject'),
        })
    );

    /**
     * Handles the save
     * @param {*} event
     * @param {*} values
     */
    const handleEmailSave = (value: Record<string, string>) => {
        const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));

        const parser = new DOMParser();
        const htmlString = stateToHTML(editorState.getCurrentContent());
        const htmlBlob = new Blob([htmlString], { type: 'text/html' });

        console.log(':::::::::::', htmlBlob);

        const formData = new FormData();
        formData.append('email', value.to);
        formData.append('file', value.file);
        formData.append('message', body);
        formData.append('requestUser', getUsername());
        formData.append('title', value.subject);

        console.log('메일 formData ::::', parser.parseFromString(body, "text/html"));
        console.log('메일 formData ::::', formData);

        axios.post('https://email.rba.kr/mail', formData, {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => (
                console.log('mail axios 내부 :::', res)
            ))
            .catch(er => (
                console.log('mail axios catch :::', er)
            ))

        console.log('handleEmailSave Data ::::: ', formData);
        console.log('handleEmailSave Send ::::: ', formData);
    };

    /**
     * On editor body change
     */
    const onEditorStateChange = (editorStates: EditorState) => {
        setEditorState(editorStates);
    };

    return {
        editorState,
        schemaResolver,
        handleEmailSave,
        onEditorStateChange,
    };
}
