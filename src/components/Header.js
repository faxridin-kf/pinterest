import { IconButton } from '@material-ui/core'
import { Pinterest, Search } from '@material-ui/icons'
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextsmsIcon from '@material-ui/icons/Textsms';
import React, { useState } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styled from "styled-components"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header(props) {

   const [input, setInput] = useState("")
   const onSearchSubmit = (e) => {
      e.preventDefault();
      props.onSubmit(input)
   }
 return (
  <Wrapper>
   <LogoWrapper>
      <IconButton>
      <Pinterest />
      </IconButton>
   </LogoWrapper>
   <HomePageButton>
    <a href="#">HomePage</a>
   </HomePageButton>
   <FolowingButton>
    <a href="#">Folowing</a>
   </FolowingButton>
   <SearchWrapper>
    <SearchBarWrapper>
     <IconButton>
      <Search/>
     </IconButton>
     <form>
      <input type="text" placeholder="Поиск" onChange={ (e) => setInput(e.target.value) } />
      <button type="submit" onClick = { onSearchSubmit }></button>
     </form>
    </SearchBarWrapper>
   </SearchWrapper>
   <IconsWrapper>
   <IconButton>
   <NotificationsIcon />
   </IconButton>
   <IconButton>
   <TextsmsIcon />
   </IconButton>
   <IconButton>
   <AccountCircleIcon />
   </IconButton>
   <IconButton>
   <ExpandMoreIcon/>
   </IconButton>
   </IconsWrapper>
  </Wrapper>
 )
}

export default Header

const Wrapper = styled.div`
display: flex;
align-items: center;
height: 56px;
padding: 12px 4px 4px 16px;
background-color: #fff;
color: black;
`
const LogoWrapper = styled.div`
.MuiSvgIcon-root{
 color: #e60023;
 font-size: 32px;
 cursor: pointer;
 }
`
const HomePageButton = styled.div`
display: flex;
height: 48px;
min-width:123px;
align-items: center;
justify-content: center;
border-radius: 24px;
cursor: pointer;
background-color:rgb(17, 17, 17);
a{
 text-decoration: none;
 color: white;
 font-weight: 700;
}
`
const FolowingButton = styled(HomePageButton)`
background-color: white;
a{
 color: black;
 transition: .5s;
}
:hover {
 background-color: #e1e1e1;
 transition: .5s;
}
`
const SearchWrapper = styled.div`
flex: 1;
`
const SearchBarWrapper = styled.div`
background: #efefef;
display: flex;
height: 48px;
width: 100%;
border-radius: 50px;
border: none;
padding-left: 10px;
form {
 display: flex;
 flex: 1;
}
form > input {
 background-color: #fff;
 border: none;
 width: 100%;
 margin-left: 5px;
 font-size: 16px;
 outline: none;
 background: #efefef;
}
form > button {
 display: none;
}
`
const IconsWrapper = styled.div`

`