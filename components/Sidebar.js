import React, { Component } from 'react';
import Link from 'next/link'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Sidebar extends Component {
    render() {
        return (
            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}
                style={{ background: '#202844'}}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <Link href="/">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                    </Link>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Charts
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Line Chart
                        </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Bar Chart
                        </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        )
    }
}

export default Sidebar;