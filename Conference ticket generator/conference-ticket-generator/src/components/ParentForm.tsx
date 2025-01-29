// This is the Parent Container That will contain the image upload Component and the rest of the components
// Interface to make specific type for each input field

// -----------------------------------------------------------

import { useState } from "react";
// import TicketComponent from "./Ticket";
// import ImageUpload from "./components/ImageUploader";
// import DataForm from "./DataForm";

// We will use this interface as a wraper to validate over the 2 Child Components at once
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

  const [isFormSubmitted ,setisFormSubmitted ] = useState(false)

  const handleimageState = function(file:File){
    setFormData((previousState)=>({...previousState , image:file}))
  }

  
  // const handleFormSubmit = function(submitted:File){
  //   setFormData((previousState)=>({...previousState , image:file}))
  // }

  return (
    <>
      <form action=""></form>
    </>
  );
};

export default ParentForm;
