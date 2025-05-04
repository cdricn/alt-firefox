import './searchbar.scss';
import { SlCursorMove, SlSocialGoogle } from "react-icons/sl";

export default function SearchBar() {
  
  const styles = {
    width: "400px",
    minWidth: "fit-content",
    height: "fit-content",
    border: "2px solid white",
    overflow: "scroll"
  }

  let cursorPosX = 0;
  let cursorPosY = 0;
  let newCursorPosX = 0;
  let newCursorPosY = 0;

  const dragElement = (e:any) => {
    if (true) {
      document.getElementById(e)!.onmousedown = dragMouseDown;
    } else {
      
    }
  }

  const dragMouseDown = (e:any) => {
    cursorPosX = e.clientX;
    cursorPosY = e.clientY;
  }


  return (
    <div className='window-container' style={styles}>
      <SlCursorMove id='btn-drag' />
      <button className='search-bar'>
        <SlSocialGoogle className='search-logo'/>
        <input className='textbox'>
        </input>
      </button>
    </div>
  )
}
