const Controls = ({ handleLoad }) => {
  return (
    <div className="text-center">
      <button
        type="button"
        className="btn btn-primary"
        style={{ width: "100px", textAlign: "center" }}
        onClick={handleLoad}
      >
        Loadmore
      </button>
    </div>
  );
};

export default Controls;
