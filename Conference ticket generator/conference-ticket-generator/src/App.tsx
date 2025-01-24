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
      <div className="absolute  right-[270px] top-[450px]">
        <img
          src="./public/assets/images/pattern-circle.svg"
          className="-z-10"
        />
      </div>
      <div className="absolute bottom-[-400px] left-5 ">
        <img
          src="./public/assets/images/pattern-squiggly-line-bottom.svg"
          className=" w-full"
        />
      </div>
    </>
  );
}

export default App;
