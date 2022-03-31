import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-base">
      <div className="sidebar-content home-div">
        <i className="bx bx-home-alt "></i>
        <span className="home-sidebar-label sidebar-text">Home</span>
      </div>
      <div className="sidebar-content profile-div">
        <i className="bx bx-user"></i>
        <span className="profile-sidebar-label sidebar-text">Profile</span>
      </div>
      <div className="sidebar-content history-div">
        <i className="bx bx-history"></i>
        <span className="history-sidebar-label sidebar-text">History</span>
      </div>
      <div className="sidebar-content log-out-div">
        <i className="bx bx-log-out"></i>
        <span className="log-out-sidebar-label sidebar-text">Log out</span>
      </div>
    </div>
  );
}

export default Sidebar;
