import { FiActivity, FiImage, FiVideo } from "react-icons/fi";

const AddPost = ({ showImgPicker, setShowImgPicker }) => {
  return (
    <div className="px-2 py-1 border border-line_color rounded-md flex justify-between items-center">
      <span className="font-gilroyReguler font-black text-base">
        Add to your post
      </span>
      <div className="flex gap-2">
        <div
          className={`${
            showImgPicker
              ? "bg-[#e4e2e2] w-10 h-10 rounded-full cursor-pointer flex justify-center items-center"
              : "w-10 h-10 rounded-full cursor-pointer transition-all duration-100 hover:bg-line_color flex items-center justify-center"
          }`}
        >
          <FiImage onClick={() => setShowImgPicker(true)} />
        </div>
        <div className="w-10 h-10 rounded-full cursor-pointer transition-all duration-100 hover:bg-line_color flex items-center justify-center">
          <FiVideo />
        </div>
        <div className="w-10 h-10 rounded-full cursor-pointer transition-all duration-100 hover:bg-line_color flex items-center justify-center">
          <FiActivity />
        </div>
      </div>
    </div>
  );
};

export default AddPost;
