import PropTypes from "prop-types";

export const filmPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  wallpaper: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  countReiewvs: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  runTime: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(
      PropTypes.string
  )
});
