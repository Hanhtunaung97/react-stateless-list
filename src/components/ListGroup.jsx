import React from "react";
import List from "./List";

const ListGroup = () => {
  const Games = [
    {
      id: 1,
      name: "GTA SanAndres",
      stock: 8,
    },
    {
      id: 2,
      name: "Resident Evil 4",
      stock: 9,
    },
    {
      id: 3,
      name: "PES Football",
      stock: 4,
    },
    {
      id: 4,
      name: "DJ Fight",
      stock: 6,
    },
    {
      id: 5,
      name: "Smart Down",
      stock: 3,
    },
  ];
  return (
    <ul>
      {Games.map(({ id, name, stock }) => (
        <List id={id} name={name} stock={stock} key={id} />
      ))}
    </ul>
  );
};

export default ListGroup;
