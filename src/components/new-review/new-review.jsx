import React, {PureComponent} from "react";

class NewReview extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: 3,
      textValue: ``,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  handleRatingChange(evt) {
    const {value} = evt.target;
    this.setState({rating: value});
  }

  handleTextChange(evt) {
    const {value} = evt.target;
    this.setState({textValue: value});
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        action="#"
        className="add-review__form"
      >
        <div className="rating">
          <div className="rating__stars">
            <input
              className="rating__input"
              id="star-1"
              type="radio"
              name="rating"
              defaultValue={1}
              onChange={this.handleRatingChange}
            />
            <label className="rating__label" htmlFor="star-1">
              Rating 1
            </label>
            <input
              className="rating__input"
              id="star-2"
              type="radio"
              name="rating"
              defaultValue={2}
              onChange={this.handleRatingChange}
            />
            <label className="rating__label" htmlFor="star-2">
              Rating 2
            </label>
            <input
              className="rating__input"
              id="star-3"
              type="radio"
              name="rating"
              defaultValue={3}
              defaultChecked
              onChange={this.handleRatingChange}
            />
            <label className="rating__label" htmlFor="star-3">
              Rating 3
            </label>
            <input
              className="rating__input"
              id="star-4"
              type="radio"
              name="rating"
              defaultValue={4}
              onChange={this.handleRatingChange}
            />
            <label className="rating__label" htmlFor="star-4">
              Rating 4
            </label>
            <input
              className="rating__input"
              id="star-5"
              type="radio"
              name="rating"
              defaultValue={5}
              onChange={this.handleRatingChange}
            />
            <label className="rating__label" htmlFor="star-5">
              Rating 5
            </label>
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            defaultValue={``}
            onChange={this.handleTextChange}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default NewReview;
