import * as React from "react";

interface IBanner {
  imgProps: { url: string; alt: string };
  title: string;
  text?: string;
}

const styles: React.CSSProperties = {};

const Banner: React.SFC<IBanner> = ({ imgProps: { url, alt }, title, text }) => (
  <div style={{backgroundImage: `url(${url})`}}>
    <h1>{title}</h1>
    {text && <p>{text}</p>}
  </div>
);
export default Banner;
