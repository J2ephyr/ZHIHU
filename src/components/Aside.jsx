import React, { Component } from 'react';
import Container from '@icedesign/container';
import { Nav } from '@icedesign/base';
import { Icon } from '@icedesign/base';
const { Item }  = Nav;

import './Aside.scss';

export default class Aside extends Component {
    render(){
        return (
            <div className="GlobalSideBar">
                <div className="Card">
                    <ul className="categoryList">
                        <li className="categoryItem">
                            <a href="/lives" target="_blank" style={{color:"rgb(255, 207, 0)"}} title="Live" type="button" className="Button Button--plain" ><span class="GlobalSideBar-categoryIcon"><svg class="Zi Zi--Live" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M13.693 10.354l1.634-7.542c.195-.901-.16-1.083-.798-.39l-9.18 9.97c-.638.693-.377 1.254.582 1.254h5.376l-1.634 7.542c-.195.901.16 1.083.798.39l9.18-9.97c.638-.693.377-1.254-.582-1.254h-5.376z"></path></svg></span><span class="GlobalSideBar-categoryLabel">Live</span></a>
                        </li>
                        <li className="categoryItem">
                            <a href="/pub/" target="_blank" style={{color:"rgb(67, 212, 128)"}} title="书店" type="button" className="Button Button--plain" ><span class="GlobalSideBar-categoryIcon"><svg class="Zi Zi--Ebook" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M16 17.649V2.931a.921.921 0 0 0-.045-.283.943.943 0 0 0-1.182-.604L4.655 5.235A.932.932 0 0 0 4 6.122v14.947c0 .514.421.931.941.931H19.06c.52 0 .941-.417.941-.93V7.292a.936.936 0 0 0-.941-.931h-.773v12.834a.934.934 0 0 1-.83.924L6.464 21.416c-.02.002 2.94-.958 8.883-2.881a.932.932 0 0 0 .653-.886z" fill-rule="evenodd"></path></svg></span><span class="GlobalSideBar-categoryLabel">书店</span></a>
                        </li>
                        <li className="categoryItem">
                            <a href="/roundtable" target="_blank" style={{color:"rgb(0, 132, 255)"}} title="圆桌" type="button" className="Button Button--plain" ><span class="GlobalSideBar-categoryIcon"><svg class="Zi Zi--Org" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M10.786 8.41a8.938 8.938 0 0 0-3.968-2.528c-.305-1.719.814-3.337 2.442-3.741 1.221-.405 2.646.101 3.46 1.011 1.045 1.38.915 3.64.814 4.348-.102 1.315-1.221 3.034-1.323 3.135-.305-.809-.814-1.517-1.425-2.225zm-2.442 2.832c-1.526.202-3.052 1.01-4.171 2.123-1.12-.404-1.934-1.314-2.137-2.427-.316-2.427 1.526-3.64 2.849-3.842 1.628-.371 2.849.505 4.07 1.415 1.146 1.012 2.035 2.63 2.035 2.73-.916-.202-1.832-.1-2.646 0zm4.986.303c.509-.607.931-1.586 1.12-2.225.318-1.039.61-3.134.203-4.651 1.323-1.011 3.154-1.011 4.477.303 1.235 1.146 1.017 2.933.814 3.438-.663 1.581-1.933 2.326-3.256 2.832-1.221.404-3.256.303-3.358.303zm-2.645 1.011c-.51.607-.916 1.416-1.221 2.326-.407 1.314-.643 3.06-.102 4.55-1.323 1.011-3.256 1.011-4.477-.202-1.198-1.124-1.018-2.932-.814-3.438.599-1.605 1.933-2.326 3.256-2.831.916-.304 3.256-.405 3.358-.405zm9.259-1.82c1.017.404 1.933 1.315 2.035 2.427.233 2.57-1.526 3.64-2.849 3.842-1.526 0-2.85-.505-4.07-1.415-1.018-.81-2.035-2.528-2.035-2.63.916.203 1.831.102 2.645 0 1.628-.404 3.053-1.112 4.274-2.224zm-6.716 4.854c1.065 1.08 2.442 2.022 4.07 2.528.306 1.719-.814 3.235-2.442 3.741-1.22.405-2.645-.101-3.46-1.011-1.1-1.481-1.017-3.54-.915-4.247.102-1.315 1.221-3.034 1.323-3.135.305.708.721 1.44 1.424 2.124z"></path></svg></span><span class="GlobalSideBar-categoryLabel">圆桌</span></a>
                        </li>
                        <li className="categoryItem">
                            <a href="//zhuanlan.zhihu.com" target="_blank" style={{color:"rgb(15, 136, 235)"}} title="专栏" type="button" className="Button Button--plain" ><span class="GlobalSideBar-categoryIcon"><svg class="Zi Zi--Edit" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M4.076 16.966a4.19 4.19 0 0 1 1.05-1.76l8.568-8.569a.524.524 0 0 1 .741 0l2.928 2.927a.524.524 0 0 1 0 .74l-8.568 8.57c-.49.49-1.096.852-1.761 1.051l-3.528 1.058a.394.394 0 0 1-.49-.488l1.06-3.53zM20.558 4.83c.59.59.59 1.546 0 2.136l-1.693 1.692a.503.503 0 0 1-.712 0l-2.812-2.812a.504.504 0 0 1 0-.712l1.693-1.693a1.51 1.51 0 0 1 2.135 0l1.389 1.389z"></path></svg></span><span class="GlobalSideBar-categoryLabel">专栏</span></a>
                        </li>
                        <li className="categoryItem">
                            <a href="/zhi" target="_blank" style={{color:"rgb(84, 120, 240)"}} title="付费咨询" type="button" className="Button Button--plain" ><span class="GlobalSideBar-categoryIcon"><svg class="Zi Zi--Infinity" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M11.267 10.188h-2.69a.26.26 0 0 0-.261.26v.508c0 .149.117.26.262.26h2.896v1.54H8.578a.26.26 0 0 0-.262.259v.508c0 .15.117.26.262.26h2.896v2.31c0 .139.119.257.265.257h.522a.258.258 0 0 0 .265-.257v-2.31h2.896a.26.26 0 0 0 .262-.26v-.508a.257.257 0 0 0-.262-.26h-2.896v-1.54h2.896a.26.26 0 0 0 .262-.26v-.507a.257.257 0 0 0-.262-.26h-2.69l2.51-2.636a.26.26 0 0 0-.004-.366l-.423-.413a.253.253 0 0 0-.36.01L12 9.418 9.545 6.784a.248.248 0 0 0-.36-.011l-.423.413a.264.264 0 0 0-.004.366l2.509 2.636zM12 19.973c-1.101 0-2.16-.15-3.152-.43-.532.18-5.27 2.177-4.743 1.179.527-.998 1.58-2.746.806-3.25C3.11 15.936 2 13.822 2 11.486 2 6.8 6.477 3 12 3s10 3.8 10 8.487-4.477 8.486-10 8.486z"></path></svg></span><span class="GlobalSideBar-categoryLabel">付费咨询</span></a>
                        </li>
                    </ul>
                </div>
                <div className="Card">
                    <Nav
                        type="primary"
                        activeDirection="null"
                        className="navList"
                    >
                        <Item key="1" ><Icon type="favorite"/>我的收藏</Item>
                        <Item key="2" ><Icon type="comments" />我关注的问题</Item>
                        <Item key="3" ><Icon type="account" />我的邀请</Item>
                        <Item key="4" ><Icon type="bags" />我的礼券</Item>
                        <Item key="5" ><Icon type="office" />社区服务中心</Item>
                        <Item key="6" ><Icon type="time" />版权服务中心</Item>
                        <Item key="7" ><Icon type="edit" />公共编辑动态</Item>
                    </Nav>
                </div>
            </div>
        );
    }
}