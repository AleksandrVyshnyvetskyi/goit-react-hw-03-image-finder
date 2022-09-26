import PropTypes from 'prop-types';

export const Button = ({ loadMore }) => {
  return (
    <div className="container-btn">
      <button onClick={loadMore} type="button" className="Button">
        load more
      </button>
    </div>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func,
};
