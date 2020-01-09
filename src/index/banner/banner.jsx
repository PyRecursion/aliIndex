import React, { Component } from "react"
// import { Link } from "react-router-dom";
import "./banner.less"
import { Input } from 'antd';

const { Search } = Input;
export default class Banner extends Component {
    

    render() {
        return (
            <div className="banner">
                <img className="bannerImg" src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt="banner" />
                <div className="float-mid">
                    <p className="en-word">If not now, when?</p>
                    <p className="en-word">If not me, who?</p>
                    <p>此时此刻，非我莫属！</p>
                    <div className="seachTool">
                        <div className="blank"></div>
                        <div className="input">
                            <Search
                                placeholder="请输入职位关键词"
                                enterButton="搜索"
                                size="large"
                                onSearch={value => console.log(value)}
                            />
                        </div>
                    </div>
                    <div className="hotkeys">
                        热门搜索：
                        <span className="hotkey">JAVA</span>
                        <span className="hotkey">IOS</span>
                        <span className="hotkey">数据</span>
                        <span className="hotkey">搜索</span>
                        <span className="hotkey">安全</span>
                        <span className="hotkey">算法</span>
                        <span className="hotkey">运营</span>
                        <span className="hotkey">视觉</span>
                        <span className="hotkey">交互</span>
                        <span className="hotkey">前端</span>
                    </div>
                </div>

            </div>
        )
    }
}
