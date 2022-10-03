import React, { useState, useEffect } from "react";
import { ChevronRightIcon, CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { FormInput } from "../component";

const initialState = { eventName: "", hostName: "", startDate: "", endDate: "", image: "" };

const CreateEvent = () => {
  const [formDetails, setFormDetails] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [eventDetails, setEventDetails] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { eventName, hostName, startDate, endDate, image } = formDetails;

    if (eventName && hostName && startDate && endDate && image) {
      localStorage.setItem("eventDetails", JSON.stringify({ ...formDetails }));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("eventDetails")) {
      return setEventDetails(JSON.parse(localStorage.getItem("eventDetails")));
    }
  }, []);

  return (
    <div className="bg-[#F6F2FF] h-screen flex items-center justify-center text-black">
      {eventDetails && eventDetails ? (
        <div className="flex justify-between items-start max-w-[80%] mx-auto">
          <div className="flex-1">
            <h1 className="text-[48px] font-bold text-primary">{formDetails.eventName}</h1>
            <p>Hosted by {formDetails.hostName}</p>

            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="bg-[#fff] shadow rounded-lg w-fit p-2 text-primary-purple">
                    <CalendarDaysIcon className="w-8" />
                  </div>
                  <div>
                    <p className="text-primary font-bold">18 August 6:00PM</p>
                    <p className="text-[#4F4F4F]">
                      to <span className="font-semibold">19 August 1:00PM </span>UTC +10
                    </p>
                  </div>
                </div>

                <ChevronRightIcon className="w-6 text-[#BDBDBD]" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="bg-[#fff] shadow rounded-lg w-fit p-2 text-primary-purple">
                    <MapPinIcon className="w-8" />
                  </div>
                  <div>
                    <p className="text-primary font-bold">Street name</p>
                    <p className="text-[#4F4F4F]">Suburb, State, Postcode</p>
                  </div>
                </div>

                <ChevronRightIcon className="w-6 text-[#BDBDBD]" />
              </div>
            </div>
          </div>
          <div>
            <img src="/birthday.png" className="w-96" />
          </div>
        </div>
      ) : (
        <div className="">
          <h1 className="text-primary">Yah! You have no event yet. Start by Creating one</h1>
          <img src="/event.png" className="w-60 mx-auto rounded-lg my-5" />
          <label
            htmlFor="my-modal-3"
            className="btn modal-button mt-6 bg-gradient-to-r from-[#8456EC] via-purple-500 to-[#E87BF8] rounded-lg py-3 px-14 text-[#fff] mt-10"
          >
            create event
          </label>

          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
                ✕
              </label>
              <h3 className="text-lg font-bold mb-5">Create Event</h3>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <FormInput
                    name="eventName"
                    label="Event Name"
                    handleChange={handleChange}
                    type="text"
                    formDetails={formDetails}
                  />
                  <FormInput
                    name="hostName"
                    label="Host Name"
                    handleChange={handleChange}
                    type="text"
                    formDetails={formDetails}
                  />
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-4 mt-5">
                  <FormInput
                    name="startDate"
                    label="Start Date"
                    handleChange={handleChange}
                    type="date"
                    formDetails={formDetails}
                  />
                  <FormInput
                    name="endDate"
                    label="End Date"
                    handleChange={handleChange}
                    type="date"
                    formDetails={formDetails}
                  />
                </div>

                <div className="mt-5">
                  <FormInput
                    name="image"
                    label="Add event image"
                    handleChange={handleChange}
                    type="file"
                    formDetails={formDetails}
                  />
                </div>

                <div className="mt-10 text-center mx-auto">
                  <button className={`${loading && "loading"} btn btn-block btn-primary`} type="submit">
                    {loading ? "" : "Create Event"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateEvent;
