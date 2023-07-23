import Image from "next/image";
import HomeButton from "./components/HomeButton";
import GroupsIcon from '@mui/icons-material/Groups'
import PersonIcon from '@mui/icons-material/Person'
import ExtensionIcon from '@mui/icons-material/Extension'

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
            <PersonIcon className="text-white md:text-[8rem] text-[4rem]"/>
        </HomeButton>
        <HomeButton name="MULTIPLAYER" link="/singleplayer">
          <GroupsIcon className="text-white md:text-[8rem] text-[4rem]"/>
        </HomeButton>
        <HomeButton name="DAILY CHALLENGE" link="/singleplayer">
          <ExtensionIcon className="text-white md:text-[8rem] text-[4rem]"/>
        </HomeButton>
      </div>
    </div>
  )
}
