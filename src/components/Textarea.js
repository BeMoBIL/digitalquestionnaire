import React from "react";
import { Formik, Field, Form, useFormikContext } from "formik";


const Textarea = (props) => {
  const { values, setFieldValue } = useFormikContext();
  
  const value = values[props.name];

  React.useEffect(() => {
    setFieldValue(props.name, value);
  }, [props, value, setFieldValue]);

  return <Field as="textarea" name={props.name} value={value} style={{width: '90%'}} rows="4"/>
}

export default Textarea