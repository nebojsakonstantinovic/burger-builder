import React from 'react';
import classes from './Modal.css';
import Hack from '../../../hoc/Hack';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  return (
    <Hack>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
      >
        {props.children}
      </div>
    </Hack>
  )
}

export default modal;