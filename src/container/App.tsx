import React, { Fragment } from 'react';

import { Stateless, Stateful, Hooks } from '../components';

const App = () => {
  return (
    <Fragment>
      <Stateless age={24} />
      <Stateful isMarried={false} />
      <Hooks />
    </Fragment>
  );
};

export default App;
