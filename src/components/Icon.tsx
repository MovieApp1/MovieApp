import React from "react";

interface IconProps {
  width: string;
  height: string;
  id: string;
  fill?: string;
  block: string;
  href: string;
}

export const Icon = function ({ id, width, height, block, href, fill }: IconProps) {
  return (
    <svg className={`${block}__${id}-icon`}
         fill={fill ? fill : undefined}
         width={width}
         height={height}
    >
    <use xlinkHref={`${href}#${id}`}></use>
    </svg>
  )
}