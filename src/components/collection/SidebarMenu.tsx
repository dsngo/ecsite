import * as React from "react";
import { Link } from "react-router-dom";

interface ISidebarMenu {
  mainMenuItems: { item: string; path: string }[];
  subMenuItems?: { refItem: string; items: { item: string; path: string }[] };
}
const SidebarMenu: React.SFC<ISidebarMenu> = props => {
  const { mainMenuItems, subMenuItems } = props;
  return (
    <ul>
      {mainMenuItems.map(
        (e, i) =>
          subMenuItems && e.item === subMenuItems.refItem ? (
            <ul>
              {subMenuItems.items.map((e, i) => (
                <Link key={`subSideMenu-${i}`} to={e.path}>
                  {e.item}
                </Link>
              ))}
            </ul>
          ) : (
            <Link key={`sideMenu-${i}`} to={e.path}>
              {e.item}
            </Link>
          ),
      )}
    </ul>
  );
};

export default SidebarMenu;
