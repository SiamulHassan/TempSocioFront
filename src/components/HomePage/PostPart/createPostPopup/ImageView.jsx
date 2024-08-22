import { FaTimes } from "react-icons/fa";
import ImojiPicker from "./EmojiPicker";

const ImageView = ({ text, setText, textAreaRef, showImg, setShowImg }) => {
  const handleImageUpload = (e) => {
    const file = Array.from(e.target.files);
    file.forEach((imgs) => {
      if (
        imgs.type !== "image/jpeg" &&
        imgs.type !== "image/png" &&
        imgs.type !== "image/jpg"
      ) {
        return "Img type not matched";
      }
      const renderFiles = new FileReader();
      renderFiles.readAsDataURL(imgs);
      renderFiles.onload = (renderImg) => {
        // console.log(renderImg);
        setShowImg((prev) => [...prev, renderImg.target.result]);
      };
    });
  };
  console.log(showImg);
  return (
    <>
      {showImg && showImg?.length ? (
        <>
          <div
            className={`relative border-2 border-[#555] min-h-[20rem] mt-3 p-2 ${
              showImg.length === 1
                ? "overflow-hidden h-full w-full"
                : showImg.length === 2
                ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                : showImg.length === 3
                ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                : showImg.length === 4
                ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                : showImg.length > 4 &&
                  "overflow-hidden w-full h-full grid grid-cols-2 gap-2 relative"
            }`}
          >
            {showImg.length > 0 &&
              showImg.slice(0, 4).map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt="img"
                    className={`w-[16rem] h-[16rem] object-cover ${
                      img.length === 3
                        ? "[&:nth-of-type(1)]:row-start-1 [&:nth-of-type(1):row-end-3]"
                        : img.length === 3 &&
                          "[&:nth-of-type(1)]:row-start-2 [&:nth-of-type(1):row-end-3]"
                    }`}
                  />
                </div>
              ))}
            {showImg.length >= 5 && (
              <div className="bg-[#4e4e4e] text-white w-8 h-8 rounded-full flex justify-center items-center absolute right-[10px] bottom-[10px]">
                <p>{showImg.length - 4}</p>
              </div>
            )}
            <div
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => setShowImg([])}
            >
              <FaTimes size={18} />
            </div>
          </div>
          <div className="p-2 border border-line_color rounded-md my-5">
            <div className="w-full h-[45px] bg-line_color flex justify-center items-center">
              <input
                type="file"
                multiple
                accept="image/jpeg,image/png,image/jpg"
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <ImojiPicker
            text={text}
            setText={setText}
            textAreaRef={textAreaRef}
            hasImagePicker={true}
          />
          <div className="p-2 border border-line_color rounded-md my-5">
            <div className="w-full h-[100px] bg-line_color flex justify-center items-center">
              <input
                type="file"
                multiple
                accept="image/jpeg,image/png,image/jpg"
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ImageView;
