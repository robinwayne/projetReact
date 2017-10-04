import React, { Component } from 'react';

import Visual from './components/Visual';


class Content extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);  

        this.state={
        	id:this.props.id,
        	src:this.props.src,
        	type:this.props.type,
        	title:this.props.title,
        	onlyContent:this.props.onlyContent


        }      
    }
  

  	render() {
	
		return(
  		<div> 
  			<Visual 
  				type={this.props.type} 
                src={this.props.src}
                id={this.props.id}
                title={this.props.title}
                onlyContent={this.props.onlyContent} 
  			/>
  		</div>
    );	
    
  }
}


export default Content;