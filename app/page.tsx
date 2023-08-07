import Image from "next/image";
import HomeButton from "./components/HomeButton";
import {BsPersonFill, BsFillPuzzleFill, BsPeopleFill} from "react-icons/bs"

export default function Home()
{
  return (
    <div className="flex min-h-screen flex-col items-center p-5 z-10 justify-evenly">
      {/* Logo */}
      <div>
        <Image alt="logo" src="/logo.png" width={1048.51} height={203} className="drop-shadow-lg"/>
      </div>
      {/* Buttons */}
      <div className="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-y-5">
        <HomeButton name="SINGLE PLAYER" link="/singleplayer">
          <BsPersonFill className="text-white text-[90px]"/>
        </HomeButton>
        {/* <HomeButton name="MULTIPLAYER" link="/singleplayer">
          <BsPeopleFill className="text-white text-[90px]"/>
        </HomeButton>
        <HomeButton name="DAILY CHALLENGE" link="/singleplayer">
          <BsFillPuzzleFill className="text-white text-[90px]"/>
        </HomeButton> */}
      </div>
    </div>
  )
}
