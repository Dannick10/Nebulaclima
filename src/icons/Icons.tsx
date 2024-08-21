import { MdPlace } from "react-icons/md";
import { IoMdArrowRoundUp } from "react-icons/io";
import { IoMdArrowRoundDown } from "react-icons/io";
import { FiThermometer } from "react-icons/fi";
import { GiWaveCrest } from "react-icons/gi";
import { MdOutlineAir } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { IoArrowUp } from "react-icons/io5";
import { SlSpeedometer } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export function PlaceIcon() {
  return <MdPlace />;
}

export function ArrowupIcon() {
    return <IoMdArrowRoundUp />
}

export function ArrowDownIcon() {
    return <IoMdArrowRoundDown />
}

export function ThermometerIcon() {
  return <FiThermometer />
}

export function PressureIcon() {
  return <IoMdTrendingUp />
}

export function AirIcon() {
  return  <MdOutlineAir />
}

export function WaveIcon() {
  return <GiWaveCrest />
}
export function DirectionIcon() {
  return <IoArrowUp />
}
export function SpeedIcon() {
  return <SlSpeedometer />
}

export function SearchIcon() {
  return <IoSearchOutline />
}

export function RotateIcon() {
  return <FaArrowsRotate/>
}

export function GithubIcon() {
  return <FaGithubAlt />
}

export function LinkedinIcon() { 
  return <CiLinkedin />
}