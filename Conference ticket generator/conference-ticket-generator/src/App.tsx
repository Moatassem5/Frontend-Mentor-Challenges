function App() {
  return (
    <>
      <div className=" flex relative mx-auto my-48 w-[800px] px-36 py-20 rounded-lg bg-teal-100  ">
        <button className=" delay-20 transition-all ease-in-out group focus:outline-none focus:ring focus:ring-blue-600 absolute left-[-15px] bottom-10 bg-cyan-400 rounded-full p-4 hover:bg-blue-800 hover:translate-x-[-4px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#03045e"
            class="size-6 group-hover:stroke-slate-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            />
          </svg>
        </button>
        <button className=" ease-in-out focus:outline-none focus:ring focus:ring-blue-600 group absolute right-[-15px] bottom-10 bg-cyan-400 rounded-full p-4 hover:bg-blue-800 transition-all hover:delay-20 hover:translate-x-[4px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#03045e "
            class="size-6 group-hover:stroke-slate-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default App;
