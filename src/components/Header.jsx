const Header = () => {
  return (
    <header className="main-header">
      <h1 className="small-titel">
        Project <span className="big-titel">tracker</span>
      </h1>
      <div className="top-icons-container">
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-filter"></i>
      </div>
    </header>
  );
};
export default Header;
