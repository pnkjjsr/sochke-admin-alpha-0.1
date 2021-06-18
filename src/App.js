import * as React from "react";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider
} from "react-admin-firebase";
import { Admin, Resource } from "react-admin";

import { firebaseConfig as config } from './configs/firebaseConfig';

import { Dashboard } from './layout/dashboard';
import CustomLoginPage from './components/CustomLoginPage';

import users from "./collections/users"
import ministers from "./collections/ministers"

const options = {}

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

class App extends React.Component {
  render() {
    return (
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        loginPage={CustomLoginPage}
        dashboard={Dashboard}
      >
        <Resource name="users" {...users} />
        <Resource name="ministers" {...ministers} />
      </Admin>

    );
  }
}

export default App;
