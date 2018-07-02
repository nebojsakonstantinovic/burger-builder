import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Hack from '../../../hoc/Hack/Hack';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }

  return (
    <Hack>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        < Logo height="11%" width="50" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Hack>
  )
}

export default sideDrawer;