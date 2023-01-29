import React, {FC} from 'react';
import Navbar from '@/components/Navbar/Navbar';

const Layout: FC = ({children}) => {
    return (
        <>
            <Navbar/>
            <main>{children}</main>
        </>
    );
};

export default Layout;
