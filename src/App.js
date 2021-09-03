import React from 'react';
// signin account
// import Form from './form/Form';

// print form data
// import MultipleInput from './MultipleInput';

// Router page
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './route/Login';
import Profile from './route/Profile';

function App() {
  return (
    <div>
      {/* just print the data */}
      {/* <MultipleInput /> */}

      {/* ur accnt are create */}
      {/* <Form /> */}

      <h5>You want run Router, add /login in link like that:</h5>
      <p>http://localhost:3000/login</p>
      <br />
      <h5>And for profile</h5>
      <p>http://localhost:3000/profile</p>
      <Router>
        <Switch>
          <Route exact path='/login' component={() => <Login />} />
          <Route path='/profile'> <Profile /> </Route>

          {/* authorized is false, it restricted profile page for not open afetr login  */}
          {/* <Route path='/profile'> <Profile authorized={false} /> </Route> */}
        </Switch>
      </Router>
    </div>
  )
}
export default App;