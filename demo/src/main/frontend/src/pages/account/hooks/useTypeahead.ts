import { useState } from 'react';
import 'react-bootstrap-typeahead/css/Typeahead.css';

type TypeaheadOption = string | Record<string, Object>;

export default function useTypeahead() {
    const [singleSelections, setSingleSelections] = useState<TypeaheadOption[]>([]);
    const [multiSelections, setMultiSelections] = useState<TypeaheadOption[]>([]);

    const options: Array<TypeaheadOption> = [
        { id: 1, value: 'kakao', label: '카카오' },
        { id: 2, value: 'naver', label: '네이버' },
        { id: 3, value: 'google', label: '구글' },
    ];

    const onChangeSingleSelection = (selected: TypeaheadOption[]) => {
        setSingleSelections(selected);
    };

    const onChangeMultipleSelection = (selected: TypeaheadOption[]) => {
        setMultiSelections(selected);
    };

    return {
        options,
        singleSelections,
        multiSelections,
        onChangeSingleSelection,
        onChangeMultipleSelection,
    };
}
