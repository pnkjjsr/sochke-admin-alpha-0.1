import * as React from "react";
import {
  Datagrid,
  DateField,
  Filter,
  TextField,
  List,
  SearchInput,
} from "react-admin";

const UserFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="name" alwaysOn />
  </Filter>
);

const UserList = (props) => {
  return (
    <List perPage={15} {...props} filters={<UserFilter />}>
      <Datagrid optimized rowClick="edit">
        <TextField source="id" />
        <DateField source="createdAt" />
        <TextField source="displayName" />
        <TextField source="email" />
        <TextField source="userType" />
        {/* <ShowButton label="Detail" /> */}
        {/* <EditButton label="Edit" /> */}
        {/* <DeleteButton label="" redirect={false} /> */}
      </Datagrid>
    </List>
  );
};

export default UserList;
