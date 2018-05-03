import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import HeaderNav from '../../components/HeaderNav';


import './Layout.scss';

export default class BlankLayout extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Layout fixable={true} >
        <Layout.Header style={styles.layoutHeader}>
          <HeaderNav />
        </Layout.Header>
        <Layout.Section scrollable={true} style={styles.layoutSection}>
          <Layout.Main style={styles.layoutMain}>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动 end</p>
          </Layout.Main>
          <Layout.Aside style={styles.layoutAside}>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动</p>
            <p style={{ height: 200 }}>内容可滚动 end</p>
          </Layout.Aside>
        </Layout.Section>
      </Layout>
    );
  }
}
const styles = {
  layoutHeader:{
    lineHeight: '52px',
    backgroundColor: '#fff',
    minWidth:'1032',
    boxShadow:'0 1px 3px rgba(26,26,26,.1)',
  },
  layoutSection:{
    padding:'0px 300px'
  },
  layoutMain:{
    backgroundColor: 'rgb(19, 23, 26)',
  },
  layoutAside:{
    flex:'1',
    backgroundColor: 'rgb(178, 191, 207)',
  }
}

