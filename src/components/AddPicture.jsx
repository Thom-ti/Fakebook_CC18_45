import { ImagePlus } from "lucide-react";
import React from "react";

const AddPicture = (props) => {
  const { closeMe, file, setFile } = props;

  const hdlClose = (e) => {
    e.stopPropagation(); // prevent from parent actions
    setFile(null);
    closeMe();
  };

  const hdlFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="flex flex-col p-2 border rounded-lg">
      <div
        className="bg-slate-100 hover:bg-slate-200 min-h-40 rounded-lg relative cursor-pointer"
        onClick={() => document.getElementById("input-file").click()}
      >
        <input
          type="file"
          className="opacity-0"
          id="input-file"
          onChange={hdlFileChange}
        />
        {file && (
          <img
            src={URL.createObjectURL(file)}
            className="w-full h-full object-cover rounded-lg"
          />
        )}
        <button
          onClick={hdlClose}
          className="btn btn-sm btn-circle btn-outline border-gray-300 absolute top-1 right-1 opacity-50"
        >
          x
        </button>
        {!file && (
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ImagePlus className="w-10 opacity-70" />
          </p>
        )}
      </div>
    </div>
  );
};

export default AddPicture;
