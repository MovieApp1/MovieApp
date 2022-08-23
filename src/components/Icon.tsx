import React from "react";
import sprite from '../assets/icons/icons-sprite.svg';

interface IconProps {
  width: string;
  height: string;
  id: string;
  fill?: string;
  stroke?: string;
  block: string;
}

export const Icon = function ({ id, width, height, block, fill, stroke }: IconProps) {
  return (
    <svg className={`${block}__${id}-icon`}
         fill={fill ? fill : undefined}
         width={width}
         height={height}
         viewBox='0 0 24 24'
         stroke = {stroke}
    >
    <use href={`${sprite}#${id}`} />
    </svg>
  )
}