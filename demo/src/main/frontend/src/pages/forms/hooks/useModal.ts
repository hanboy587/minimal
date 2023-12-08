import { useToggle } from 'hooks';
import { useState } from 'react';

export default function useModal() {
    const [isOpen, toggleModal] = useToggle();

    const [size, setSize] = useState<'sm' | 'lg' | 'xl'>();
    const [className, setClassName] = useState<string>('');
    const [scroll, setScroll] = useState<boolean>(false);

    const [isOpen100, toggleModal2] = useToggle();

    const [size2, setSize2] = useState<'sm' | 'lg' | 'xl'>();
    const [className2, setClassName2] = useState<string>('');
    const [scroll2, setScroll2] = useState<boolean>(false);


    // Opens large modal
    const openModalWithSize = (size: 'sm' | 'lg' | 'xl') => {
        setSize(size);
        setClassName('');
        setScroll(false);
        toggleModal();
    };

    // Opens modal with custom class
    const openModalWithClass = (className: string) => {
        setClassName(className);
        setScroll(false);
        toggleModal();
    };

    // Opens large modal
    const openModalWithScroll = () => {
        setScroll(true);
        setSize('sm');
        setClassName('');
        toggleModal();
    };
    
        // toggleModal2 

     // Opens large modal
     const openModalWithSize2 = (size2: 'sm' | 'lg' | 'xl') => {
        setSize2(size2);
        setClassName2('');
        setScroll2(false);
        toggleModal2();
    };

    // Opens modal with custom class
    const openModalWithClass2 = (className2: string) => {
        setClassName2(className2);
        setScroll2(false);
        toggleModal2();
    };

    // Opens large modal
    const openModalWithScroll2 = () => {
        setScroll2(true);
        setSize2('sm');
        setClassName2('');
        toggleModal2();
    };

    return {
        isOpen,
        size,
        className,
        scroll,

        isOpen100,
        size2,
        className2,
        scroll2,

        toggleModal,
        openModalWithSize,
        openModalWithClass,
        openModalWithScroll,

        toggleModal2,
        openModalWithSize2,
        openModalWithClass2,
        openModalWithScroll2,
    };
}
