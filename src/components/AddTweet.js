import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

export class AddTweet extends Component {
  constructor(props) {
    super(props);
  this.state = {
    formIsValid: true,
    tweet: this.props.newTweet,
    image: this.props.newImage,
    errors: {},
    pictures: []
  }
  this.handleValidation = this.handleValidation.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.onDrop = this.onDrop.bind(this);
}

onDrop(pictureFiles, pictureDataURLs) {
  this.setState({
          pictures: this.state.pictures.concat(pictureFiles),
      });
    }
  handleValidation() {
    let errors = {};
    let valid = true;
    //Tweet
    if(!this.state.tweet){
      valid = false;
      errors["tweet"] = "Tweet cannot be empty";
    }
    this.setState({errors: errors});
    this.setState({formIsValid: valid});
  }

  handleSubmit() {
    // this.handleValidation();
    if (this.state.formIsValid) 
    {this.props.createTweet};
    // else {
    //   alert("error");
    // }
  }
  render() {
    const {maxLength} = 255;
    return (
      <div className={`modal ${this.props.open ? 'active' : null}`}>
        <div className="modal-overlay"></div>
        <div className="modal-container">
          <div className="modal-header">
            <button
              onClick={this.props.close}
              className="btn btn-clear float-right"></button>
            <div className="modal-title">
              <h4>Add a Tweet</h4>
            </div>
          </div>
          <div className="modal-body">
            <div className="content">
              <form>
                <div className="form-group">
                  <label className="form-label">What's on your mind?</label>
                  <input
                    ref="tweet"
                    value={this.state.tweet}
                    onChange={this.props.onNewTweet}
                    className="form-input"
                    type="text"
                    placeholder="It's a beautiful day and I'm lying in bed" />
                    { this.state.tweet ? (
                    <div>
                        ({ maxLength - this.state.tweet.length }/{ maxLength })
                    </div>
                ) : null }
                   <span className="error">{this.state.errors["tweet"]}</span>
                </div>
                {/* <div>
                <ImageUploader
                	withIcon={true}
                	buttonText='Choose images'
                	onChange={this.props.onNewImage}
                	imgExtension={['.jpg', '.gif', '.png', '.gif']}
                	maxFileSize={5242880}
            />
                  </div> */}
                <div className="form-group">
                  <label className="form-label">Attached an image!</label>
                  <input
                    value={this.state.image}
                    onChange={this.props.onNewImage}
                    className="form-input"
                    type="file"
                    placeholder="image.jpg" />
                </div>


              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={this.props.createTweet}
              className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTweet;
