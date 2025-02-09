import React from "react";
import GitHub from "../../assets/github.svg";
import Npm from "../../assets/npm.svg";
import Us from "../../assets/us.svg";
import Ir from "../../assets/ir.svg";
import { IconMenu2 } from "@tabler/icons";
import packageJson from "../../../../package.json";
import { Link } from "gatsby";

export default function Navbar({ language, toggleSidebar, pathname }) {
  return (
    <nav className="navbar" style={{ paddingBottom: 30 }}>
      <IconMenu2 className="open-sidebar" size={26} onClick={toggleSidebar} />

      <div className="navbar-title">
        <span className="name">React Multi Date Picker</span>
        <span className="version">{" " + packageJson.version}</span>
        <div style={{ fontSize: 14 }}>
          (forked by itpsolver, based on shahabyazdi's react-multi-date-picker
          3.3.1)
        </div>
      </div>

      <div className="icons">
        <div className="icon language">
          <Link
            to={
              language === "en" ? `/fa${pathname}` : pathname.replace("/fa", "")
            }
          >
            {language === "en" ? <Ir /> : <Us />}
          </Link>
        </div>

        <div className="icon">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="github"
            // href="https://github.com/shahabyazdi/react-multi-date-picker"
            href="https://github.com/itpsolver/react-multi-date-picker"
          >
            <GitHub />
          </a>
        </div>

        <div className="icon">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="npm"
            // href="https://www.Npmjs.com/package/react-multi-date-picker"
            href="https://www.npmjs.com/package/@itpsolver/react-multi-date-picker"
          >
            <Npm />
          </a>
        </div>
      </div>
    </nav>
  );
}
