import "./topbar.css"
import {Person, Chat} from "@mui/icons-material";
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <img src="/assets/tothenew.png" alt="" className="topbarImg"/>
      </div>
      
      <div className="topbarRight">
        <div className="topbarLinks">          
        </div>
        <img src="/assets/Master.jpg" alt="Avatar" className="topbar" />
        <div className="topbarText"></div>
        <span className="topbarname"> Saurabh kumar</span>        
        <div className="topbarIcons">         
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>         
           </div>
           <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>          
        </div>  
      </div>
    </div>
  );
}
