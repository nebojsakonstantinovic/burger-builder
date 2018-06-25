import React, { Component,Fragment } from 'react';

import Hack from '../../hoc/Hack';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

 class BugerBuilder extends Component {

  state= {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Fragment>
    )
  }
}

export default BugerBuilder;