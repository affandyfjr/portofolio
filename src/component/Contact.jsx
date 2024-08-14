import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center h-full my-5 sm:h-[70vh] items-center">
      <div className="max-w-[1200px] mx-auto">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around">
              <h1 className="text-4xl sm:text-5xl text-white">
                Contact<span> Me</span>
              </h1>
              <p className="text-normal text-lg font-medium text-gray-400 mt-2">
                Ayo semangat belajar coding <br /> dengan melihat tutorial di
                Youtube
              </p>
              <div className="flex items-center mt-2 text-gray-400">
                {/* <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round'></svg> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
