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
                    alt= {<span><h3>{i.caption}</h3><h4>{i.subcaption}</h4></span>}
                    width = {"" + i.width / i.height / denom * 100 + "%"}
                />
            )
        })
    })

    var mobileobjects = []

    images.map((row) => {
      var denom = row.reduce((a, b) => a +  (b.width / b.height), 0)
      
      row.forEach((i) => {
          if (!i.large_file){
              i.large_file = i.file
          }
          mobileobjects.push(
              <Img
                  small={i.file}
                  large={i.large_file}
                  alt= {<span><h3>{i.caption}</h3><h4>{i.subcaption}</h4></span>}
                  width = {"100%"}
              />
          )
      })
  })

    return (
      <div>
        <div className = "desktop-only">
          {objects}
        </div>
        <div className = "mobile-only">
          {mobileobjects}
        </div>
      </div>
    );
  }
}