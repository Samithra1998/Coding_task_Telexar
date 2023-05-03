import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();
  return (
    <SideNav
        onSelect={(selected) => {
            console.log(selected);
            navigate('/' + selected)
        }}
        style={{ top: '116px',background: '#60A3D9'}}
    >
        <SideNav.Toggle/>
        <SideNav.Nav defaultSelected='home'>
            <NavItem>
                <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
            <NavItem>
                <NavIcon>
                <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    My Profile
                </NavText>
            </NavItem>
            <NavItem>
                <NavIcon>
                <i className="fa fa-fw fa-gear" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Expences
                </NavText>
            </NavItem>
          

        </SideNav.Nav>

    </SideNav>
  )
}

export default Sidebar;