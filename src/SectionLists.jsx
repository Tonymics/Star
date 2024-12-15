import StarRating from './StarRating';
import PropTypes from 'prop-types';

function SectionLists(props) {
  const {name, rating} = props
  
  const TOTAL = 5;
  return (
    <section>
      <h2>{name}</h2>
      <p>
        Rating: {rating} / {TOTAL}
      </p>
      <StarRating rating={rating} />
    </section>
  );
}

SectionLists.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default SectionLists;
