import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-[#1C1D1F] text-[#CAC7C7] flex justify-center">
        <div className="mt-6 space-x-12 lg:grid lg:grid-cols-4 lg:gap-x-36 lg:space-x-0">
          <div className="mt-6 space-y-12 lg:grid lg:grid-rows-2 lg:gap-x-16 lg:space-y-0">
            <span className="footer-title">MAISTUDYPAL</span>
            <Link href="/about" className="link link-hover">
              About
            </Link>
            <Link href="/subscription" className="link link-hover">
              Subscription
            </Link>
          </div>
          <div className="mt-6 space-y-12 lg:grid lg:grid-rows-3 lg:gap-x-16 lg:space-y-0">
            <span className="footer-title">TOOLS</span>
            <Link href="/summarizer" className="link link-hover">
              AI summarizer
            </Link>
            <Link href="/wassistant" className="link link-hover">
              AI Writing Assistant
            </Link>
            <Link href="/chatbot" className="link link-hover">
              AI Chatbot
            </Link>
          </div>
          <div className="mt-6 space-y-12 lg:grid lg:grid-rows-2 lg:gap-x-16 lg:space-y-0">
            <span className="footer-title">SUPPORT</span>
            <Link href="/help" className="link link-hover">
              Help
            </Link>
            <Link href="#" className="link link-hover">
              Contact Us
            </Link>
          </div>
          <div className="mt-6 space-y-12 lg:grid lg:grid-rows-1 lg:gap-x-16 lg:space-y-0">
            <span className="footer-title">SUPERCHARGE PRODUCTIVITY</span>
            <div className="space-x-5">
              <button className="btn btn-sm border-gray-300 bg-[#1C1D1F] text-[#CAC7C7] font-normal normal-case hover:bg-gray-800">
                Sign In
              </button>
              <button className="btn btn-sm bg-purple-500 text-white font-normal normal-case hover:bg-prd-grad-to">
                Sign up for free
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-[#1C1D1F] border-base-300 text-[#CAC7C7]">
        <div className="items-center grid-flow-col">
          <p>© 2023 MaiStudyPal. All rights reserved</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <p>Terms and Conditions • Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
