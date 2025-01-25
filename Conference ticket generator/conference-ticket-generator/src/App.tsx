import Header from "./components/Header";
// We will split the website layers into 3 layers
// [1- For Background] , [2- For SVG's], [3- For Content]
function App() {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Backround Layer (z-index:-20) */}
        <div className="fixed inset-0 -z-20">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/assets/images/background-desktop.png"
            />
            <source
              media="(min-width: 640px)"
              srcSet="/assets/images/background-tablet.png"
            />
            <img
              src="/assets/images/background-mobile.png"
              alt="background"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
        {/* -------------------------------------- */}
        {/* SVG Layer (z-index:-10) */}
        <div className="fixed inset-0 -z-10">
          <img
            src="/assets/images/pattern-lines.svg"
            className="w-full lg:h-[1000px]"
          />
          <img
            src="/assets/images/pattern-squiggly-line-top.svg"
            className="absolute top-0 mt-6 right-0"
          />
          <img
            src="/assets/images/pattern-circle.svg"
            className="absolute right-[100px] top-[300px] w-[80px] sm:top-[250px] sm:right-8 sm:w-[120px] lg:w-[200px] lg:top-[500px]"
          />
          <img
            src="/assets/images/pattern-squiggly-line-bottom.svg"
            className="absolute bottom-[10%] left-2 lg:bottom-[-50px] lg:left-7 lg:w-[500px] md:w-[600px] sm:w-[500px] sm:bottom-[-100px]"
          />
        </div>
        <div className="relative z-10">
          <Header />
        </div>
      </div>
      {/* Styles for lg: absolute bottom-[-400px] */}
    </>
  );
}

export default App;
