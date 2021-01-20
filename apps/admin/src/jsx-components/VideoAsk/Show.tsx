import { flat, ShowPropertyProps } from 'admin-bro';
import { Component } from 'react'
import { VideoaskResponseContactDto } from './types';



export default class Show extends Component {
  props: ShowPropertyProps;
  render() {
    const { property, record } = this.props;
    const data:VideoaskResponseContactDto = flat.get(record.params, property.propertyPath);
    console.log(this.props)
    return (
      <div>
        <p>{property.label}</p>
        {/* <p>{JSON.stringify(data)}</p> */}
        {data.answers.map(item=>(
          <div key={`user-answer-${item.answer_id}`}>
            <video width="480" controls poster={item.gif}>
              <source src={item.media_url} type="video/mp4"/>
              Your browser doesn't support HTML5 video tag.
            </video>
          </div>
        ))}
      </div>
    )
  }
}