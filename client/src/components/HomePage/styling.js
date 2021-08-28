import styled, { keyframes } from 'styled-components'
import image2 from '../images/carRepair.jpg'

export const Background= styled.body`
height: 100vh;
width:100%;
background-color:#3066d5;
`
export const HeaderImages= styled.img`
height: 100vh;
width:100%;
box-shadow: rgb(0 0 0 / 50%) 0px 0px 0px 2000px inset;
`
export const Background3 = styled.body`
position:relative;
background-image: url(${image2});
background-size:cover;
background-repeat: no-repeat;
height: 100vh;
width:100%;
 box-shadow:inset  0 0 0 2000px rgba(39, 80, 164, 0.4);

`
export const HeaderTextContainer = styled.h1`
position: absolute;
top: 250px;
left: 150px;
margin: 0 50px;
animation: 1s slide-up;
@keyframes slide-up{
  from{
     margin-top: 3%;
  }
  to{
    margin-top: 0%;
  }
}
@media (max-width: 1000px) {
  top: 250px;
left: 70px;
  }
  @media (max-width: 650px) {
    top: 150px;
  left: 30px;
    }
`


export const HeaderText = styled.h1`
text-transform: capitalize;
`
export const HeaderText2 = styled.h5`
margin: 35px 0;
`

export const SlideControl = styled.button`
position: absolute;
border-style: none;
top: 320px;
left: 45px;
padding: 15px;
background-color:black;
opacity:0.5;
text-align:center;
&:hover{
  background-color:white;
  color:blue;
  opacity:1;
}
@media (max-width: 1200px) {
  left: 5px;

  }
  @media (max-width: 650px) {
    top: 180px;
    padding: 15px;
    }
`


export const SlideControl2 = styled.button`
position: absolute;
border-style: none;
top: 320px;
right: 45px;
background-color:black;
opacity:0.5;
text-align:center;
padding: 15px;
&:hover{
  background-color:white;
  opacity:1;
}
@media (max-width: 1200px) {
  right: 15px;
  }
  @media (max-width: 650px) {
    top: 180px;
    padding: 15px;
    }

`
export const Action1 = styled.div`
width: 160px;
padding: 15px 10px;
background-color:white;
margin: 50px 0;
color:black;
font-size:14px;
cursor: pointer;
a {
    text-decoration: none;
    color:black;
}
&:hover{
  background-color:#082665; 
  color:white;
}
`
export const Action2 = styled.div`
width: 160px;
padding: 15px 10px;
background-color:white;
color:white;
font-size:14px;
margin: 40px auto;
font-size:14px;
cursor: pointer;
a {
    text-decoration: none;
    color:black;
}
&:hover{
  background-color:#2f3967;
  color:black;
}
@media (max-width: 1050px) {
  margin: 40px auto;
  }
`
export const Action3 = styled.div`
width: 160px;
padding: 15px 10px;
background-color:white;
font-size:14px;
margin: 40px auto;
font-size:14px;
cursor: pointer;
a {
    text-decoration: none;
    color:black;
}
&:hover{
  background-color:#2f3967;
  color:black;
}
@media (max-width: 1050px) {
  margin: 40px auto;
  }
`
export const RightSection = styled.img`
position: absolute;
height: 300px;
left:50px;
bottom: 350px;
`
export const Icon = styled.img`
height: 70px;
color:white;
`

export const Section = styled.div`
display: flex;
 flex-wrap: wrap;
justify-content: center;
 padding: 0 5% 10px;
 animation: 2s slide-up;
 border-box: box-sizing;
@keyframes slide-up{
  from{
     margin-top: 20%;
  }
  to{
    margin-top: 0%;
  }
}
 @media (max-width: 1050px) {
  padding: 50px 0px;
  }

`
export const FlexItem1 = styled.div`
 width: 30%;
 padding : 60px 40px 0;
 margin-top: 25px;
height:400px;
text-align:center;
color:white;
box-sizing:border-box;

@media (max-width: 1050px) {
  width:98%;
  height:400px;
  margin-top: 0;
  }

`
export const FlexItem3 = styled.div`
 width: 30%;
 padding : 20px 40px 0;
 margin-top: 15px;
// height:300px;
text-align:center;
color:white;
box-sizing:border-box;

@media (max-width: 1050px) {
  width:98%;
  // height:260px;
  margin-top: 0;
  }

`


export const FlexItem2 = styled.div`
text-align:center;
box-sizing:border-box;
padding: 60px 40px 0;
color:white;
width: 30%;
height:450px;
@media (max-width: 1050px) {
  width:98%;
  height:450px;
  }
`
export const DivCenter = styled.div`
text-align:center;
margin-bottom: 60px;
`

export const Title = styled.div`
text-align:center;
padding : 100px 0 20px;

`

export const TextStyle = styled.span`
`

export const TextStyle2 = styled.span`
text-weight:bold;
`
export const BrandImage = styled.img`
width:80%;

`