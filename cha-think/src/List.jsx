import React from "react";
import CreateReview from "./CreateReview";
import Review from "./Review";

function List(props) {
  // const [items, setItems] = useState([]);
  // const [fetchItems, setFetchItems] = useState(false);

  return (
    <div>
      <CreateReview fetchItems={fetchItems} setFetchItems={setFetchItems} />
      {items.map((item) => (
        <Review
          key={item.id}
          item={item}
          fetchItems={fetchItems}
          setFetchItems={setFetchItems}
        />
      ))}
    </div>
  );
}
export default List;
