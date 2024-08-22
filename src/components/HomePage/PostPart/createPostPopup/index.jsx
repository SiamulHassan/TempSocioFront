import { FaRegTimesCircle } from "react-icons/fa";

import AddPost from "./AddPost";

import ImojiPicker from "./EmojiPicker";
import { useRef, useState } from "react";
import ImageView from "./ImageView";
const CreatePostPopup = () => {
  const textAreaRef = useRef(null);
  const [text, setText] = useState("");
  const [showImgPicker, setShowImgPicker] = useState(false);
  //here we store uploaded images
  const [showImg, setShowImg] = useState([]);

  return (
    <div className="absolute top-0 left-0 bg-blur w-full h-screen z-20 flex items-center justify-center">
      <div className="w-[401px] bg-white shadow-md rounded-md p-4 border border-line_color relative">
        <FaRegTimesCircle
          className="absolute top-2 right-2 cursor-pointer"
          size={20}
          onClick={() => setShowImgPicker(false)}
        />
        <h1 className="font-bold text-black text-center mb-4">Create Post</h1>

        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 bg-primary_bg rounded-full"></div>
          <h4>Siam</h4>
        </div>
        {!showImgPicker ? (
          <>
            <div className="flex flex-col gap-5 items-center mt-4">
              <ImojiPicker
                text={text}
                setText={setText}
                textAreaRef={textAreaRef}
              />
            </div>
            <div className="mt-4">
              <AddPost
                showImgPicker={showImgPicker}
                setShowImgPicker={setShowImgPicker}
              />
            </div>
          </>
        ) : (
          <>
            <ImageView
              text={text}
              setText={setText}
              textAreaRef={textAreaRef}
              showImg={showImg}
              setShowImg={setShowImg}
            />
            <div className="mt-4">
              <AddPost
                showImgPicker={showImgPicker}
                setShowImgPicker={setShowImgPicker}
              />
            </div>
          </>
        )}

        <div className="mt-4">
          <button className="font-gilroyMedium bg-black text-white py-2 px-8 rounded-md">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPopup;
