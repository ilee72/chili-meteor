import React from 'react';
import TopMenu from '../components/TopMenu';
import Middle from '../components/Middle';

export default class Chili extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <Middle/>
        </div>
    );
  }
}
