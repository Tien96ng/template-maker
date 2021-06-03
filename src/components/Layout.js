import React from 'react';

import { Container } from 'semantic-ui-react';

export default function Layout({children}) {
  return(
    <Container>
      {children}
    </Container>
  )
};