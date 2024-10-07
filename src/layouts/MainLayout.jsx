import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';
import { MainWrapper } from './MainLayout.styled';
import Footer from '../component/Footer/Footer';
import FloatButton from '../component/FloatButton/FloatButton';

const MainLayout = () => {
    return (
        <>
            <MainWrapper>
                <Header/>
                
                <main>
                    <Outlet />
                </main>

                <FloatButton/>

                <Footer/>
            </MainWrapper>
        </>
    )
}

export default MainLayout;