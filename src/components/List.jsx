import React from "react";

const List = ({id,name,stock}) => {
    // console.log(props);
    const backGroundColor=stock <=5 ? 'bg-red-100 border-red-300':'border-gray-300 bg-gray-100'
  return <div className= {`font-mono font-semibold mb-3 p-2 border-s-4 ${backGroundColor}`}>
    { ` ${stock} ${name}`}
  </div>;
};

export default List;
