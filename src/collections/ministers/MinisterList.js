// in src/posts.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Filter,
  TextField,
  TextInput,
  ShowButton,
  DeleteButton,
} from "react-admin";

const MinisterFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);

export const MinisterList = (props) => {
  return (
    <List perPage={15} {...props} filters={<MinisterFilter />}>
      <Datagrid optimized rowClick="edit">
        <TextField source="id" />
        <TextField source="createdAt" />
        <TextField source="name" />
        <TextField source="partyShort" />
        <TextField source="year" />
        <TextField source="winner" />

        {/* <ShowButton label="Detail" /> */}
        {/* <EditButton label="Edit" /> */}
        {/* <DeleteButton label="" redirect={false} /> */}
      </Datagrid>
    </List>
  )
};

export default MinisterList;