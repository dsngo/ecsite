import * as React from "react";

interface IBanner {
  backgroundImg: string;
  title: string;
  text?: string;
}

const styles: React.CSSProperties = {};

const Banner: React.SFC<IBanner> = ({ backgroundImg, title, text }) => (
    <div style={{backgroundImage: `url(${backgroundImg})`}} className="banner">
      <div className="banner-content">
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </div>
);
export default Banner;
