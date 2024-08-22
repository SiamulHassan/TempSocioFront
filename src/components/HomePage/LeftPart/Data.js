import {
  MdOutlineFeedback,
  MdOutlineMessage,
  MdOutlinePermMedia,
  MdOutlineSettings,
} from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";

export const leftIconData = [
  {
    icon: MdOutlineFeedback,
    title: "News Feed",
    to: "/newsfeed",
  },
  {
    icon: MdOutlineMessage,
    title: "Messages",
    to: "/message",
  },
  {
    icon: PiUsersThree,
    title: "Friends",
    to: "/friends",
  },
  {
    icon: MdOutlinePermMedia,
    title: "Media",
    to: "/media",
  },
  {
    icon: MdOutlineSettings,
    title: "Settings",
  },
];
