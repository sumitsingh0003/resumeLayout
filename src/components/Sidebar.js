import React from "react";
import ResumeLogo from "../assets/img/Resumizeme.png";
import IconTemplate from "../assets/img/icon-template.png";
import SearchIcon from "../assets/img/search.png";
import StarIcon from "../assets/img/star-icon.png";
import RecentIcon from "../assets/img/recentIcon.png";
import BoardIcon from "../assets/img/board-icon.png";
import FolderIcon from "../assets/img/folder-icon.png";
import LockIcon from "../assets/img/lock-icon.png";
import AddIcon from "../assets/img/add-icon.png";
import settingIcon from "../assets/img/settingIcon.png";
import userProfile from "../assets/img/girlProfilw.png";

const Sidebar = () => {
  return (
    <>
    <div className="sideBarTop">
    <div className="logo">
        <img src={ResumeLogo} alt="" />
      </div>

      <div className="allTemplates">
        <h3>
          <img src={IconTemplate} alt="" />
          My templates
        </h3>

        <div className="searchBar">
          <img src={SearchIcon} alt="" />
          <input type="search" placeholder="Search" />
        </div>

        <ul className="templateLists">
          <li>
            <img src={StarIcon} alt="" /> Software Engineer
          </li>
          <li>
            <img src={StarIcon} alt="" /> Computer hardware engineer
          </li>
          <li>
            <img src={StarIcon} alt="" /> Network Engineer
          </li>
          <li>
            <img src={StarIcon} alt="" /> Technical Support
          </li>
          <li>
            <img src={StarIcon} alt="" /> Network administrator
          </li>
          <li>
            <img src={StarIcon} alt="" /> Management
          </li>
          <li>
            <img src={StarIcon} alt="" /> Data analysis
          </li>
          <li>
            <img src={StarIcon} alt="" /> Computer technician
          </li>
        </ul>

        <ul className="recentLists">
          <li>
            <img src={RecentIcon} alt="" /> Past search 1
          </li>
          <li>
            <img src={RecentIcon} alt="" /> Past search 2
          </li>
          <li>
            <img src={RecentIcon} alt="" /> Computers and information...
          </li>
          <li>
            <img src={RecentIcon} alt="" /> Database Administrator
          </li>
          <li>
            <img src={RecentIcon} alt="" /> Computer security
          </li>
          <li>
            <img src={RecentIcon} alt="" /> Computer Systems Analyst
          </li>
        </ul>

        <div className="allBoards">
          <div className="boardHeading">
            <h3>
              <img src={BoardIcon} alt="" />
              My boards
            </h3>
            <span>
              <img src={AddIcon} alt="" />
            </span>
          </div>
          <ul className="boardsLists">
            <li>
              <img src={FolderIcon} alt="" /> Board 1
            </li>
            <li>
              <img src={FolderIcon} alt="" /> Board 2
            </li>
            <li>
              <img src={FolderIcon} alt="" /> Board 3
            </li>
            <li>
              <img src={LockIcon} alt="" /> Board agent 1
            </li>
            <li>
              <img src={LockIcon} alt="" /> Board agent 2
            </li>
            <li>
              <img src={LockIcon} alt="" /> Board agent 3
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="userProfile">
        <div className="userprofileImage">
            <img src={userProfile} alt="" />
            <h4>Carlo</h4>
        </div>
        <div className="profileSeting">
        <img src={settingIcon} alt="" />
        </div>
    </div>
      
    </>
  );
};

export default Sidebar;
