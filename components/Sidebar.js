import React, { Component } from 'react';
import Link from 'next/link';
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
                                <span className="lnr lnr-home" style={{ fontSize: '1.75em', color: '#ffffff' }}></span>
                            </NavIcon>
                            <NavText>
                                INICIO
                            </NavText>
                        </NavItem>
                    </Link>
                    <Link href="/pagina">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <span className="lnr lnr-rocket" style={{ fontSize: '1.75em', color: '#ffffff' }}></span>
                            </NavIcon>
                            <NavText>
                                PÁGINA WEB
                            </NavText>
                        </NavItem>
                    </Link>
                    <Link href="/redes">
                        <NavItem eventKey="home">
                            <NavIcon>
                            <span className="lnr lnr-thumbs-up" style={{ fontSize: '1.75em', color: '#ffffff' }}></span>
                            </NavIcon>
                            <NavText>
                                REDES SOCIALES
                            </NavText>
                        </NavItem>
                    </Link>
                    <Link href="/calendario">
                        <NavItem eventKey="home">
                            <NavIcon>
                            <span className="lnr lnr-calendar-full" style={{ fontSize: '1.75em', color: '#ffffff' }}></span>
                            </NavIcon>
                            <NavText>
                                CALENDARIO
                            </NavText>
                        </NavItem>
                    </Link>
                    <Link href="/calendario">
                        <img src="https://azul.mx/templates/azulmx2013/images/badge.png" alt="" title="" style={{ position: 'absolute', bottom: '0', width: '60px'}} />
                    </Link>
                </SideNav.Nav>
            </SideNav>
        )
    }
}

export default Sidebar;