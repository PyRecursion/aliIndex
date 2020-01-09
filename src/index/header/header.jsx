import React, { Component } from 'react'
import "./header.less"




export default class Header extends Component {
    //点击改变颜色
    curTag=(e)=>{
        var elems=document.getElementsByClassName("navtag")
        for (let index = 0; index < elems.length; index++) {
            let element = elems[index];
            element.style.color="white"
        }
        e.target.style.color="#f37327"
    }
    render() {
        return (
            <div className="header" >
                <div className="header-menu">
                    <a className="logo" href="https://job.alibaba.com/zhaopin/index.htm">
                        <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt="logo" />
                    </a>
                    <i className="i1">|</i>
                    <i className="i2">社招官网</i>
                    <ul className="navmenu" >
                        <li className="navtag" onClick={this.curTag} style={{color:"#f37327"}}>首    页</li>
                        <li className="navtag" onClick={this.curTag}>社会招聘</li>
                        <li className="navtag" onClick={this.curTag}>校园招聘</li>
                        <li className="navtag" onClick={this.curTag}>了解阿里</li>
                        <li className="navtag" onClick={this.curTag}>个人中心</li>
                    </ul>
                    <div className="reglogin">
                        <span>欢迎来到阿里巴巴集团招聘！</span>
                        <span className="login">登录  </span>
                        <span>|</span>
                        <span className="reg">  注册</span>
                    </div>
                </div>
                
            </div>
        )
    }
}
