import {FC} from 'react';
import {Flex} from '@chakra-ui/react';

import AuthButtons from '@/components/Navbar/RightContent/AuthButtons';
import AuthModal from '@/components/Modal/Auth/AuthModal';


const RightContent: FC = () => {
    return (
        <>
            <AuthModal/>
            <Flex justify="center" align="center">
                <AuthButtons/>
            </Flex>
        </>
    );
};

export default RightContent;
