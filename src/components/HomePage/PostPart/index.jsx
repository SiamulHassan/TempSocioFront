import { FiVideo, FiImage, FiActivity } from "react-icons/fi";
const PostPart = () => {
  return (
    <>
      <div className="mt-10 py-10 px-6 bg-[#f9f9f9] rounded-md">
        <div className="flex items-center gap-3 w-full p-2 bg-white rounded-full mb-5">
          <div className="w-12 h-12 rounded-full bg-primary_bg"></div>
          <input
            type="text"
            placeholder="tell us what you are thinking"
            className="focus:outline-none w-[95%]"
          />
        </div>
        <div className="border-t-2 border-white">
          <div className="flex gap-7 items-center justify-around mt-5">
            <div className="flex items-center gap-3">
              <FiVideo />
              <span className="font-gilroyMedium text-black">Live video</span>
            </div>
            <div className="flex items-center gap-3">
              <FiImage />
              <span className="font-gilroyMedium text-black">
                Image/Gallery
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FiActivity />
              <span className="font-gilroyMedium text-black">Activity</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPart;
