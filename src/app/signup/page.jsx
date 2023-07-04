import Image from "next/image";
import MSP_Logo from "resources/Maistudypal_logo.png";
import Link from "next/link";
import GoogleLogo from "resources/google.svg";
import OutlookLogo from "resources/outlook.svg";

const SignunPage = () => {
  return (
    <>
      <main className="flex justify-center flex-col items-center">
        <Link href="/"><Image className="mt-20" src={MSP_Logo} alt="Logo"/></Link>
        <div className="mt-14 card w-[34.375rem] h-[42.185rem] mx-auto bg-white shadow-lg text-primary-content">
          <div className="card-body pl-15 flex justify-start items-start">
            <h2 className="card-title text-black text-3xl font-semibold">
              Sign Up
            </h2>
            <div className="text-black font-semibold">
              Get your MaiStudyPal account!
            </div>
            <div>
              <div className="card-actions mt-10 flex items-center justify-center">
                <div className="btn normal-case w-96 h-10 bg-white hover:border-neutral-600 hover:bg-white rounded-lg border border-neutral-200 flex justify-center items-center">
                  <Image src={GoogleLogo} alt="Google" />
                  <span className="text-black pl-4">Sign Up with Google</span>
                </div>
                <div className="mt-2.5 normal-case btn w-96 h-10 bg-white hover:border-neutral-600 hover:bg-white rounded-lg border border-neutral-200 flex justify-center items-center">
                  <Image src={OutlookLogo} alt="Outlook" />
                  <span className="text-black pl-4">Sign Up with Outlook</span>
                </div>
              </div>
              <div className="mt-[3.25rem] card-actions flex justify-center items-center relative">
                <input
                  className="input w-96 h-10 border border-gray-200 text-black"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="mt-2.5 input w-96 h-10 border border-gray-200 text-black"
                  type="text"
                  placeholder="Username"
                />
                <input
                  className="mt-2.5 input w-96 h-10 border border-gray-200 text-black"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="mt-8 card-actions flex justify-center items-center">
                <div className="w-96 h-12 bg-violet-500 rounded-lg border border-neutral-300 gap-2.5 btn normal-case hover:bg-prd-grad-to text-white font-medium">
                  Sign Up
                </div>
                <div>
                  <span className="text-black text-[12px] font-normal leading-tight">
                    By proceeding you acknowledge that you have read, understood{" "}
                    <br />
                    and agree to our{" "}
                  </span>
                  <span className="text-black text-[12px] font-normal underline leading-tight">
                    Terms and Conditions.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 pb-32">
          <span className="text-neutral-700 font-normal">
            Already have an account?{" "}
          </span>
          <Link
            className="text-neutral-700 font-semibold link link-hover"
            href="/signin"
          >
            Sign In
          </Link>
        </div>
      </main>
    </>
  );
};

export default SignunPage;
