// in src/posts.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="opinion" alwaysOn />
  </Filter>
);

export const PostList = (props) => {
  return (
    <List {...props} filters={<PostFilter />}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="opinion" />
        <TextField source="createdate" />
        <ShowButton label="Detail" />
        <EditButton label="Edit" />
        <DeleteButton label="" redirect={false} />
      </Datagrid>
    </List>
  )
};

export const PostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="opinion" />
    </SimpleShowLayout>
  </Show>
);

export const PostCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="opinion" />
    </SimpleForm>
  </Create>
);

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="opinion" />
    </SimpleForm>
  </Edit>
);

export default PostList;