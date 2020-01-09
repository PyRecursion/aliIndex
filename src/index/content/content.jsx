import React, { Component } from 'react'
import "./content.less"




class Content extends Component {
    constructor(props) {
        super(props);
        this.ulRef = React.createRef();
        this.state = {
            top: 0,
        }
    }
    componentDidMount() {
        this.autoScroll()
        // console.log(this.ulRef.current.clientHeight)
    }
    //复制两份数据用于滚动连接
    autoScroll = () => {
        setInterval(() => {
            var top = this.state.top
            var height = this.ulRef.current.clientHeight
            if (top >= (-height / 2)) {
                this.setState({
                    top: top - 1
                })
            } else {
                this.setState({
                    top: 0
                })
            }
        }, 50)

    }
    
    render() {
        const {top}=this.state
        return (
            <div className="content-bottom">
                <div className="content-bottom-left">
                    <div className="content-bottom-left-header" >
                        <span className="headerText">最新岗位</span>
                        <span className="headerText" style={{ float: "right" }}>更多</span>

                    </div>
                    <div className=" content-bottom-left-body">
                        <ul ref={this.ulRef} style={{ top: top }}>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州">阿里云智能-客户运营专家-北京/杭州</a>
                                <span className="local">北京</span>
                                <span className="time">1分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >湖畔大学-班主任-学员运营</a>
                                <span className="local">北京</span>
                                <span className="time">2分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >阿萨德卡我</a>
                                <span className="local">北京</span>
                                <span className="time">3分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >爱我的埃里克森的</a>
                                <span className="local">北京</span>
                                <span className="time">4分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >阿斯达无</a>
                                <span className="local">北京</span>
                                <span className="time">5分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >碍事大师多</a>
                                <span className="local">北京</span>
                                <span className="time">6分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >碍事大师多多</a>
                                <span className="local">北京</span>
                                <span className="time">7分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >阿里云智能-客户运营专家-北京/杭州</a>
                                <span className="local">北京</span>
                                <span className="time">8分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >湖畔大学-班主任-学员运营</a>
                                <span className="local">北京</span>
                                <span className="time">9分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >阿萨德卡我</a>
                                <span className="local">北京</span>
                                <span className="time">10分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >阿里云智能-客户运营专家-北京/杭州</a>
                                <span className="local">北京</span>
                                <span className="time">1分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >湖畔大学-班主任-学员运营</a>
                                <span className="local">北京</span>
                                <span className="time">2分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >阿萨德卡我</a>
                                <span className="local">北京</span>
                                <span className="time">3分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >爱我的埃里克森的</a>
                                <span className="local">北京</span>
                                <span className="time">4分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >阿斯达无</a>
                                <span className="local">北京</span>
                                <span className="time">5分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >碍事大师多</a>
                                <span className="local">北京</span>
                                <span className="time">6分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >碍事大师多多</a>
                                <span className="local">北京</span>
                                <span className="time">7分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >阿里云智能-客户运营专家-北京/杭州</a>
                                <span className="local">北京</span>
                                <span className="time">8分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >湖畔大学-班主任-学员运营</a>
                                <span className="local">北京</span>
                                <span className="time">9分钟前</span>
                            </li>
                            <li>
                                <a href="/zhaopin/PositionDetail.htm?positionCode=GP529027&amp;" title="阿里云智能-客户运营专家-北京/杭州" >阿萨德卡我</a>
                                <span className="local">北京</span>
                                <span className="time">10分钟前</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content-bottom-right">
                    <a className="a-showpic1" href="https://www.aliyun.com/careers">
                        <img className="showpic1" src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" alt="" />
                    </a>
                    <a className="a-showpic1" href="https://www.aliyun.com/careers">
                        <img className="showpic1" src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt="" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Content