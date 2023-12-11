import React, { useState } from "react";
import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

function ShortUrlTab() {
  const [generatedShortUrl, setGeneratedShortUrl] = useState(null);
  const [shortUrl, setShortUrl] = useState({
    longurl: "",
    backurl: null,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(shortUrl);
    try {
      const response = await axios
        .post(`${baseUrl}/shorturl`, shortUrl, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          const result = res.data;
          setGeneratedShortUrl(result.short);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (e) => {
    setShortUrl({
      ...shortUrl,
      [e.target.id]: e.target.value,
    });
  };

  const loaction = window.location.origin;
  return (
    <div className="flex flex-col px-8 py-6  md:px-[400px] ">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow px-3  md:px-[50px] py-3 rounded-md"
      >
        {generatedShortUrl ? (
          <div className="mt-4 flex items-center gap-2 border border-primary p-3 rounded-md bg-primaryLight/100 mb-4  text-center">
            <p className="text-lightBlack/75 text-base md:text-lg">
              Your shorturl:
            </p>
            <a
              className="  text-primary text-lg font-medium"
              href={`${loaction}/l/${generatedShortUrl}`}
            >
              {" "}
              {loaction}/l/{generatedShortUrl}
            </a>
          </div>
        ) : null}
        <h2 className="text-3xl m-1 text-lightBlack font-bold">
          Shorten a long link
        </h2>

        <div>
          <label
            htmlFor="longurl"
            className="block text-xl font-medium text-black"
          >
            {" "}
            Paste a long URL{" "}
          </label>

          <input
            type="text"
            id="longurl"
            name="longurl"
            onChange={handleChange}
            value={shortUrl.longurl}
            required
            placeholder="Example: https://www.google.com/"
            className=" w-full rounded-md border-grey mt-2 p-3 text-lg shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          />
          <label
            htmlFor="backurl"
            className="mt-4  block text-xl font-medium text-black"
          >
            {" "}
            Enter a back-half (optional){" "}
          </label>

          <input
            type="text"
            id="backurl"
            name="backurl"
            value={shortUrl.backurl}
            onChange={handleChange}
            placeholder="Example: my-fav-page"
            className=" w-full rounded-md border-grey mt-2 p-3 text-lg shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 rounded-md bg-secondary text-white text-lg mt-4 mb-4"
        >
          Get your Link now
        </button>
      </form>
    </div>
  );
}

export default ShortUrlTab;
