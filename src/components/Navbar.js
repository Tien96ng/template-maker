import React from 'react'
import {
  Checkbox,
  Grid,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

import HeaderComponent from './Header';
import Layout from './Layout';

const SidebarExampleSidebar = () => {
  const [visible, setVisible] = React.useState(false)


  return (
    <Grid columns={1}>
      
  
      <Grid.Column>
        <div id='fixed-sidebar'>
          <div className='hamburger' onClick={() => setVisible(!visible)}>
            <div className='patty'></div>
            <div className='patty'></div>
            <div className='patty'></div>
          </div>
        </div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
            <HeaderComponent 
              img="home-bg"
              text="THE ULTIMATE LIVING SPACE"
            />
              <Layout/>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  )
}

export default SidebarExampleSidebar