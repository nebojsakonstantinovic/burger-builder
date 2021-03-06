import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './conteners/BurgerBuilder/BugerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
