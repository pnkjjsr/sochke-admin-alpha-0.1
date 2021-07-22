import * as React from "react";
import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";

const CreateForm = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="nameShort" />
        <NumberInput source="position" />
      </SimpleForm>
    </Create>
  );
};

export default CreateForm;
