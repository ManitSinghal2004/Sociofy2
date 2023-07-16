import React from "react";
import "./RightBar.scss"
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import DP from "../../assets/dp.jpg";
import { useNavigate } from "react-router-dom";

const RightBar = ()=>{
    const navigate = useNavigate();
    const { isLoading, error, data } = useQuery(["recommendation"],() =>
        makeRequest.get("/api/recommendations").then(res=>{
            return res.data;
        })
  );
    return(
        <div className="rightbar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    {data.map(user => 
                        <div className="user" key={user.id} onClick={() => navigate(`/profile/${user.id}`)}>
                            <div className="userinfo"> 
                                <img src={user.profilePic} alt="error" />
                                <span>{user.username}</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <p>
                            <span>Manit Singhal</span> changed their cover picture 
                            </p>
                        </div>
                       <span>
                        1 min ago 
                       </span>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <p>
                            <span>Manit Singhal</span> liked your post
                            </p>
                        </div>
                       <span>
                        1 min ago 
                       </span>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <p>
                            <span>Manit Singhal</span> commented on your post
                            </p>
                        </div>
                       <span>
                        1 min ago 
                       </span>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <p>
                            <span>Manit Singhal</span> posted 
                            </p>
                        </div>
                       <span>
                        1 min ago 
                       </span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <div className="online"></div>
                            <span>Manit Singhal</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <div className="online"></div>
                            <span>Manit Singhal</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <div className="online"></div>
                            <span>Manit Singhal</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <div className="online"></div>
                            <span>Manit Singhal</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <div className="online"></div>
                            <span>Manit Singhal</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <div className="online"></div>
                            <span>Manit Singhal</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RightBar ; 