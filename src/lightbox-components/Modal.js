import React, { Component } from "react";

import Lightbox from "./Lightbox";

export { default as Lightbox } from "./Lightbox";

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export default class extends Component {
  state = { modalOpen: false };

  toggleModal = () => {
    this.setState((prev) => ({
      modalOpen: !prev.modalOpen,
    }));
  };

  render() {
    const {
      className,
      small,
      smallSrcSet,
      medium,
      large,
      alt,
      hideDownload,
      hideZoom,
      showRotate,
      imageBackgroundColor,
      height,
      width,
    } = this.props;
    const { modalOpen } = this.state;

    return (
      <span>
        <img
          id={uid()}
          className={className}
          style={{
            cursor: "pointer",
            width: width,
            maxHeight: height,
            padding: 0,
          }}
          onClick={this.toggleModal}
          src={small}
          srcSet={smallSrcSet}
          alt={alt}
        />
        {modalOpen && (
          <Lightbox
            id={uid()}
            medium={medium}
            large={large}
            alt={alt}
            onClose={this.toggleModal}
            hideDownload={true}
            hideZoom={hideZoom}
            showRotate={showRotate}
            imageBackgroundColor={imageBackgroundColor}
          />
        )}
      </span>
    );
  }
}
