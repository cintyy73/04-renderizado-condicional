/* eslint-disable react/prop-types */
import Card from "./Card";

const ListTernario = ({ dogs }) => {
  return (
    <div>
      {!dogs ? (
        <p>no hay data</p>
      ) : (
        <div>
          {dogs.map((element) => (
            <Card key={element.id} element={element} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListTernario;
