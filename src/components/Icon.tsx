import React from "react";
import sprite from '../assets/icons-sprite.svg';

interface IconProps {
  width: string;
  height: string;
  id: string;
  fill?: string;
  block: string;
}

export const Icon = function ({ id, width, height, block, fill }: IconProps) {
  return (
    <svg className={`${block}__${id}-icon`}
         fill={fill ? fill : undefined}
         width={width}
         height={height}
         viewBox='0 0 24 24'
    >
    <use href={`${sprite}#${id}`} />
    </svg>
  )
}