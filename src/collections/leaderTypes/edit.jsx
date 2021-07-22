import * as React from "react";
import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";

const EditForm = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="name" />
        <TextInput source="nameShort" />
        <NumberInput source="position" />
      </SimpleForm>
    </Edit>
  );
};

export default EditForm;
