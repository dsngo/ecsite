import * as React from "react";
import { Link } from "react-router-dom";

interface ISidebarMenu {
  mainMenuItems: { item: string; path: string }[];
  subMenuItems?: { refItem: string; items: { item: string; path: string }[] };
}
class SidebarMenu extends React.Component<ISidebarMenu> {
  render() {
    const { props: { mainMenuItems, subMenuItems } } = this;
    return (
      <ul>
        {mainMenuItems.map(
          (e, i) =>
            subMenuItems && e.item === subMenuItems.refItem ? (
              <ul>
                {subMenuItems.items.}
              </ul>
            ) : (
              <Link key={`sideMenu-${i}`} to={e.path}>
                {e.item}
              </Link>
            ),
        )}
      </ul>
    );
  }
}

export default SidebarMenu;
