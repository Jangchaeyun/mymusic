import { Folder, FolderPlus, List, Music } from "lucide-react";
import logo from "./music.png";

export const assets = {
  logo,
};

export const SIDE_MENU_DATA = [
  {
    id: "01",
    label: "노래 추가",
    icon: Music,
    path: "/add-song",
  },
  {
    id: "02",
    label: "노래 목록",
    icon: List,
    path: "/list-songs",
  },
  {
    id: "03",
    label: "앨범 추가",
    icon: FolderPlus,
    path: "/add-album",
  },
  {
    id: "04",
    label: "앨범 목록",
    icon: Folder,
    path: "/list-albums",
  },
];
