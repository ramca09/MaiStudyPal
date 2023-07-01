import Image from "next/image";
import WindowFrameSvg from "resources/WindowFrame.svg";
import Videoframe from "resources/videoframe.svg";

const Part3 = () => {
  return (
    <div className="hero min-h-screen py-28 bg-base-150">
      <div className="hero-content text-center">
        <div className="max-w-full">
          <div>AI Summarizer</div>
        </div>
        <div className="max-w-full">
          <div className="relative">
            <div className="h-[40.81rem] w-[40.81rem] rounded-full bg-gradient-radial from-purple-300 to-white opacity-75 blur-3xl"></div>
            {/* <Image
              className="absolute top-16 left-0.1"
              src={Videoframe}
              alt="WindowFrame"
            />
            <Image src={WindowFrameSvg} alt="WindowFrame" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
