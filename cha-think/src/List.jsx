import React from "react";
import CreateReview from "./CreateReview";
import Review from "./Review";

function List(props) {
  return (
    <div>
      <CreateReview
        fetchItems={props.fetchItems}
        setFetchItems={props.setFetchItems}
        type={props.type}
      />
      {props.items.map((item) => (
        <Review
          type={props.type}
          key={item.id}
          item={item}
          fetchItems={props.fetchItems}
          setFetchItems={props.setFetchItems}
        />
      ))}
    </div>
  );
}
export default List;
