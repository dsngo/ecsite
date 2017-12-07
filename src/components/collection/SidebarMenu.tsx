import * as React from "react";
import { Link } from "react-router-dom";

interface ISidebarMenu {
  mainMenuItems: { item: string; path: string }[];
  featuredCategories: {item: string; path: string}[];
  subMenuItems?: { refItem: string; items: { item: string; path: string }[] };
}
const SidebarMenu: React.SFC<ISidebarMenu> = props => {
  const { mainMenuItems, subMenuItems, featuredCategories } = props;
  return (
    <div>
      <div className="featured-category">
        {
          featuredCategories.map((cat, index) => (
            <div key={`cat-${index}`}>
              <Link to={cat.path} >{cat.item}</Link>
            </div>
          ))
        }
      </div>
      <div className="categories">
        {mainMenuItems.map(
          (e, i) =>
            subMenuItems && e.item === subMenuItems.refItem ? (
              <div>
                {subMenuItems.items.map((e, i) => (
                  <Link key={`subSideMenu-${i}`} to={e.path}>
                    {e.item}
                  </Link>
                ))}
              </div>
            ) : (
              <div>
              <Link key={`sideMenu-${i}`} to={e.path}>
                {e.item}
              </Link>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default SidebarMenu;
