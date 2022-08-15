import React from "react";
import { Formik, Field, Form, useFormikContext } from "formik";


const RadioWithInputOption = (props) => {
    const { values, setFieldValue } = useFormikContext();
  
    const value = values[props.name];

    const items = props.items;

    let inputFieldValue = '';
  
    React.useEffect(() => {
      console.log(value)
      if (items.indexOf(value) + 1 == items.length) {
        setFieldValue(props.name, '');        
      }
      else if (items.indexOf(value) == -1) {
        setFieldValue(props.name, value);
      }
      else {
        setFieldValue(props.name, value);
      }
    }, [props, value, setFieldValue]);
  
    return (
      <div style={{ width: '100%' }}>
        <div role="group" aria-labelledby="my-radio-group" style={{
    display: 'flex',
    'flexDirection': 'column',
    'justifyContent': 'space-evenly',
}}>
          {props.items.map((item) => (
            <label key={item}>
              <Field
                key={item}
                type="radio"
                name={props.name}
                value={item}
                checked={items.indexOf(value) == -1 ? items.length - 1 : value == item  }
                // style={{'marginBottom': '5px'}}
              />
              {item}
            </label>
          ))}
          <Field name={props.name}/>
        </div>
      </div>
    );
  };

export default RadioWithInputOption;