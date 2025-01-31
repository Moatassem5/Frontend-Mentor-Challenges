// This is the Parent Container That will contain the image upload Component and the rest of the components
// Interface to make specific type for each input field

// -----------------------------------------------------------

import { useState } from "react";
import ImageUpload from "./ImageUploader";
import DataForm from "./DataForm";
import TicketComponent from "./Ticket";
import Header from "./Header";

interface FormTypes {
  image: File | null;
  Full_name: string;
  Email_Address: string;
  Github_Username: string;
}

const ParentForm = () => {
  const [formData, setFormData] = useState<FormTypes>({
    image: null,
    Full_name: "",
    Email_Address: "",
    Github_Username: "",
  });

  const [isFormSubmitted, setisFormSubmitted] = useState(false);

  const handleimageState = function (file: File) {
    setFormData((previousState) => ({ ...previousState, image: file }));
  };

  const handleFormSubmit = function (formSubmitData: {
    fullName: string;
    emailAddress: string;
    githubUsername: string;
  }) {
    setFormData((previousState) => ({
      ...previousState,
      Full_name: formSubmitData.fullName,
      Email_Address: formSubmitData.emailAddress,
      Github_Username: formSubmitData.githubUsername,
    }));
    setisFormSubmitted(true);
  };

  return (
    <div className="px-4 py-8">
    <Header 
      isFormSubmitted={isFormSubmitted}
      fullName={formData.Full_name}
      emailAddress={formData.Email_Address}
    />
    {!isFormSubmitted ? (
      <div className="max-w-2xl mx-auto">
        <ImageUpload onImageUpload={handleimageState} />
        <DataForm onSubmit={handleFormSubmit} image={formData.image} />
      </div>
    ) : (
      <TicketComponent
        fullName={formData.Full_name}
        githubUsername={formData.Github_Username}
        image={formData.image}
      />
    )}
  </div>
);
};

export default ParentForm;