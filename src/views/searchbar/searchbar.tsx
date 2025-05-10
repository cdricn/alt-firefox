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
    document.onmousemove = elementDrag;
  }

  function elementDrag(e:any) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    newCursorPosX = cursorPosX - e.clientX;
    newCursorPosY = cursorPosY - e.clientY;
    cursorPosX = e.clientX;
    cursorPosY = e.clientY;
    // set the element's new position:
    e.style.top = (e.offsetTop - newCursorPosX) + "px";
    e.style.left = (e.offsetLeft - newCursorPosY) + "px";
  }

  return (
    <div className='window-container' style={styles} onClick={dragElement}>
      <SlCursorMove id='btn-drag' />
      <button className='search-bar'>
        <SlSocialGoogle className='search-logo'/>
        <input className='textbox'>
        </input>
      </button>
    </div>
  )
}
