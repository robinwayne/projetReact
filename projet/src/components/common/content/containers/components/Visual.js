import React, { Component } from 'react';

class Visual extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {
      let render_visual;


      switch(this.props.onlyContent){


        //on affiche toutes les proprietes
        case true:  
            render_visual=(
                <div className="Content">
                  <h2> On affiche tous les parametres ! </h2>
                  <img src={this.props.src}/>
                  <h4> ID </h4>
                  <h6> {this.props.id} </h6>
                  <h4> TITRE </h4>
                  <h6> {this.props.title}</h6>
                  <h4> TYPE </h4>
                  <h6> {this.props.type}</h6>
                </div>
            );
            break;

     
        //on affiche seulement le visuel
        case false: 
            render_visual=(

        
                <div className="Content">
                    <img src={this.props.src}/>
                </div>
            );
            break;
            
  }  
  return(
    <div className="Content">
        {
          render_visual
        }
    </div>
    )

  }
}

export default Visual;