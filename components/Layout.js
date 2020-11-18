import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Head from 'next/head'
import Navbar from 'react-bootstrap/Navbar'
import styles from '../styles/Home.module.css'

class Layout extends Component {
  componentDidMount() {
    console.log('mount');
  }
  componentWillUnmount() {
    console.log('unmount');
  }
  render() {
    const { children, title = 'NRGIBROKERS' } = this.props;
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;900&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"></link>
        </Head>

        <Navbar bg="light" expand="lg">
            <Navbar.Brand style={{
                position: 'absolute',
                height: '70px',
                top: '0',
                display: 'block',
                padding: '10px',
                right: '0',
            }}>
              <img src="logo.png" alt="" title="" style={{ width: '155px'}} />
            </Navbar.Brand>
        </Navbar>
        
        <Sidebar />

        <div className={styles.container}>
          {children}
        </div>

      </div>
    );
  }
}

export default Layout;