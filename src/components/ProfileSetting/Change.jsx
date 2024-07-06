import React, { useState } from "react";

const Change = () => {

  const [name, setName] = useState("");
  const [nameVisibility, setNameVisibility] = useState("hidden");
  const [selectedVisibility, setSelectedVisibility] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const toggleVisibility = () => {
    setNameVisibility(nameVisibility === "hidden" ? "visible" : "hidden");
  };

  const handleClose = () => {
    setNameVisibility("hidden");
    setName(""); // Clear the name input when closing
  };

  const handleOptionChange = (option) => {
    const index = selectedVisibility.indexOf(option);
    if (index === -1) {
      setSelectedVisibility([...selectedVisibility, option]);
    } else {
      setSelectedVisibility(
        selectedVisibility.filter((item) => item !== option)
      );
    }
  };

  return (
    <div className="flex items-center my-3 justify-between">
    <p className="my-[15px] text-[14px] text-[#6f7f92] font-normal italic">
      This field can be seen by :{" "}
      <span className="text-[#07142e] font-bold">
        {selectedVisibility.join(", ")}
      </span>
    </p>
    {/* Gender */}
    <div className="bg-gray-100 rounded-lg shadow-md">
      {/* Change button to show/hide name input */}
      <button
        onClick={toggleVisibility}
        className={`bg-[#f07a3a] text-[14px] sm:text-[16px] Plus  py-[3px] px-[5px] text-white rounded-md shadow-md outline-none ${
          nameVisibility === "visible" ? "hidden" : "block"
        }`}
      >
        Change
      </button>

      {/* Visible input with checkboxes */}
      <div
        className={`mt-4 p-[20px] ${
          nameVisibility === "hidden" ? "hidden" : "block"
        }`}
      >
        <label className="block text-sm font-medium text-gray-700">
          Select Visibility:
        </label>
        <div className="flex flex-row gap-[20px] p-5">
          <label className="inline-flex items-center mt-2">
            <input
              name="checkbox"
              value="Everyone"
              type="checkbox"
              checked={selectedVisibility.includes("Everyone")}
              onChange={() => handleOptionChange("Everyone")}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">Everyone</span>
          </label>
          <label className="inline-flex items-center mt-2">
            <input
              value="my friend"
              type="checkbox"
              name="checkbox"
              checked={selectedVisibility.includes(
                "My Friends"
              )}
              onChange={() => handleOptionChange("My Friends")}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">My Friends</span>
          </label>
          <label className="inline-flex items-center mt-2">
            <input
              value="only me"
              name="checkbox"
              type="checkbox"
              checked={selectedVisibility.includes("Only Me")}
              onChange={() => handleOptionChange("Only Me")}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">Only Me</span>
          </label>
        </div>
        <button
          onClick={handleClose}
          className="bg-[#f07a3a] text-[14px] sm:text-[16px] Plus  py-[3px] px-[5px] text-white rounded-md shadow-md outline-none"
        >
          Close
        </button>
      </div>
    </div>
  </div>
  
  )
}


export default Change 
