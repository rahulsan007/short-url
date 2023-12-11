import React, { useState } from "react";

function QRtab() {
  const [qrCode, setQrCode] = useState({
    longUrl: "",
  });
  const [qrCodeImg, setQrCodeImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(qrCode);
    if (qrCode) {
      let response = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qrCode.longUrl}`;
      setQrCodeImg(response);
    }
  };

  const handleChange = (e) => {
    setQrCode({
      ...qrCode,
      [e.target.id]: e.target.value,
    });
  };

  const handleDownload = () => {
    const link = document.createElement("a");

    // Create a Blob from the image data
    fetch(qrCodeImg)
      .then((response) => response.blob())
      .then((blob) => {
        const objectURL = URL.createObjectURL(blob);

        // Set the anchor link attributes
        link.href = objectURL;
        link.download = "your_qr_code.png"; // You can set a custom filename here
        link.click();

        // Clean up the object URL after the download
        URL.revokeObjectURL(objectURL);
      })
      .catch((error) => {
        console.error("Error downloading QR Code:", error);
      });
  };
  return (
    <div className="flex flex-col px-8 py-6  md:px-[400px] ">
      <form
        className="bg-white shadow px-3  md:px-[50px] py-3 rounded-md"
        onSubmit={handleSubmit}
      >
        {qrCodeImg ? (
          <div className="mt-4 flex flex-col items-center gap-2 border border-primary p-3 rounded-md bg-primaryLight/100 mb-4  text-center">
            <p className="text-lightBlack/75 text-base md:text-lg">
              Your QR Code:
            </p>
            <img src={qrCodeImg} className="w-32 h-32" alt="" />
            <button
              onClick={handleDownload}
              className="px-6 py-3 rounded-md bg-secondary text-white text-lg mt-4"
            >
              Download
            </button>
          </div>
        ) : null}
        <h2 className="text-3xl m-1 text-lightBlack font-bold">
          Create a QR Code
        </h2>

        <div>
          <label
            htmlFor="LongUrl"
            className="block text-xl font-medium text-black"
          >
            {" "}
            Enter your QR Code destination{" "}
          </label>

          <input
            type="text"
            id="longUrl"
            name="longUrl"
            required
            value={qrCode.longUrl}
            onChange={handleChange}
            placeholder="Example: https://www.google.com/"
            className=" w-full rounded-md border-grey mt-2 p-3 text-lg shadow-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 rounded-md bg-secondary text-white text-lg mt-4 mb-4"
        >
          Get your QR now
        </button>
      </form>
    </div>
  );
}

export default QRtab;
