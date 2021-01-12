import { Component } from 'react'

export default class ShowImg extends Component {
  props: any;
  render() {
    console.log(this.props)
    return (
      <img height="150px" src={`/uploads/${this.props?.record?.params?.["img.key"]}`} alt={this.props?.record?.params?.["img.key"]}/>
    )
  }
}