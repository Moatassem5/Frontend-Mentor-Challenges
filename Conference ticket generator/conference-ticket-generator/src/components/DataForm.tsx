// This is the rest of the form that contains the (Email and Username Fields)

import { useState } from "react";

interface DataFormProps {
  onSubmit: (data: {
    fullName: string;
    emailAddress: string;
    githubUsername: string;
  }) => void;
}

const DataForm = ({ onSubmit }: DataFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    githubUsername: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 flex flex-col items-center w-full mx-auto mt-3  "
    >
      <div>
        <label
          htmlFor="fullName"
          className="block text-white text-sm lg:text-[19px] mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-[350px] lg:w-[30rem] p-3 rounded-lg backdrop-filter backdrop-blur-sm bg-white/10 text-white"
        />
      </div>
      <div>
        <label
          htmlFor="emailAddress"
          className="block text-white text-sm lg:text-[19px] mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          required
          className="w-[350px] lg:w-[30rem] p-3 rounded-lg backdrop-filter backdrop-blur-sm bg-white/10 text-white"
        />
      </div>
      <div>
        <label
          htmlFor="githubUsername"
          className="block text-white text-sm lg:text-[19px] mb-2"
        >
          Github Username
        </label>
        <input
          type="text"
          id="githubUsername"
          name="githubUsername"
          value={formData.githubUsername}
          onChange={handleChange}
          required
          className="w-[350px] lg:w-[30rem] p-3 rounded-lg backdrop-filter backdrop-blur-sm bg-white/10 text-white"
        />
      </div>
      <button
        type="submit"
        className=" w-[350px] lg:w-[30rem] py-3 bg-orange-400 text-[20px] text-neutral-900 font-bold rounded-lg hover:bg-orange-500"
      >
        Generate Ticket
      </button>
    </form>
  );
};

export default DataForm;
