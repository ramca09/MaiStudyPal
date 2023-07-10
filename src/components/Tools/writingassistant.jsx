"use client";
import { ToolHeader } from "components/Navbar";
import { useState } from "react";

const WritingAssistant = () => {
  const [status, setStatus] = useState({});

  return (
    <>
      <div className="flex h-screen">
        {/* -- Main Content -- */}
        <div className="flex flex-col flex-1">
          <ToolHeader type="wassistant" id="navbar-summarizer" />
          {/* <!-- Main Content Area --> */}
          <main className="flex bg-gray-100 flex-1">
            {/* main content */}
            <div className="w-3/4 flex-1 bg-gray-100 p-6 relative flex justify-center items-center flex-col">
              <div className="w-3/4 relative rounded-md shadow flex items-start justify-start flex-col">
                <div className="text-neutral-500 font-normal mt-3 ml-6">
                  Tools
                </div>
                <div className="flex ml-6 mt-4">
                  <label
                    onClick={() => {
                      setStatus({ ...status, rephrase: !status.rephrase });
                    }}
                    className="bg-white w-24 h-12 cursor-pointer rounded-lg border border-neutral-300 justify-center items-center gap-2.5 inline-flex"
                  >
                    Rephrase
                  </label>
                  <svg
                    className="ml-6 mt-1.5"
                    width="3"
                    height="37"
                    viewBox="0 0 3 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.5 0V36.5" stroke="#D2D2D2" strokeWidth="2" />
                  </svg>
                  <label className="ml-6 bg-white w-24 h-12 cursor-pointer rounded-lg border border-neutral-300 justify-center items-center gap-2.5 inline-flex">
                    Casual
                  </label>
                  <label className="ml-6 bg-white w-24 h-12 cursor-pointer rounded-lg border border-neutral-300 justify-center items-center gap-2.5 inline-flex">
                    Formal
                  </label>
                  <label className="ml-6 bg-white w-24 h-12 cursor-pointer rounded-lg border border-neutral-300 justify-center items-center gap-2.5 inline-flex">
                    Creative
                  </label>
                  <label className="ml-6 bg-white w-24 h-12 cursor-pointer rounded-lg border border-neutral-300 justify-center items-center gap-2.5 inline-flex">
                    Simple
                  </label>
                  <svg
                    className="ml-6 mt-1.5"
                    width="3"
                    height="37"
                    viewBox="0 0 3 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.5 0V36.5" stroke="#D2D2D2" strokeWidth="2" />
                  </svg>
                  <label className="ml-6 bg-white w-24 h-12 cursor-pointer rounded-lg border border-neutral-300 justify-center items-center gap-2.5 inline-flex">
                    Expand
                  </label>
                  <label className="ml-6 bg-white w-24 h-12 cursor-pointer rounded-lg border border-neutral-300 justify-center items-center gap-2.5 inline-flex">
                    Shorten
                  </label>
                </div>
                <div className="mt-4 flex justify-center items-center w-full">
                  <div className="w-1/2 h-[28.56rem] border border-t-zinc-300 border-r-zinc-300">
                    <textarea className="w-full h-full resize-none p-5"></textarea>
                  </div>
                  <div className="w-1/2 h-[28.56rem] border border-t-zinc-300">
                    <textarea className="w-full h-full resize-none p-5"></textarea>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-3/4 mt-4">
                <span className="justify-start">21 Sentences • 121 Words</span>
                <span className="flex items-center">
                  <svg
                    className="mr-2"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="4" fill="#8C52FF" />
                  </svg>
                  Changed Word
                  <svg
                    className="ml-4 mr-2"
                    width="16"
                    height="2"
                    viewBox="0 0 16 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.5 1H16" stroke="#FFD01F" strokeWidth="2" />
                  </svg>
                  Structural Changes
                </span>
              </div>
            </div>
            {/* pdf viewer */}
            <div
              className="w-1/4 sidebar-shadow h-full border-none relative"
              hidden={false}
            >
              <div className="flex justify-between w-full">
                <span className="ml-3 mt-3 text-2xl font-bold flex justify-center items-center">
                  <svg
                    className="w-8 h-8 text-black fill-white rounded-none"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0952 33.3333H33.3333M29.5238 12.381L31.4285 14.2857M32.3809 7.61905C32.7562 7.99421 33.0539 8.43963 33.257 8.92987C33.4601 9.4201 33.5646 9.94555 33.5646 10.4762C33.5646 11.0068 33.4601 11.5323 33.257 12.0225C33.0539 12.5127 32.7562 12.9582 32.3809 13.3333L14.2857 31.4286L6.66663 33.3333L8.57139 25.821L26.6742 7.62667C27.3878 6.90966 28.3448 6.48717 29.3554 6.44306C30.366 6.39895 31.3562 6.73646 32.1295 7.38857L32.3809 7.61905Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  &nbsp;Grammar Checker
                </span>
                <span className="mr-3 mt-3">✕</span>
              </div>
              <div className="flex w-10/12 shadow mt-10 ml-8 flex-col">
                <div className="flex mt-2">
                  <div className="w-[15px] h-[18px] bg-red-500 bg-opacity-30" />
                  <div className="ml-2 font-semibold leading-none text-neutral-500">Replace with</div>
                </div>
                <div className="flex mt-2 ml-6">recommends spending,</div>
                <div className="flex justify-end items-center p-3">
                    <button className="btn normal-case border border-gray-500">Ignore</button>
                    <button className="btn normal-case border border-gray-500 ml-2 bg-prd-grad-from text-white">Replace</button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default WritingAssistant;
