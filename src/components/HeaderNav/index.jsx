/* eslint-disable jsx-a11y/anchor-is-valid */


export default function HeaderNav() {
  return (
    <nav className="nav-extended">
      <div className="nav-wrapper">
        <a className="brand-logo" id="logo" href="#">
          SIGMAS
        </a>
      </div>
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          <li className="tab">
            <a href="#rooms">Salas</a>
          </li>
        </ul>
      </div>
    </nav>
  );

}