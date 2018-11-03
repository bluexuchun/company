import React from 'react'
import './index.less'
import { AppBar,Toolbar,Input,Typography,TextField,Button } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import Bg from '../main/imgs/bg.png'
import Up from '../main/imgs/up.png'
import Web from '../main/imgs/web.png'
import Xcx from '../main/imgs/small_wechat.png'
import App from '../main/imgs/app.png'
import Case from '../main/imgs/case.jpg'

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  linkTo = (name) => {
    console.log(name);
    let link = document.getElementById(name);
    if(link){
      link.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  render () {
    return (
      <div className="main" id="main">
        {/* 第一屏 */}
        <div className="cover">
          {/* 补全色彩 */}
          <div className="bgbefore"></div>
          <div className="bgafter"></div>
          {/* 背景图 */}
          <div className="cover-img"></div>
          {/* 顶部导航栏 */}
          <div className="header">
            <div className="logo">创未科技</div>
            <ul className="navs">
              <li className="navs-li" onClick={this.linkTo.bind(this,'service')}>服务</li>
              <li className="navs-li" onClick={this.linkTo.bind(this,'case')}>案例</li>
              <li className="navs-li" onClick={this.linkTo.bind(this,'contact')}>联系我们</li>
            </ul>
          </div>
          {/* 内容 */}
          <div className="cover-content">
            <div className="cover-word">
              <div className="cover-en">CREATE <br/>THE FUTURE</div>
              <div className="cover-zh">创造未来</div>
            </div>
          </div>

          {/* 查看更多 */}
          <div className="cover-footer">
            <div className="footer-word">查看我们提供的服务</div>
            <img className="up-icon" onClick={this.linkTo.bind(this,'service')} src={Up} alt=""/>
          </div>

        </div>

        {/* 其他内容 */}
        <div className="container">
          {/* 服务 */}
          <div className="container-item" id="service">
            <div className="item-tit">服务</div>
            <div className="item-desc">我们为客户提供包括网站、小程序、移动APP在内的全套客户端制作</div>
            <ul className="service-ul">
              <li className="service-box">
                <img className="service-icon" src={Web} alt=""/>
                <div className="service-word">网站</div>
              </li>
              <li className="service-box">
                <img className="service-icon" src={Xcx} alt=""/>
                <div className="service-word">小程序</div>
              </li>
              <li className="service-box">
                <img className="service-icon" src={App} alt=""/>
                <div className="service-word">移动App</div>
              </li>
            </ul>
          </div>

          {/* 案例 */}
          <div className="container-item" id="case">
            <div className="item-tit">案例</div>
            <ul className="case-ul">
              <li className="case-box">
                <img className="case-img" src={Case} alt=""/>
                <div className="case-info">
                  <div className="case-title">BU财富官网</div>
                  <div className="case-desc">我们帮助BU财富完成产品官网的重设计，在官网中更多加入品牌元素</div>
                </div>
              </li>

              <li className="case-box">
                <img className="case-img" src={Case} alt=""/>
                <div className="case-info">
                  <div className="case-title">BU财富官网</div>
                  <div className="case-desc">我们帮助BU财富完成产品官网的重设计，在官网中更多加入品牌元素</div>
                </div>
              </li>

              <li className="case-box">
                <img className="case-img" src={Case} alt=""/>
                <div className="case-info">
                  <div className="case-title">BU财富官网</div>
                  <div className="case-desc">我们帮助BU财富完成产品官网的重设计，在官网中更多加入品牌元素</div>
                </div>
              </li>

              <li className="case-box">
                <img className="case-img" src={Case} alt=""/>
                <div className="case-info">
                  <div className="case-title">BU财富官网</div>
                  <div className="case-desc">我们帮助BU财富完成产品官网的重设计，在官网中更多加入品牌元素</div>
                </div>
              </li>

              <li className="case-box">
                <img className="case-img" src={Case} alt=""/>
                <div className="case-info">
                  <div className="case-title">BU财富官网</div>
                  <div className="case-desc">我们帮助BU财富完成产品官网的重设计，在官网中更多加入品牌元素</div>
                </div>
              </li>
            </ul>
          </div>

          {/* 联系我们 */}
          <div className="container-item" id="contact">
            <div className="item-tit">联系我们</div>
            <div className="item-desc">请尽可能阐述您的需求，我们可以更了解您的想法</div>
            <form className="form" noValidate autoComplete="off">
              我叫
              <TextField
                className="form-text"
                label="姓名"
                margin="normal"
                variant="outlined"
              />
              ，我想制作
              <TextField
                className="form-text"
                label="网站/小程序/App"
                margin="normal"
                variant="outlined"
              />，<br/>
              我的预算有
              <TextField
                className="form-text"
                label="金额"
                margin="normal"
                variant="outlined"
              />元，希望可以在
              <TextField
                className="form-text"
                label="预计时间"
                margin="normal"
                variant="outlined"
              />天完成，<br/>
              你们可以通过
              <TextField
                className="form-text"
                label="email/微信号"
                margin="normal"
                variant="outlined"
              />联系我。下面我详细说明一下我的想法<br/>
              <TextField
                id="filled-textarea"
                label="我的想法"
                placeholder="请输入我的想法.."
                multiline
                rows="4"
                className="form-multi"
                margin="normal"
                variant="filled"
              />
              <div className="button">
                <Button variant="contained" color="primary" className="submitBtn">
                  提交
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* 结尾 */}
        <div className="footer">
          ©创未科技 沪ICP备xxxxxx号-1
        </div>
      </div>
    )
  }
}

export default Index;
