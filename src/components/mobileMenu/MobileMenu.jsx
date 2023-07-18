import "./mobileMenu.scss";

const MobileMenu = ({ onScroll, onClick }) => {
  return (
    <div className="mobile-menu" onClick={() => onClick(false)}>
      <div className="default-margin" style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <ul className="menu-ul">
          {["PROJECTS", "CONTACT"].map((a, i) => (
            <li key={i} onClick={() => (a === "PROJECTS" ? onScroll(".projects-section") : onScroll(".contact-section"))}>
              {a}
            </li>
          ))}
          <li>
            <a href="https://drive.google.com/file/d/1DkL5xPQDqxMa88yyFKdXZk2BGqMzDrR_/view?usp=drive_link" target="_blank">
              RESUME
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
