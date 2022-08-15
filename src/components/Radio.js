import React from "react";
import { Formik, Field, Form, useFormikContext } from "formik";


const Radio = (props) => {
    const { values, setFieldValue } = useFormikContext();
  
    const value = values[props.name];
  
    React.useEffect(() => {
      setFieldValue(props.name, value);
    }, [props, value, setFieldValue]);
  
    return (
      <div style={{ width: '100%' }}>
        <div role="group" aria-labelledby="my-radio-group" style={{
    display: 'flex',
    // 'flexDirection': 'column',
    'justifyContent': 'space-evenly',
}}>
          {props.items.map((item) => (
            <label style={{
              'display': 'flex',
              'flexDirection': 'column',
              'alignItems': 'center',
            }}key={item}>
              <Field
                key={item}
                type="radio"
                name={props.name}
                value={item}
                checked={value == item}
                style={{'marginBottom': '5px'}}
              />
              {item}
            </label>
          ))}
        </div>
      </div>
    );
  };

export default Radio;