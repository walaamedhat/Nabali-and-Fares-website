import React, {Component} from 'react';

class Feature extends Component {
    render(){return (
        <div className='projectpage__feature'>
            <img src={this.props.Image}/>
            <div>
                <span>{this.props.Title}</span>
                <p>{this.props.Paragraph}</p>
            </div>
        </div>
        )
    }
}

export default Feature;