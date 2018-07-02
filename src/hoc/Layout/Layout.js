import React, { Component } from 'react';

import Hack from '../Hack/Hack';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrower: false,
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrower: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrower: !prevState.showSideDrower}
    }); 
  }

  drowerToggleClicked

  render () {
    return (
      <Hack>
        <Toolbar drowerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrower}/>
        <div>
          Toolbar, SideDrawer, BackDrop
        </div>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Hack>
    )
  }
}


export default Layout;