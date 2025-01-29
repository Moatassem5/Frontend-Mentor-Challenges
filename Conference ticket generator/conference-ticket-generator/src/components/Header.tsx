const Header = function () {
  return (
    <>
      <img
        src="./public/assets/images/logo-full.svg"
        className="mx-auto mt-7 w-[40%]  md:w-[15%]"
        alt="Logo"
      />

      <h1 className="text-white font-bold text-balance text-[30px] lg:text-[50px] md:text-[35px] mt-10 text-center md:leading-[3.3rem]">
        Your Journey to Coding Conf <br /> 2025 Starts Here!
      </h1>

      <p className="mb-10 text-neutral-200 text-center text-balance mt-7 font-light md:text-[20px]">
        Secure your spot at next year's biggest coding conference.
      </p>
    </>
  );
};

export default Header;
