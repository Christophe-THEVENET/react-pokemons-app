import React from 'react';

const Card = () => {
  return (
    <div className="row">
      <div className="col s12 m5">
        <div className="card-panel teal row ">
          <div className="col s6">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt=""
            />
          </div>
          <div className="col s6">
            <div className="row">
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
