import React, { useState } from "react";
import QRtab from "./QRtab";
import ShortUrlTab from "./ShortUrlTab";

function MainForm() {
  const [activeTab, setActiveTab] = useState("shortUrl");
  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="inline-flex rounded-lg border border-lightGrey bg-lightGrey p-1">
          <button
            onClick={() => handleActiveTab("shortUrl")}
            className={`inline-flex items-center gap-2 rounded-md px-8 py-2 text-lg ${
              activeTab === "shortUrl"
                ? "bg-white text-secondary hover:text-secondary"
                : "text-grey hover:text-secondary focus:relative"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-link"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            Short URL
          </button>

          <button
            onClick={() => handleActiveTab("qrCode")}
            className={`inline-flex items-center gap-2 rounded-md px-8 py-2 text-lg ${
              activeTab === "qrCode"
                ? "bg-white text-secondary hover:text-secondary"
                : "text-grey hover:text-secondary focus:relative"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-qr-code"
            >
              <rect width="5" height="5" x="3" y="3" rx="1" />
              <rect width="5" height="5" x="16" y="3" rx="1" />
              <rect width="5" height="5" x="3" y="16" rx="1" />
              <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
              <path d="M21 21v.01" />
              <path d="M12 7v3a2 2 0 0 1-2 2H7" />
              <path d="M3 12h.01" />
              <path d="M12 3h.01" />
              <path d="M12 16v.01" />
              <path d="M16 12h1" />
              <path d="M21 12v.01" />
              <path d="M12 21v-1" />
            </svg>
            QR Code
          </button>
        </div>
      </div>

      {activeTab === "shortUrl" && <ShortUrlTab />}
      {activeTab === "qrCode" && <QRtab />}
    </div>
  );
}

export default MainForm;
