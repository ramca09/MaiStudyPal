import Image from "next/image";
import GridGroup_r from "resources/rightgrid.svg";
import GridGroup_l from "resources/leftgrid.svg";

const LandingPage = () => {
  return (
    <main>
      <div className="absolute right-5 hidden lg:flex">
        <Image src={GridGroup_r} alt="Grid_R" />
      </div>
      <div className="absolute left-5 hidden lg:flex">
        <Image src={GridGroup_l} alt="Grid_R" />
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-full">
            <h1 className="lg:text-8xl font-bold">Supercharge your</h1>
            <h1 className="lg:text-8xl font-bold">Productivity</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

{/* <p className="py-6">
Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
excepturi exercitationem quasi. In deleniti eaque aut repudiandae
et a id nisi.
</p> */}

export default LandingPage;
