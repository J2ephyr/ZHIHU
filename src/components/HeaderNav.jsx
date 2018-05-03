import React, { Component } from 'react';
import { Nav } from '@icedesign/base';
import { Search } from '@icedesign/base';
import { Button } from '@icedesign/base';
import { Balloon } from '@icedesign/base';

import './HeaderNav.scss';

const { Item }  = Nav;

export default class HeaderNav extends Component {
    render(){
        const iconNews = (
            <button style={styles.iconNews}>
                <svg viewBox="0 0 20 22" width="20" height="20" aria-hidden="true"><title></title><g><path d="M2.502 14.08C3.1 10.64 2 3 8.202 1.62 8.307.697 9.08 0 10 0s1.694.697 1.797 1.62C18 3 16.903 10.64 17.497 14.076c.106 1.102.736 1.855 1.7 2.108.527.142.868.66.793 1.206-.075.546-.542.95-1.09.943H1.1C.55 18.34.084 17.936.01 17.39c-.075-.547.266-1.064.794-1.206.963-.253 1.698-1.137 1.698-2.104zM10 22c-1.417.003-2.602-1.086-2.73-2.51-.004-.062.02-.124.063-.17.043-.045.104-.07.166-.07h5c.063 0 .124.025.167.07.044.046.067.108.063.17-.128 1.424-1.313 2.513-2.73 2.51z"></path></g></svg>
            </button>
        );
        const iconMsg = (
            <button style={styles.iconMsg}>
                <svg viewBox="0 0 20 20" class="Icon Icon--message" width="20" height="20" aria-hidden="true" ><title></title><g><path d="M9 0C3.394 0 0 4.13 0 8c0 1.654.522 3.763 2.014 5.566.314.292.518.82.454 1.17-.165 1.488-.842 1.905-.842 1.905-.328.332.105.67.588.582 1.112-.2 2.07-.58 3.526-1.122.4-.202.464-.147.78-.078C11.524 17.764 18 14 18 8c0-3.665-3.43-8-9-8z"></path><path d="M19.14 9.628c.758.988.86 2.01.86 3.15 0 1.195-.62 3.11-1.368 3.938-.21.23-.354.467-.308.722.12 1.073.614 1.5.614 1.5.237.24-.188.563-.537.5-.802-.145-1.494-.42-2.545-.81-.29-.146-.336-.106-.563-.057-2.043.712-4.398.476-6.083-.926 5.964-.524 8.726-3.03 9.93-8.016z"></path></g></svg>
            </button>
        );
        const profileAvatar = (
            <button style={styles.profileAvatar}>
                <img width="30" height="30" src="https://pic3.zhimg.com/3299fe83a92cdde9f06e6fddaa6f65e4_is.jpg"/>
            </button>
        );
        return (
            <div style={styles.headerNav}>
                <a href="//www.zhihu.com" aria-label="知乎" style={styles.logo}>
                    <svg viewBox="0 0 200 91" width="64" height="30" aria-hidden="true"><title></title><g><path d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z" fillRule="evenodd"></path></g></svg>
                </a>
                <Nav
                    type="text"
                    direction="hoz"
                    className="luv-nav"
                >
                    <Item key="1" style={styles.navItem}>首页</Item>
                    <Item key="2" style={styles.navItem}>发现</Item>
                    <Item key="3" style={styles.navItem}>话题</Item>
                </Nav>
                <div className="search-bar">
                    <Search
                        placeholder="搜索你感兴趣的内容..."
                        searchText=""
                        inputWidth="268px"
                        type="normal"
                        size="large"
                    />
                </div>
                <Button type="primary" style={styles.askBtn}>提问</Button>
                <div style={styles.userInfo}>
                    <Balloon
                        trigger={iconNews}
                        triggerType="click"
                        closable={false}
                        align="b"
                        style={styles.balloonNews}
                    >
                    </Balloon>
                    <Balloon
                        trigger={iconMsg}
                        triggerType="click"
                        closable={false}
                        align="b"
                        style={styles.balloonMsg}
                    >
                    </Balloon>
                    <Balloon
                        trigger={profileAvatar}
                        triggerType="click"
                        closable={false}
                        align="b"
                        style={styles.balloonProfileAvatar}
                    >
                    </Balloon>
                </div>
            </div>
        );
    }
}
const styles = {
    headerNav:{
        display:"flex",
        width:"1000px",
        height:'52px',
        padding:'0 16px',
        margin:'0 auto',
        alignItems:'center',
    },
    logo:{
        height:'30px',
        width:'64',
        fill:'#0084ff',
    },
    navItem:{
        height:'30px',
        lineHeight:'30px',
        padding:'0 15px',
        fontSize:'15px',
    },
    askBtn:{
        marginLeft:"16px",
        borderRadius:'3px',
    },
    userInfo:{
        display:'flex',
        justifyContent:'flex-end',
        flex:"1",
        color:'#8590a6',
        alignItems:'center',
    },
    iconNews:{
        height:'auto',
        display:'flex',
        marginRight:'40px',
        fill:'currentColor',
        border:'none',
        borderRadius:'0',
        background:'transparent',
    },
    iconMsg:{
        height:'auto',
        display:'flex',
        marginRight:'40px',
        fill:'currentColor',
        border:'none',
        borderRadius:'0',
        background:'transparent',
    },
    profileAvatar:{
        height:'auto',
        display:'flex',
        border:'none',
        borderRadius:'0',
        background:'transparent',
    },
    balloonNews:{
        marginLeft:'10px',
        marginTop:'4px',
        width:'360px',
        height:'440px',
    },
    balloonMsg:{
        marginLeft:'10px',
        marginTop:'4px',
        width:'360px',
        height:'440px',
    },
    balloonProfileAvatar:{
        marginLeft:'10px',
        marginTop:'4px',
        width:'116px',
        height:'120px'
    }
}