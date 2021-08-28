import styled from 'styled-components';
import { Link } from 'react-router-dom';
import image from '../images/carRepair2.jpg';


export const EntryPage = styled.div`
display: flex;
align-items: center;
flex-direction: column;
min-height: 100vh;
// background-color: #a6abb1;
background-image: url(${image});
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
`;

export const PageHeader = styled(Link)`
font-size: 2rem;
font-weight: 600;
margin: 40px 0;
color: white;
text-decoration: none;
`;

