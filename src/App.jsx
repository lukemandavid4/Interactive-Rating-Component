import React, { useState } from "react";
import star from "./assets/icon-star.svg";
import result from "./assets/illustration-thank-you.svg";

const App = () => {
  const [open, setOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);

  const handleClick = () => {
    if (selectedRating !== null) {
      setOpen(true);
    } else {
      alert("Please select a rating before submitting!");
    }
  };

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <main className="flex items-center justify-center h-[100vh] bg-darkerBlue">
      <div
        className={`flex flex-col gap-[1rem] w-[20rem] p-[2rem] bg-darkBlue rounded-[1rem] text-primaryWhite bg-[linear-gradient(#252d37,_#121417)] shadow-xl ${
          open ? "hidden" : "flex"
        }`}
      >
        <div className="bg-darkBlue p-[0.5rem] w-fit rounded-[50%] shadow-2xl">
          <img src={star} alt="star" className="w-[0.8rem]" />
        </div>
        <div>
          <h1 className="text-[1.1rem]">How did we do?</h1>
          <p className="text-lightGrey text-[0.8rem]">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="text-lightGrey flex justify-between">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              className={`bg-darkBlue size-[2rem] text-[0.8rem] rounded-[50%] hover:bg-orange hover:text-darkerBlue focus:bg-primaryWhite focus:text-darkerBlue [transition:background_,0.3s] ${
                selectedRating === rating
                  ? "bg-primaryWhite text-darkerBlue"
                  : ""
              }`}
              onClick={() => handleRatingClick(rating)}
            >
              {rating}
            </button>
          ))}
        </div>
        <div>
          <button
            onClick={handleClick}
            className="bg-orange text-darkerBlue text-[0.7rem] font-extrabold w-full py-[0.5rem] rounded-[50vw] tracking-widest hover:bg-primaryWhite [transition:background_,0.3s]"
          >
            SUBMIT
          </button>
        </div>
      </div>
      <div
        className={`flex flex-col gap-[1.5rem] w-[20rem] p-[2rem] bg-darkBlue rounded-[1rem] text-primaryWhite bg-[linear-gradient(#252d37,_#121417)] shadow-xl ${
          open ? "flex" : "hidden"
        }`}
      >
        <div className="flex justify-center">
          <img src={result} alt="result" className="w-[6rem]" />
        </div>
        <div className="py-[0.3rem] mx-auto px-[1rem] bg-darkBlue flex justify-center w-fit rounded-[50vw]">
          <p className="text-orange text-[0.7rem]">
            You selected {selectedRating} out of 5
          </p>
        </div>
        <div>
          <h1 className="text-[1.1rem] text-center">Thank you!</h1>
          <p className="text-lightGrey text-[0.8rem] text-center">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;
