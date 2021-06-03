import React from 'react';
import { Container, Image, Icon } from 'semantic-ui-react';
import logo from '../img/rev-logo.png';

export default function HeaderComponent({img, text}) {
  return (
    <Container fluid className='header-container'>
      <Image 
        src={logo} 
        size='small' 
        className='header-logo'  
      />

      <div className="header-ph white-text"><Icon name='phone' className='white-text' rotated='clockwise'/>(206) 457-1935</div>
      <Image 
        src='https://resource.rentcafe.com/image/upload/w_1433,h_911,c_crop,g_auto/q_auto,f_auto,c_lfill,w_1433,g_auto/s3/2/11958/rev-8394web(4).jpg'
        className='ui fluid image header-bg'

      />
      <div className='header-text white-text'>
        <div>{text}</div>
      </div>   
    </Container>
  )
}