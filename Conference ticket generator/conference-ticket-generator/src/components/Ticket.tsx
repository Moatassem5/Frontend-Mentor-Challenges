// We will make a wrapper before the SVG the wrapper will be positioned relative , and the background will be the relative one
// Then we got the content in absloute Positioning form

interface TicketProps {
  fullName: string;
  githubUsername: string;
  image: File | null;
}

const TicketComponent = function ({
  fullName,
  githubUsername,
  image,
}: TicketProps) {
  // After Every Submit this Function will be called to Generate A random Number
  let random_num = Math.floor(Math.random() * 100000);
  const imageUrl = image
    ? URL.createObjectURL(image)
    : "/assets/images/logo-mark.svg";

  return (
    <>
      <div className="relative mx-auto mt-4 lg:mt-16 w-full md:mt-24 md:w-[600px]">
        {/* Background Layer */}
        <img
          className="w-full"
          src="./public/assets/images/pattern-ticket.svg"
          alt="Ticket Shape"
        />
        {/* Content Layer */}
        <div className="Ticket-content absolute inset-0 p-4 sm:p-6 md:p-8">
          <div className="header-logo flex items-center gap-3">
            <img
              src="./public/assets/images/logo-mark.svg"
              alt="Company-Logo"
            />
            <p className="text-white font-bold text-[25px] md:text-[40px]">
              Coding Conf
            </p>
          </div>
          <p className="text-neutral-300 ml-12 md:ml-14">
            Feb 31, 2025 / Austin, TX
          </p>

          <main className="text-red-50 inset-0 mt-1 lg:mt-8 p-4 sm:p-6 md:p-8  lg:ml-[-30px] ">
            <div className="container flex gap-2 items-center">
              <div className="image">
                <img
                  src={imageUrl}
                  alt="Customer-Avatar"
                  className="rounded-lg w-[100px] "
                />
              </div>
              <div>
                <p>{fullName}</p>
                <div className="flex gap-1">
                  <img
                    src="./public/assets/images/icon-github.svg"
                    alt="github-icon"
                  />
                  {githubUsername}
                </div>
              </div>
            </div>
          </main>
          <div className="serial absolute right-0 bottom-16  md:bottom-32 ">
            <p className="rotate-90 text-neutral-400 lg:text-[30px] text-[25px]">
              #{random_num}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketComponent;
