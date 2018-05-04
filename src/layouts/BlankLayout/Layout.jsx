import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import HeaderNav from '../../components/HeaderNav';
import Aside from '../../components/Aside';

import './Layout.scss';

export default class BlankLayout extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Layout>
        <Layout.Header style={styles.layoutHeader}>
          <HeaderNav />
        </Layout.Header>
        <Layout.Section style={styles.layoutSection}>
          <Layout.Main className="layout-main">
            {this.props.children}
          </Layout.Main>
          <Layout.Aside className="layoutAside">
            <Aside />
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
    display:'flex',
    padding:'0px 16px',
    margin:'10px auto',
    width:'1032px'
  },
}

