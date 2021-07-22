import * as React from "react";
import { Datagrid, Filter, TextField, List, SearchInput } from "react-admin";

const LeaderTypesFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="name" alwaysOn />
  </Filter>
);

const ListData = (props) => {
  return (
    <List perPage={15} {...props} filters={<LeaderTypesFilter />}>
      <Datagrid optimized rowClick="edit">
        <TextField source="id" />
        <TextField source="position" />
        <TextField source="name" />
        <TextField source="nameShort" />
      </Datagrid>
    </List>
  );
};

export default ListData;
