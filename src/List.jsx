import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ myData }) => {
  return (
    <section className="flex  flex-col items-center text-center bg-black w-full h-screen text-white">
      <div className="p-4 ">List of Profiles</div>
      <div>
        {myData.map((e) => (
          <Link to={`/profile/${e.id}`}>
            <div
              className="border-2 rounded-full p-2 m-2 hover:text-black hover:bg-white hover:border-black"
              key={e.id}>
              {e.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default List;
