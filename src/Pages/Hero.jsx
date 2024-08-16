import React from "react";
import imgProfile from "../Assets/profile.jpg";

const Hero = () => {
  return (
    <>
      <div className="mx-auto container py-5 px-2">
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 md:col-span-1">
            <div className="">
              <img
                src={imgProfile}
                alt="Invalid Image"
                className="mx-auto w-72 h-72 rounded-full border border-primary"
              />
              <p className="text-center mt-2 font-semibold">
                Photo by{" "}
                <a
                  target="_blank"
                  className="text-secondary"
                  href="https://unsplash.com/@ashtonbingham?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                >
                  Ashton Bingham
                </a>{" "}
                on{" "}
                <a
                  target="_blank"
                  className="text-secondary"
                  href="https://unsplash.com/photos/man-in-black-formal-suit-wearing-eyeglasses-EQFtEzJGERg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                >
                  Unsplash
                </a>
              </p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 items-center flex p-4">
            <div>
              <h1 className="text-4xl font-bold text-primary">Hi, I'm Matt!</h1>
              <h2 className="text-base font-semibold text-primare text-justify mt-2">
                A Frontend Web Developer is a highly skilled professional
                responsible for creating the visual and interactive aspects of
                websites and web applications. They focus on building user
                interfaces (UI) and user experiences (UX) that are not only
                visually appealing but also functional, responsive, and
                accessible.
              </h2>
              <button className="px-2 py-1 rounded-md bg-primary hover:bg-quaternary hover:border hover:border-primary hover:text-primary text-quaternary duration-300 mt-4">
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
