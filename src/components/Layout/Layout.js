import React from 'react';

import Hack from '../../hoc/Hack';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => {
  return (
    <Hack>
      <Toolbar />
      <SideDrawer />
      <div>
        Toolbar, SideDrawer, BackDrop
      </div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Hack>
  )
}


export default layout;