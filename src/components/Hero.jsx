import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <div className="">
      <div className="w-screen h-screen">
        <div className="w-full h-full flex justify-center items-end md:items-center">
          <section className="absolute text-center pb-10 md:pb-0">
            <h1 className="text-anti-flash font-bold text-5xl lg:text-7xl">¡Dale vida a tu visión digital!</h1>
            <p className="text-anti-flash my-10 px-5 lg:px-60 text-xl font-medium">
              Creemos en crear experiencias web que no solo sean funcionales, sino también <span className="text-caribean font-semibold">vibrantes y memorables.</span> Con nuestro toque único de elementos 3D, transformamos tus ideas en realidades que destacan y emocionan.
              <br /> <br />
              ¡Únete a nosotros y lleva tu proyecto al siguiente nivel!"
            </p>
            <a href="" className="bg-anti-flash px-5 py-3 rounded-lg text-lg font-medium">
            Agenda una consulta gratuita
            </a>
          </section>

          <Spline scene="https://prod.spline.design/zPqMhK3uvD3rI9lE/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
