import "./feed.css"
import Button from '@mui/material/Button';
import WebIcon from '@mui/icons-material/Web';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
export default function Feed() {
  return (
    <div className="feed">
        
      
        <div class="card mb-3">
          <img class="card-img-top" src="/assets/image.jpg" alt="Card image cap"/>
          <img
                    src="/assets/Master.jpg"
                    alt="ProfileImage"
                    className="profile-image"
                />
          <div class="card-body">
             <h2 className="card-text">Saurabh Kumar</h2>
               <p className="card-text">Saurabh Kumar is a co-founder and COO of video ad Tech company</p>
               <p className="card-text"><small class="text-muted"> London  • USA   • France •234 friends</small></p>
              <div className="Button">
                    <div className="user-button">
                        <button className="btn btn-primary" startIcon={<PersonAddAlt1Icon />}>Add Friend</button>
                        <button className="btn btn-outline-primary" startIcon={<WebIcon />}>Visit Website</button>
                    </div>

              

       </div>
     </div>
</div>
</div>
  )
}
