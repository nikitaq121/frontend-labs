import React from "react";

const Image = ({ index, counter, lastElementRef }) => {
  return (
    <div className="my-city-photo">
      <img
        ref={index === counter - 1 ? lastElementRef : null}
        id={`salz-img-${index + 1}`}
        width="600"
        alt="salzburg"
        src="https://www.urlaubstracker.de/wp-content/uploads/2016/12/salzburg_winter_nacht-1000x667.jpg"
      />
    </div>
  );
};

export default Image;