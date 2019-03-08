import React from 'react';
import { Container, Menu, Grid } from 'semantic-ui-react';

export default class Middle extends React.Component {
  render() {
    const itemStyle1 = { color: '#5d9732', fontSize: '14px' };
    return (

        <Menu borderless className="middle">
          <Grid centered container>
            <Menu.Item position='center' style={itemStyle1}>FIND YOUR NEAREST LOCATION</Menu.Item>
          </Grid>
        </Menu>
    );
  }
}
