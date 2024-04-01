function Dog(props) {
  return (
        <div className="dogs-container">
          <img
            src={props.img}
            alt="images"
            style={{ width: "150px", height: "150px" }}
          />
          <p>{props.msg}</p>
        </div>
  );
}

export default Dog;
