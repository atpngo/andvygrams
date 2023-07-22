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
      <div className="flex space-x-10">
        <HomeButton name="SINGLE PLAYER">
            <PersonIcon className="text-white text-[8rem]"/>
        </HomeButton>
        <HomeButton name="MULTIPLAYER">
          <GroupsIcon className="text-white text-[8rem]"/>
        </HomeButton>
        <HomeButton name="DAILY CHALLENGE">
          <ExtensionIcon className="text-white text-[8rem]"/>
        </HomeButton>
      </div>
    </div>
  )
}
