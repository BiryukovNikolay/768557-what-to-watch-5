import React, {PureComponent, Fragment, createRef} from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
    this.onMouseOutHandler = this.onMouseOutHandler.bind(this);
  }

  onMouseOverHandler() {
    this._isPlaing = true;
    setTimeout(() => {
      if (this._isPlaing) {
        this._videoRef.current.play();
      }
    }, 1000);
  }

  onMouseOutHandler() {
    this._videoRef.current.pause();
    this._isPlaing = false;
    this._videoRef.current.load();
  }

  componentDidMount() {
    const videoElement = this._videoRef.current;
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
    const {movie} = this.props;
    const {poster, video} = movie;

    return (
      <Fragment>
        <Link to='/dev-move'>
          <video
            ref={this._videoRef}
            src={video}
            poster={poster}
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
