import React, {PureComponent, Fragment, createRef} from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isLoading: true,
      timeOut: ``
    };

    this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
    this.onMouseOutHandler = this.onMouseOutHandler.bind(this);
  }

  onMouseOverHandler() {
    const timeOutId = setTimeout(() => {
      this._videoRef.current.play();
    }, 1000);
    this.setState({
      timeOut: timeOutId,
    });
  }

  onMouseOutHandler() {
    const timeOutId = this.state.timeOut;
    clearTimeout(timeOutId);
    this._videoRef.current.pause();
    this.setState({
      timeOut: ``,
    });
  }

  componentDidMount() {
    const {movie} = this.props;
    const {poster, video} = movie;
    const videoElement = this._videoRef.current;

    videoElement.src = video;
    videoElement.poster = poster;
    videoElement.volume = 0;

    videoElement.oncanplaythrough = () => this.setState({
      isLoading: false,
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.oncanplaythrough = null;
  }

  render() {
    return (
      <Fragment>
        <Link to='/dev-move'>
          <video
            ref={this._videoRef}
            onMouseOver={this.onMouseOverHandler}
            onMouseOut={this.onMouseOutHandler}
            className="small-movie-card__image"
          >
          </video>
        </Link>
      </Fragment>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    video.load();
  }
}

VideoPlayer.propTypes = {
  movie: PropTypes.shape({
    video: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })
};
