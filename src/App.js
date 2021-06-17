import * as React from "react";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider
} from "react-admin-firebase";
import { Admin, Resource } from "react-admin";

import { firebaseConfig as config } from './configs/firebaseConfig';

import { Dashboard } from './layout/dashboard';
import CustomLoginPage from './components/CustomLoginPage';

import { PostList, PostShow, PostCreate, PostEdit } from "./collections/opinions/posts";
import users from "./collections/users"

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
        <Resource
          name="opinions"
          list={PostList}
          show={PostShow}
          create={PostCreate}
          edit={PostEdit}
        />

        <Resource name="users" {...users} />
      </Admin>

    );
  }
}

export default App;
