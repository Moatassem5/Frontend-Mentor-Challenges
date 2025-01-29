interface HeaderProps {
  isFormSubmitted: boolean;
  fullName?: string;
  emailAddress?: string;
}

const Header = function ({
  isFormSubmitted,
  fullName,
  emailAddress,
}: HeaderProps) {
  if (isFormSubmitted) {
    return (
      <>
        <img
          src="./public/assets/images/logo-full.svg"
          className="mx-auto mt-7 w-[40%] md:w-[15%]"
          alt="Logo"
        />

        <h1 className="text-white font-bold text-balance text-[30px] lg:text-[50px] md:text-[35px] mt-10 text-center md:leading-[3.3rem]">
          Congrats,{" "}
          <span className=" bg-gradient-to-r from-orange-400 to-white text-transparent bg-clip-text">
            {fullName}
          </span>
          ! Your ticket is ready.
        </h1>

        <p className="mb-10 text-neutral-200 text-center text-balance mt-7 font-light md:text-[20px]">
          We've Emailed your ticket to{" "}
          <span className="bg-gradient-to-r from-orange-400 to-white text-transparent bg-clip-text font-bold">
            {emailAddress}
          </span>{" "}
          and will send updates in the run up to the event.
        </p>
      </>
    );
  }

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
