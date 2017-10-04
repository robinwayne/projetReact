import React from 'react';
import './main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as contentMapTmp from '../../source/contentMap.json';
import Content from '../common/content/containers/Content';


export default class Main extends React.Component{
 constructor(props) {
 super(props);

 this.state = {
 contentMap:contentMapTmp,
 }
 }

 render() {
 return (

 <div className='container-fluid height-100'>
 <div className="row height-100">
 <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
 </div>
<div className='col-md-6 col-lg-6 height-100'>
 </div>
<div className='col-md-3 col-lg-3 height-100'>
 </div>
 	<Content 
 		id="1" 
 		src="https://www.metzjudo.com/wp-content/uploads/images/articles/perenoel.jpg" 
 		type="img" 
 		title="Oh oh oh !!!"
 		onlyContent={true} 

 	/>
 </div>
 </div>
 );
 }
}

