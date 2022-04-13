import "./rightbar.css"
import Card from '@mui/material/Card';
export default function Rightbar() {
  return (
    <div className="rightbar">
        <div className="rightbarwrapper">           
            </div>
            <h4 className="rightbarTitle">Suggestions</h4>
            <ul clasName="rightbarFriendList">
                <li className="rightbarFriends">
                    <div className="rightbarProfileImgContainer">
                        <img
                        className="rightbarProfileImg"
                        src="/assets/dhoni.jpg"
                        alt=""
                        />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Suyash Prabhudesai</span>
                  
                </li>

                <li className="rightbarFriends">
                    <div className="rightbarProfileImgContainer">
                        <img
                        className="rightbarProfileImg"
                        src="/assets/Shreyas.jpg"
                        alt=""
                        />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Aiden Markram</span>
                </li>
                <li className="rightbarFriends">
                    <div className="rightbarProfileImgContainer">
                        <img
                        className="rightbarProfileImg"
                        src="/assets/Rohit.jpeg"
                        alt=""
                        />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Srikar Bharat</span>
                </li>
                <li className="rightbarFriends">
                    <div className="rightbarProfileImgContainer">
                        <img
                        className="rightbarProfileImg"
                        src="/assets/Rahul.jpg"
                        alt=""
                        />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">KL Rahul</span>
                </li>
                <li className="rightbarFriends">
                    <div className="rightbarProfileImgContainer">
                        <img
                        className="rightbarProfileImg"
                        src="/assets/samson.jpg"
                        alt=""
                        />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername"> Johny Bairstow</span>
                </li>
                <li className="rightbarFriends">
                    <div className="rightbarProfileImgContainer">
                        <img
                        className="rightbarProfileImg"
                        src="/assets/Hrdik.jpg"
                        alt=""
                        />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Suryakumar</span>
                </li>
                <li className="rightbarFriends">
                    <div className="rightbarProfileImgContainer">
                        <img
                        className="rightbarProfileImg"
                        src="/assets/Bumrah.jpg"
                        alt=""
                        />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Rahul Tewatia</span>
                </li>
                <li className="rightbarFriends">
                    <div className="rightbarProfileImgContainer">
                        <img
                        className="rightbarProfileImg"
                        src="/assets/Abd.jpg"
                        alt=""
                        />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Abraham Benjamin</span>
                </li>
                <li className="rightbarFriends">
                    <div className="rightbarProfileImgContainer">
                        <img
                        className="rightbarProfileImg"
                        src="/assets/Jadeja.jpg"
                        alt=""
                        />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Jos Butler</span>
                </li>
                
                
                

            </ul>

            <Card variant="outlined"></Card>

        </div>
   
  )
}
