import {FC} from 'react';
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from '@chakra-ui/modal';
import {useRecoilState} from 'recoil';
import {authModalState} from '@/atoms/authModalAtom';

const AuthModal: FC = () => {
    const [modalState, setModalState] = useRecoilState(authModalState);

    const handleClose = () => {
        setModalState(prev => ({
            ...prev,
            open: false
        }));
    };

    return (
        <>
            <Modal isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        Here is the modal body
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AuthModal;
