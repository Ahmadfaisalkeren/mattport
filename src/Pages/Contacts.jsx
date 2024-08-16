import React from "react";
import { FiSend } from "react-icons/fi";

const Contacts = () => {
  return (
    <div className="container mx-auto py-9">
      <h1 className="text-center text-2xl font-bold">Contact</h1>
      <p className="text-center font-medium mb-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        quam.
      </p>
      <div className="p-5 md:p-0 lg:p-0">
        <div className="mx-auto w-full md:w-[400px] border border-secondary shadow-sm rounded-md p-6">
          <form>
            <div className="mb-4">
              <label
                className="block text-primary text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow-sm border rounded w-full py-2 px-3 text-primary"
                id="name"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-primary text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow-sm border rounded w-full py-2 px-3 text-primary"
                id="email"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-primary text-sm font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="shadow-sm border rounded w-full py-2 px-3 text-primary"
                id="subject"
                type="text"
                placeholder="Enter Your Subject"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-primary text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                rows={5}
                className="shadow-sm border rounded w-full py-2 px-3 text-primary"
                id="message"
                placeholder="Enter Your Message"
              />
            </div>
            <div className="flex justify-end">
              <button className="flex px-2 py-1 rounded-md bg-secondary text-quaternary hover:bg-quaternary hover:text-secondary duration-300 hover:border hover:border-secondary">
                <FiSend size={18} className="mt-1" />
                <span className="ml-1">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
