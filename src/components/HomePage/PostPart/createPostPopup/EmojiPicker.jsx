import { PiSmileyWinkLight } from "react-icons/pi";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useState } from "react";
const ImojiPicker = ({
  text,
  setText,
  textAreaRef,
  hasImagePicker = false,
}) => {
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  // emoji picker passes the emoji to this fun autometically(js shortcut, we could pass that to this fun menually)
  const handleEmoji = ({ emoji }) => {
    if (!textAreaRef.current) return;
    const { selectionStart, selectionEnd } = textAreaRef.current;
    const newText = `${text.slice(0, selectionStart)}${emoji}${text.slice(
      selectionEnd
    )}`;
    setText(newText);
    setCursorPosition(selectionStart + emoji.length);
    textAreaRef.current.focus();
  };
  // Effect to set cursor position in textarea
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.selectionStart = cursorPosition;
      textAreaRef.current.selectionEnd = cursorPosition;
    }
  }, [cursorPosition, textAreaRef]);
  return (
    <>
      <textarea
        ref={textAreaRef}
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="say your word"
        className="border border-[rgba(224,229,224,0.69)] w-full min-h-[3rem] p-2 outline-none focus:border focus:border-line_color focus:rounded-md mt-3"
      ></textarea>
      <div className="flex items-center gap-[20rem]">
        {!hasImagePicker && (
          <div className="w-10 h-10 bg-gradient-to-r from-cyan_100 to-purple_100"></div>
        )}
        <div className="cursor-pointer relative">
          <PiSmileyWinkLight
            size={20}
            onClick={() => setEmojiPicker((prev) => !prev)}
          />
          {emojiPicker && (
            <div className="absolute -top-[460px] -left-[100px]">
              <EmojiPicker onEmojiClick={handleEmoji} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImojiPicker;
