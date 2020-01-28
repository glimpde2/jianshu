import styled from 'styled-components';
import LogPic from '../../statics/logo.png'
export const HeaderWapper = styled.div`
height:56px;
/* background:red; */
position:relative;
border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
    href: '/'
})`
display:inline-block;
position:absolute;
top:0;
left:0;
width:100px;
height:56px;
background-image:url(${LogPic});
/* background-repeat: no-repeat; */
background-size:contain;
`

export const Nav = styled.div`
width:960px;
margin:0 auto;
height:100%;
.iconfont{
    margin-right:5px;
}
`

export const NavItem = styled.div`
line-height:56px;
font-size:17px;
padding:0 15px;
color: #333;
/* padding:15px; */
&.left{
    float:left;
}
&.right{
    float:right;
    color: #969696;
}
&.active{
    color: #ea6f5a;
}
.chooceFont{
    font-size:24px;
}
.index{
    
}

`
export const NavSearchWapper = styled.div`
height:100%;
float:left;
position: relative;
margin-left:8px;
.iconfont{
    width:30px;
    height:30px;
    position:absolute;
    text-align:center;
    line-height:30px;
    border-radius:15px;
    color:#969696;
    top:50%;
    right:0px;
    margin-top:-16px;
    font-size:17px;
    cursor: pointer;

}
.focus-search-icon{
     background-color:#969696;
     color:#FFF;
}
`

export const NavSearch = styled.input.attrs({placeholder:'搜索'})`
width:260px;  
height:36px;
border:none;
outline:none;
border-radius:19px;
background-color:#eee;
margin-top:9px;
padding:0 32px 0 20px;
box-sizing:border-box;
font-size:14px;
&.fade-enter{
transition:all .2s ease-out;
}
&.fade-enter-active{
    width:300px;
}
&.fade-enter-done{
    width:360px;
}
&.fade-exit{
    transition:all .2s ease-out;
}
&.fade-exit-active{
    width:260px;  
}


&::placeholder{
    color: #999;
}
`

export const Addition = styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`
export const Button = styled.div`
float:right;
line-height:38px;
border-radius:19px;
margin-top:9px;
border:1px solid #ec6149;
margin-right:20px;
padding:0 20px;
font-size:14px;
&.reg{
    color:#ec6149;
}

&.writing{
    background-color:#ec6149;
    padding:0 10px 0 26px;
    font-size:15px;
    color: #fff;
    position: relative;
    .writing-icon{
    position:absolute;
    width:28px;
    height:30px;
    text-align:center;
    line-height:30px;
    font-size:18px;
    top:50%;
    margin-top:-16px;
    left:0;
    font-weight:bold;

}
}

`