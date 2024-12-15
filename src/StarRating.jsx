import { range } from './util';
import PropTypes from 'prop-types';

function StarRating({ rating }) {

    function Star (){
      return (
        <div className="star-wrapper">
          <img
            key={crypto.randomUUID()}
            alt=""
            className="gold-star"
            src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
          />
        </div>
      );
}

  return(
   <div className="star-wrapper">
    {range(rating).map((_, index) => (
      <Star key={index} />
    ))}
    </div>
  );
}
StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;

