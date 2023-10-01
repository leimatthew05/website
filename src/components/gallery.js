import React, { Component } from "react";
import Img from '../lightbox-components/Modal'

export default class Gallery extends Component {
  state = { modalOpen: false };


  render() {
    const {
      images
    } = this.props;
    
    var objects = []

    images.map((row) => {
        var denom = row.reduce((a, b) => a +  (b.width / b.height), 0)
        
        row.forEach((i) => {
            if (!i.large_file){
                i.large_file = i.file
            }
            objects.push(
                <Img
                    small={i.file}
                    large={i.large_file}
                    alt= {<span><h2>{i.caption}</h2><h3>{i.subcaption}</h3></span>}
                    width = {"" + i.width / i.height / denom * 100 + "%"}
                />
            )
        })
    })

    return (
      <div>
        {objects}
      </div>
    );
  }
}