const Products = ({ items }) => {
  return (
    <>
      {items.map((elem, index) => (
        <div className="col-lg-4" key={index}>
          <div className="cards" style={{ width: "18rem" }}>
            <img src={elem.image} className="card-img" alt="..." />
            <div className="card-body">
              <p>{elem.price}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
