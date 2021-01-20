import { ValueGroup } from '@admin-bro/design-system';
import { flat, ShowPropertyProps } from 'admin-bro';
import { Component } from 'react';

type TestItem = {
  id: any;
  title: string;
  answers: Array<{
    id: string;
    title: string;
  }>
}

export default class ShowImg extends Component {
  props: ShowPropertyProps;
  render() {
    console.log(this.props);
    const { property, record } = this.props;
    const data:TestItem[] = flat.get(record.params,  property.propertyPath);
    return (
      <ValueGroup label={property.label}>
        {/* {JSON.stringify(data)} */}
        <ul style={{listStyleType: "circle", paddingLeft: "1rem"}}>
          {data && data.map(item=>(
            <li key={`${property.propertyPath}-${item.id}`}>
              <p>{item.title}</p>
              <ul style={{listStyleType: "square", paddingLeft: "1rem"}}>
                {item.answers.map(answer=>(
                  <li key={`${property.propertyPath}-answer-${item.id}-${answer.id}`}>
                    {answer.title}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </ValueGroup>
    )
  }
}