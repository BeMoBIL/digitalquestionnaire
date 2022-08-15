import ReactDOM from "react-dom";
import React from "react";
import { Formik, Field, Form, useFormikContext } from "formik";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { default as Page } from "./questionnaires/SociodemographicAndHealthVR_de";
import './style.css'
import { createRoot } from 'react-dom/client';

const questionnaireName = 'SociodemographicAndHealthVR_de';

serviceWorkerRegistration.register();

const downloadAsCsv = values => {
  const participantId = values[0]
  
  const items = [values]
  const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
  const header = Object.keys(items[0])
  const csv = [
    header.join(','), // header row first
    ...items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
  ].join('\r\n')

  function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
  download(csv, `questionnaireanswers-${participantId}-${questionnaireName}.csv`, "text/csv");
}

const FormPage = () => {
  const string_submit = `Einreichen`
  
  if (!Page().props.children) throw 'No or one child!'
    var tures = Page()
        .props.children.map((child) => typeof child.type !== "string")
        .filter((child) => child)
        .map((filtered) => "");
  var formItemId = 0;

  const transformedPage = Page().props.children.map((child) => {
    if (typeof child.type !== "string") {
      var cloned = React.cloneElement(child, { name: formItemId, key: formItemId });
      formItemId += 1;
      return cloned;
    }
    return child;
  });

  return (
    <Formik
      initialValues={{ ...tures }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        // alert(JSON.stringify(values, null, 2));
        console.log(JSON.stringify(values, null, 2));
        
        downloadAsCsv(values)
      }}
    >
      {({ values }) => (
        <Form autocomplete="off">
          {transformedPage}
          <button style={{margin: '32px 0px'}}type="submit">{string_submit}</button>
        </Form>
      )}
    </Formik>
  );
};

const container = document.getElementById("root")
// ReactDOM.render(<FormPage />, container);
const root =  createRoot(container)
root.render(<FormPage />)