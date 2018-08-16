import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
import logo from '../../../assets/ironhack.png';
const SubMenu = Menu.SubMenu;

class MenuPanel extends Component{

  logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    this.props.history.push('/login')
  };

  render(){
    console.log(this.props);
    let path = this.props.location.pathname.split('/').slice(0,-1).join('/');
    return(
      <div style={{ width: 200, height:'100vh', textAlign: 'left', maxWidth: 200, minWidth: 200}}>
        <Menu mode="inline" theme="light" defaultSelectedKeys={[this.props.location.pathname]} defaultOpenKeys={[path]} style={{ height: '100vh' }}  >

          <Menu.Item style={{height: 'auto', textAlign: "center", marginTop: '50px', marginBottom: '50px'}} disabled={true}>
            <img src={logo} alt="logoironhack" width="80%" />
          </Menu.Item>

          <Menu.Item key='/admin'>
            <Link to="/admin">
              <Icon type="global" /><span>Public Projects</span>
            </Link>
          </Menu.Item>

          <SubMenu key="/admin/students" title={<span><Icon type="user" /><span>Students</span></span>}>
            <Menu.Item key="/admin/students/new">
              <Link to="/admin/students/new">
                <Icon type="user-add" /><span>New Student</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/admin/students/all">
              <Link to="/admin/students/all" >
                <Icon type="user" /><span>All Students</span>
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="/admin/cohorts" title={<span><Icon type="team" /><span>Cohorts</span></span>}>
            <Menu.Item key="/cohorts/new">
              <Link to="/cohorts/new">
                <Icon type="usergroup-add" /><span>New Cohort</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/cohorts/all">
              <Link to="/cohorts/all" >
                <Icon type="team" /><span>All Cohorts</span>
              </Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="/admin/projects">
            <Link to="/projects" >
              <Icon type="code" /><span>Projects</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="/admin/profile">
            <Link to="/admin/profile">
              <Icon type="idcard" /><span>Profile</span>
            </Link>
          </Menu.Item>

          <Menu.Item onClick={this.logOut} key="/admin/logout">
            <Link to="/">
              <Icon type="poweroff" /> <span>Logout</span>
            </Link>
          </Menu.Item>

        </Menu>
      </div>
    )
  }
}

export default MenuPanel;