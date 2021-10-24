import React from "react";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";

export default function IconBadges(props) {
  return props.iconName === "SiReact" ? (
    <SiReact size="3em" color="#00CDF2" />
  ) : props.iconName === "SiRedux" ? (
    <SiRedux size="3em" color="#00CDF2" />
  ) : null;
}
