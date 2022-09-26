export const Button = ({ onLoadMore }) => {
  return (
    <div className="container-btn">
      <button type="button" className="Button" onClick={onLoadMore}>
        load more
      </button>
    </div>
  );
};
