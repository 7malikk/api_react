import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProfileModal = ({ user }) => {
  const [result, setresult] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const myUser = user.find((user) => Number(user.id) === Number(+id));
    setresult(myUser);
  }, [user, id]);
  return (
    <>
      <section className="grid place-items-center md:p-5  mx-auto ">
        {result && (
          <section className="p-10 m:2 md:m-10 md:p-20 text-black bg-[#F2F7F8] rounded-md shadow-lg">
            <div className="py-2 text-4xl md:text-6xl">{result.name}</div>
            <div className="py-2 text-lg ">{result.company.catchPhrase}</div>

            <div className="text-xl font-bold p-3">General Info</div>
            <div className="columns-1 md:columns-2 mt-4">
              <div className="py-2">
                {' '}
                <span className="font-bold px-1">Username: </span>{' '}
                {result.username}
              </div>
              <div className="py-2">
                <span className="font-bold px-1">Email: </span> {result.email}
              </div>
              <div className="py-2">
                <span className="font-bold px-1"> Address:</span>{' '}
                {result.address.street}
              </div>

              <div className="py-2">
                {' '}
                <span className="font-bold px-1"> City: </span>{' '}
                {result.address.city}
              </div>
              <div className="py-2">
                {' '}
                <span className="font-bold px-1"> Zipcode:</span>{' '}
                {result.address.zipcode}
              </div>

              <div className="py-2">
                {' '}
                <span className="font-bold px-1">Phone Number: </span>{' '}
                {result.phone}
              </div>
              <div className="py-2">
                {' '}
                <span className="font-bold px-1"> Website: </span>{' '}
                {result.website}
              </div>
              <div className="py-2">
                {' '}
                <span className="font-bold px-1"> Company name : </span>{' '}
                {result.company.name}
              </div>
            </div>
            <div className="mt-4 px-1">
              <Link to="/" className="mt-3 p-3 bg-black text-white">
                Back
              </Link>
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default ProfileModal;
