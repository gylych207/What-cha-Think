import React from "react";
import CreateReview from "./CreateReview";
import Review from "./Review";

function List(props) {
  // const [items, setItems] = useState([]);
  // const [fetchItems, setFetchItems] = useState(false);

  return (
    <div>
      <CreateReview
        fetchItems={props.fetchItems}
        setFetchItems={props.setFetchItems}
      />
      {props.items.map((item) => (
        <Review
          key={props.item.id}
          item={props.item}
          fetchItems={props.fetchItems}
          setFetchItems={props.setFetchItems}
        />
      ))}
    </div>
  );
}
export default List;
