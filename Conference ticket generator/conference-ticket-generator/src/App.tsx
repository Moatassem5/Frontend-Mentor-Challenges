function App() {
  return (
    <>
      <div className="relative min-h-screen">
        <img
          src="./public/assets/images/pattern-lines.svg"
          className="w-full -z-10 lg:(w-full h-[1000px]) "
        />
      </div>
      <div className="absolute top-0 mt-6 right-0">
        <img
          src="./public/assets/images/pattern-squiggly-line-top.svg"
          className="-z-10 "
        />
      </div>
      <div className="absolute right-[100px] top-[300px] w-[80px] sm:top-[250px] sm:right-8 sm:w-[120px] lg:w-[300px] lg:top-[500px]">
        <img
          src="./public/assets/images/pattern-circle.svg"
          className="-z-10"
        />
      </div>
      {/* Styles for lg: absolute bottom-[-400px] */}
      <div className="absolute bottom-[10%] left-2 lg:bottom-[-400px] lg:left-7 lg:w-[700px] md:w-[600px] sm:w-[500px] sm:bottom-[-100px] ">
        <img
          src="./public/assets/images/pattern-squiggly-line-bottom.svg"
          className=" w-full"
        />
      </div>
    </>
  );
}

export default App;
