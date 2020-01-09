import React, { Component } from 'react'
import Header from './header/header'
import Banner from './banner/banner'
import Content from './content/content'
import Footer from './footer/footer'
import './index.less'

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="content">
                    <Banner />
                    <Content />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        )
    }
}
