import React from 'react';

import Hack from '../../hoc/Hack';
import classes from './Layout.css';


const layout = (props) => {
  return (
    <Hack>
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