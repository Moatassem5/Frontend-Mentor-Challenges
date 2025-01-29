// Now the Upload Image Got 2 Main Features (1- Uploading the Image , 2- showing the image )
// And Have 2 sub Features (1-Removing the Image , 2- changing the image)

import { useRef, useState } from "react";
interface ImageUploadProps {
  onImageUpload: (file: File) => void;
}

const ImageUpload = ({ onImageUpload }: ImageUploadProps) => {
  const [preview, setPreivew] = useState<string | null>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      onImageUpload(file);
      reader.onload = () => {
        setPreivew(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onImageDelete = () => {
    setPreivew(null);
    if (imageRef.current) {
      imageRef.current.value = "";
    }
  };

  return (
    <>
      <div className="flex flex-col items-start w-fit mx-auto">
        <p className="text-white text-sm lg:text-[19px]">Upload Avatar</p>
        <div
          onClick={() => imageRef.current?.click()}
          className="upload-wrapper  lg:w-[30rem] lg:mt-2 lg:py-7 cursor-pointer backdrop-filter backdrop-blur-sm bg-white/10 mt-2 mb-3 border-2 border-dashed w-[350px] px-[30px] py-2 rounded-md border-neutral-500 mx-auto flex flex-col items-center justify-center"
        >
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="max-h-full object-contain"
            />
          ) : (
            <div className="text-center text-neutral-500">
              <div className="mx-auto mb-3 bg-slate-400/20 backdrop-filter backdrop-blur-md w-fit lg:p-2 p-1 rounded-lg">
                <img
                  src="./public/assets/images/icon-upload.svg"
                  alt="Upload Image"
                  className="cursor-pointer"
                />
              </div>
              <p className="text-white text-[13px] lg:text-[15px]">
                click here to select Image
              </p>
            </div>
          )}
        </div>
        <input
          type="file"
          ref={imageRef}
          onChange={onImageChange}
          accept="image/*"
          className="hidden"
        />
        {preview && (
          <button
            type="button"
            onClick={onImageDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
          >
            Delete Image
          </button>
        )}
        <div className="flex justify-center items-center gap-2">
          <img src="./public/assets/images/icon-info.svg" alt="info-icon" />
          <span className="text-neutral-400 text-sm">
            Upload your photo (JPG or PNG, max Size: 500KB).
          </span>
        </div>
      </div>
    </>
  );
};

export default ImageUpload;
