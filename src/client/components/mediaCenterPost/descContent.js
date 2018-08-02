import React ,{ Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className='content-thirdSection'>
        <p>{this.props.desc}</p>
      </div>


    )
  }
}




export default Content;
