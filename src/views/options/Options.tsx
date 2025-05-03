import './options.scss'
import { SlSettings } from "react-icons/sl";
import { useState } from "react";

export default function Options() {
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
          <div className='settings-container'>
            <div>
              <h2 className='settings-header'>MAIN</h2>
            </div>
            <div>
              <h2 className='settings-header'>WIDGETS</h2>
            </div>
            <div>
              <h2 className='settings-header'>UTILITY</h2>
            </div>
          </div>
      </div>
    </>
  )
}
