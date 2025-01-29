// This is the rest of the form that contains the (Email and Username Fields)

import { useState } from "react";

interface DataFormProps {
  onSubmit: (data: {
    fullName: string;
    emailAddress: string;
    githubUsername: string;
  }) => void;
  image: File | null;
}

const DataForm = ({ onSubmit, image }: DataFormProps) => {
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    githubUsername: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) {
      setError("Please upload an image first");
      return;
    }
    setError(null);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 flex flex-col items-center w-full mx-auto mt-3">
      {error && (
        <div className="text-red-500 text-sm mb-2">{error}</div>
      )}
      <div>
        <label htmlFor="fullName" className="block text-white text-sm lg:text-[19px] mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-[350px] lg:w-[30rem] p-3 rounded-lg backdrop-filter backdrop-blur-sm focus:border-white focus:outline-white bg-white/10 text-white"
        />
      </div>
      <div>
        <label htmlFor="emailAddress" className="block text-white text-sm lg:text-[19px] mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          placeholder="example@email.com"
          required
          className="w-[350px] lg:w-[30rem] p-3 rounded-lg backdrop-filter backdrop-blur-sm focus:border-white focus:outline-white bg-white/10 text-white"
        />
      </div>
      <div>
        <label htmlFor="githubUsername" className="block text-white text-sm lg:text-[19px] mb-2">
          Github Username
        </label>
        <input
          type="text"
          id="githubUsername"
          name="githubUsername"
          value={formData.githubUsername}
          onChange={handleChange}
          placeholder="@yourusername"
          required
          className="w-[350px] lg:w-[30rem] p-3 rounded-lg backdrop-filter backdrop-blur-sm bg-white/10 text-white focus:border-white focus:outline-white"
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