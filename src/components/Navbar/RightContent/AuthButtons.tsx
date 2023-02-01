import {Button} from '@chakra-ui/react';
import {FC} from 'react';
import {useSetRecoilState} from 'recoil';
import {authModalState} from '@/atoms/authModalAtom';

const AuthButtons: FC = () => {
    const setAuthModalState = useSetRecoilState(authModalState);

    const handleOpenLoginModal = () => {
        setAuthModalState({open: true, view: 'login'});
    };

    const handleOpenSignUpModal = () => {
        setAuthModalState({open: true, view: 'signup'});
    };

    return (
        <>
            <Button
                variant="outline"
                height="28px"
                display={{base: 'none', sm: 'flex'}}
                width={{base: '70px', md: '110px'}}
                mr={2}
                onClick={handleOpenLoginModal}
            >
                Log In
            </Button>
            <Button
                height="28px"
                display={{base: 'none', sm: 'flex'}}
                width={{base: '70px', md: '110px'}}
                mr={2}
                onClick={handleOpenSignUpModal}
            >
                Sign Up
            </Button>
        </>
    );
};

export default AuthButtons;
