/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component } from 'react'
import { FormGroup, Button } from '@admin-bro/design-system'
import { EditPropertyProps, flat } from 'admin-bro';

export default class EditTestData extends Component{
  props: EditPropertyProps;

  clear = ()=>{
    this.props.onChange(this.props.property.path, "");
    if(this.props.property.propertyPath === "logic_test_data"){
      this.props.onChange("logic_test_correct_answers", 0);
    }
  }

  render(){
    const { property, record } = this.props;
    const data = flat.get(record.params, property.propertyPath);
    const error = record.errors?.[property.path];
    
    return (
      <FormGroup error={Boolean(error)}>
        <p>{property.label}</p>
        <p>{JSON.stringify(data)}</p>
        <Button type="button" onClick={this.clear}>
          Clear
        </Button>
        <p style={{color: "red"}}>{error && error.message}</p>
      </FormGroup>
    )
  }
}