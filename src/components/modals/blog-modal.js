import React, { Component } from "react";
import ReactModal from "react-modal";

import BlogForm from "../blog/blog-form";
import Blog from "../pages/blog";

export default class BlogModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReactModal
        onRequestClose={() => {
          this.props.handleModalClose();
        }}
        isOpen={this.props.modalIsOpen}
      >
        <BlogForm />
      </ReactModal>
    );
  }
}
