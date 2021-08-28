import React from 'react';
import Team from './Team';
import HeaderWord from '../HomePage/HeaderWord';
import HeaderText from '../HomePage/HeaderText';
import './css/teamPage.css'
import { SectionTitle } from '../HomePage/HomePage';

const TeamPage = () => {
    return (
    <>
        <body className="ServiceBackground">
            <div className="HeaderContainer">
                <HeaderText text1="Team" text2=""/>
                <HeaderWord text="Meet our talented team of Engineers"/>
            </div>
        </body> 
        <SectionTitle text1='Our' text2='Team'/>
        <Team />
        
    </>
    )
}

export default TeamPage
