import React from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {getChangeFocusedAction} from '../../store/actionCreator';
import {
    HeaderWapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    NavSearchWapper,
    Addition,
    Button
} from './style'
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.getSearchFocus = this.props.getSearchFocus.bind(this);
        this.loseFocus = this.props.loseFocus.bind(this);
        // this.state={
        //     focus:false
        // }
    }
    render() {
        return (
            <HeaderWapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className={'left active index'}>
                        <i className={'iconfont'}>&#xe638;</i>
                        首页</NavItem>
                    <NavItem className={'left'}>
                        <i className={'iconfont'}>&#xe61c;</i>
                        下载APP</NavItem>
                    <NavItem className={'right'}>
                        <i className={'iconfont chooceFont'}>&#xe636;</i>
                    </NavItem>
                    <NavItem className={'right'}>登录</NavItem>
                    <NavSearchWapper>
                        <CSSTransition
                        in={this.props.focused}
                        timeout={2000}
                        classNames='fade'>
                             <NavSearch  onBlur={this.props.loseFocus} onFocus={this.props.getSearchFocus}></NavSearch>
                        </CSSTransition>
                            <i  className={this.props.focused?'iconfont focus-search-icon':'iconfont'}>&#xe66c;</i>
                        
                       
                    </NavSearchWapper>

                </Nav>

                <Addition>
                    <Button className={'writing'}>
                        <i className={'iconfont writing-icon'}>&#xe7b9;</i>
                        写文章</Button>
                    <Button className={'reg'}>注册</Button>
                </Addition>
            </HeaderWapper>
        )

      
    }
}

const mapStateToProps=(state)=>{
    return{
        focused:state.focused
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getSearchFocus(){
          const action =   getChangeFocusedAction(true);
          dispatch(action)
          },
          loseFocus(){
            const action = getChangeFocusedAction(false);
            dispatch(action)
          }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
