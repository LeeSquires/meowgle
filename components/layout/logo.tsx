import Meowgle_Dark from "@/public/Meowgle_DarkMode.png";
import Meowgle_Light from "@/public/Meowgle_LightMode.png";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative max-w-[400px]">
      <Image
        className="h-0 dark:h-full"
        src={Meowgle_Dark}
        alt="Meowgle logo"
      />
      <Image
        className="h-full dark:h-0"
        src={Meowgle_Light}
        alt="Meowgle logo"
      />
    </div>
  );
}
