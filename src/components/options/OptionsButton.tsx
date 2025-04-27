import Options from "./Options"
import './optionsbutton.scss'
import { SlSettings } from "react-icons/sl";
import { useState } from "react";

export default function OptionsButton() {
  const [isSettingOpened, setIsSettingOpened] = useState(false);

  const settingsWindow = () => {
    return isSettingOpened ? 
    {width: "400px"} :
    {width: "0px"}
  }

  return (
    <>
      <div className="icon" onClick={()=>setIsSettingOpened(!isSettingOpened)}>
        <SlSettings />
      </div>
      <div className="settings-window" style={settingsWindow()}>
        <Options />
      </div>
    </>
  )
}
