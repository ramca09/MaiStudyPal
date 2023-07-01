import Image from "next/image";
import WindowFrameSvg from "resources/WindowFrame.svg";
import Videoframe from "resources/videoframe.svg";

const WindowFrame = () => {
  return (
    <div className="pt-24 relative">
      <Image
        className="absolute top-42 left-0.1"
        src={Videoframe}
        alt="WindowFrame"
      />
      <Image src={WindowFrameSvg} alt="WindowFrame" />
      <div className="absolute top-42 left-0.1 bg-black opacity-50 rounded-b-[2rem]">
        <svg
          width="1234"
          height="708"
          viewBox="0 0 1234 708"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H1233V683C1233 697.912 1220.91 710 1206 710H27C12.0883 710 0 697.912 0 683V0Z"
            fill="black"
            fill-opacity="0.15"
          />
        </svg>
        {/* <div className="w-48 h-48 bg-blue-600 bg-opacity-10 rounded-full" /> */}
      </div>
    </div>
  );
};

export default WindowFrame;
