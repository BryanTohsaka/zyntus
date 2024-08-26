import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <div className="">
      <div className="w-screen h-screen">
        <div className="w-full h-full flex justify-center items-end md:items-center ">
          <section className="absolute text-center lg:text-left pb-10 md:pb-0 lg:w-2/4 lg:left-2 lg:ml-20 z-10">
            <h1 className="text-anti-flash font-bold text-5xl lg:text-7xl">¡Dale vida a tu visión digital!</h1>
            <p className="text-anti-flash my-10 px-5 lg:px-0  text-xl font-medium">
            Transformamos ideas en soluciones digitales que impulsan el crecimiento de las <span className="text-caribean font-extrabold">PYMES</span>. Desde la creación de sitios web hasta estrategias de marketing digital, te ayudamos a destacar en el mundo online."
            </p>
            <a href="" className="bg-anti-flash px-5 py-3 rounded-lg text-lg font-medium">
            Agenda una consulta gratuita
            </a>
          </section>
          <Spline scene="https://prod.spline.design/zPqMhK3uvD3rI9lE/scene.splinecode" className=" absolute" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
