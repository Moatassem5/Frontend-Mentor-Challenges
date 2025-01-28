// This is the Parent Container That will contain the image upload Component and the rest of the components
// Interface to make specific type for each input field

// -----------------------------------------------------------

// import { useState } from "react";
// import TicketComponent from "./Ticket";
// import ImageUpload from "./components/ImageUploader";
// import DataForm from "./DataForm";

interface FormTypes {
  image: File | null;
  Full_name: string;
  Email_Address: string;
  Github_Username: string;
}


const ParentForm = ()=>{
  return(
    <>
    <div></div>
    </>
  )
}

export default ParentForm