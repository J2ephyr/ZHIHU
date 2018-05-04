import React, { Component } from 'react';
import Container from '@icedesign/container';

import './Home.scss';

export default class Home extends Component {
  static displayName = 'Home';

  renderStoryCard = () => {
    return (
      <div>
      <Container className="card TopstoryItem">
        <div className="FeedSource">
          <div className="FeedSource-firstline">
            热门内容，来自：
            <span><a>政治</a></span>
          </div>
          <div className="AuthorInfo">
            <span>
              <img class="Avatar AuthorInfo-avatar" width="24" height="24" src="https://pic1.zhimg.com/50/v2-ba688cedd83d779e4ec15337ac5500a1_s.jpg" srcset="https://pic1.zhimg.com/50/v2-ba688cedd83d779e4ec15337ac5500a1_xs.jpg 2x" alt="新塘坡" />
            </span>
            <span className="AuthorInfo-name">
              新塘破,
            </span>
            <div className="AuthorInfo-content">
              关注公众号wenhua_103分享历史老视频
            </div>
          </div>
        </div>
        <div className="ContentItem">
          <h2 className="ContentItem-title">你在医院见过哪些心理暗示的真事？</h2>
          <div className="RichContent">
            <div className="RichContent-inner">
              <span className="RichText">2014年入职，在大非洲奋斗了三年。一个多月前刚离开公司。 离职前写下了对三年多工作的总结，有自己的真实感受，也有对“华为能带给你什么”和“什么样的人…</span>
            </div>
            <div className="ContentItem-actions">
              <span>
                <button className="Button VoteButton">
                  <svg viewBox="0 0 20 18" class="Icon VoteButton-upIcon" width="9" height="16" aria-hidden="true"><title></title><g><path d="M0 15.243c0-.326.088-.533.236-.896l7.98-13.204C8.57.57 9.086 0 10 0s1.43.57 1.784 1.143l7.98 13.204c.15.363.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H1.955c-1.08 0-1.955-.517-1.955-1.9z"></path></g></svg>
                  728
                </button>
                <button className="Button VoteButton VoteButton--down">
                  <svg viewBox="0 0 20 18" class="Icon VoteButton-downIcon" width="9" height="16" aria-hidden="true"><title></title><g><path d="M0 15.243c0-.326.088-.533.236-.896l7.98-13.204C8.57.57 9.086 0 10 0s1.43.57 1.784 1.143l7.98 13.204c.15.363.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H1.955c-1.08 0-1.955-.517-1.955-1.9z"></path></g></svg>
                </button>
              </span>
              <button className="Button Button-plain Button-withIcon">
                <span className="icon">&#8203;<svg class="Zi Zi--Comment Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fill-rule="evenodd"></path></svg></span>
                54 条评论
              </button>
              <div>
                <button className="Button Button-plain Button-withIcon">
                  <span className="icon">&#8203;<svg class="Zi Zi--Share Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z" fill-rule="evenodd"></path></svg></span>
                  分享
                </button>
              </div>
              <button className="Button Button-plain Button-withIcon">
                <span className="icon">&#8203;<svg class="Zi Zi--Heart Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg></span>
                感谢
              </button>
              <button className="Button Button-plain Button-withIcon">
              <span className="icon">&#8203;<svg class="Zi Zi--Dots Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill-rule="evenodd"></path></svg></span>
              </button>
            </div>
          </div>
        </div>
      </Container>
      </div>
    );
  }

  render(){
      return (
        <div className="Topstory-mainColumn">
        <div className="card">
            <div className="TopstoryHeader">
              <div className="TopstoryHeader-nav">
                <button className="Button-plain TopstoryHeader-navItem">
                  <svg width="16" height="16" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" className="Icon-question Icon" aria-hidden="true"><title></title><g><g transform="translate(-3 -3)" fill="#8590A6" fill-rule="evenodd">     <path d="M3.833 6.356c0-1.66 1.334-3.007 2.993-3.007h9.348c1.653 0 2.993 1.338 2.993 3.006v8.498c0 1.66-1.266 3.467-2.812 4.03l-1.09.396c-2.08.757-5.447.76-7.53 0l-1.09-.396c-1.553-.565-2.812-2.363-2.812-4.03V6.356zm1.643.67v7.492c0 1.1.84 2.314 1.873 2.697l2.277.844c1.035.383 2.712.383 3.746 0l2.278-.845c1.036-.384 1.874-1.59 1.874-2.697V7.026c0-1.1-.897-2.003-2.003-2.003H7.48c-1.118 0-2.004.897-2.004 2.003z"></path>     <path d="M13.012 11.46l-.422.29c-.232.177-.433.53-.433.53s-.08.134-.11.398v.16h-1.63v-.24c.02-.555.11-.86.343-1.13.364-.422 1.168-.935 1.202-.956.114-.086.212-.184.284-.288.17-.23.244-.412.244-.59 0-.25-.074-.478-.22-.682-.143-.197-.41-.296-.798-.296-.385 0-.648.12-.806.368-.162.254-.243.523-.243.796l-.005.23-1.656-.003.003-.23c.043-1.007.406-1.732 1.078-2.155.424-.27 1.113-.396 1.657-.406.873.01 1.39.193 1.923.575.54.387.815.965.815 1.72 0 .422-.135.82-.4 1.18-.14.193-.442.434-.826.73z"></path>     <ellipse cx="11.226" cy="14.791" rx="1.095" ry="1.116"></ellipse>   </g></g></svg>
                  提问
                </button>
                <a className="TopstoryHeader-navItem">
                  <svg width="16" height="16" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg" className="Icon Icon-paper" aria-hidden="true"><title></title><g><g fill="#8590A6" fill-rule="evenodd">     <path d="M.833 4.35c0-2.21 1.79-4 4.01-4h7.315c2.214 0 4.01 1.79 4.01 4v8.743c0 2.21-1.79 4-4.01 4H4.842c-2.214 0-4.01-1.792-4.01-4V4.35zm1.643-.32v9.383c0 1.106.897 2.006 2.003 2.006h8.04c1.118 0 2.004-.9 2.004-2.007V4.03c0-1.107-.897-2.007-2.003-2.007H4.48c-1.118 0-2.004.898-2.004 2.006z"></path><path d="M4.667 4.814h7.666v1.674H4.667V4.814zm0 2.79h7.666V9.28H4.667V7.604zm0 2.79h4.928v1.676H4.667v-1.675z"></path>   </g></g></svg>
                  回答
                </a>
                <a className="TopstoryHeader-navItem">
                 <svg width="16" height="16" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className="Icon Icon-write" aria-hidden="true" ><title></title><g><g fill="none" fill-rule="evenodd">     <path d="M9.595 2.023H4.842c-2.22 0-4.01 1.793-4.01 4.005v7.62c0 2.21 1.796 4.003 4.01 4.003h7.316c2.22 0 4.01-1.792 4.01-4.003v-7.11.51L14.523 8.72v4.253c0 1.66-1.336 3.004-3.01 3.004h-6.03c-1.66 0-3.008-1.338-3.008-3.004V6.7c0-1.657 1.336-3.002 3.01-3.002h2.467L9.595 2.03v-.007z" fill="#8590A6"></path>     <path d="M6.372 11.08c-.185-.915.2-2.238.85-2.888l6.616-6.616c.565-.565 1.472-.567 2.038 0 .56.56.56 1.477 0 2.038L9.258 10.23c-.652.65-1.975 1.034-2.888.85z" stroke="#8590A6" stroke-width="1.5"></path>     <path fill="#8590A6" d="M13.04 2.088l2.324 2.324-.987.986-2.323-2.324z"></path>   </g></g></svg>
                  写文章
                </a>
                <span className="TopstoryHeader-navItem">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="Icon Icon-idea"><title></title><g><path d="M12.63 2.02V0h1.35v2.02H16v1.35h-2.02V5.4h-1.35V3.36H10.6V2.02h2.03zm-.17 4.9h1.7v4.76c0 1.5-.17 2.05-.46 2.6-.3.55-.73.98-1.28 1.27-.54.3-1.1.45-2.6.45h-5.5c-1.5 0-2.05-.16-2.6-.45-.55-.3-.98-.72-1.27-1.27-.3-.55-.45-1.1-.45-2.6v-5.5c0-1.5.16-2.06.45-2.6.3-.55.72-.98 1.27-1.28.55-.3 1.1-.45 2.6-.45H9.1v1.7H4.3c-1.12 0-1.46.05-1.8.24-.26.1-.45.3-.58.55-.2.35-.26.7-.26 1.8v5.5c0 1.13.07 1.47.26 1.8.13.27.32.46.58.6.34.18.68.25 1.8.25h5.5c1.12 0 1.46-.06 1.8-.25.27-.13.46-.32.6-.58.18-.34.24-.68.24-1.8V6.9zM8.6 6.7c.7-.16 1.45.06 1.98.6.83.83.83 2.2 0 3.04l-.03.03c-.84.85-2.2.85-3.04 0l-1.92-2c-.25-.24-.64-.24-.88 0l-.04.04c-.25.28-.25.7 0 .95.15.16.37.22.57.17.4-.1.82.18.9.58.1.4-.16.82-.57.9-.7.17-1.46-.04-1.98-.58-.83-.85-.83-2.2 0-3.06l.03-.02c.86-.85 2.2-.85 3.05 0L8.6 9.3c.24.25.63.25.87 0l.03-.02c.25-.26.25-.67 0-.93-.16-.15-.37-.2-.58-.17-.4.1-.8-.16-.9-.57-.1-.4.16-.8.57-.9z"></path></g></svg>
                  写想法
                </span>
              </div>
              <a className="TopstoryHeader-rightItem" target="_blank">草稿</a>
            </div>
        </div>
        <div className="TopstoryMain">
          {this.renderStoryCard()}
          {this.renderStoryCard()}
          {this.renderStoryCard()}
          {this.renderStoryCard()}
          {this.renderStoryCard()}
          {this.renderStoryCard()}
        </div>
        </div>
      );
  }
}