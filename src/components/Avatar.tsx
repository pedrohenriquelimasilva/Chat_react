import { ImgHTMLAttributes } from 'react';
import styled from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({hasBorder = true, ...props}: AvatarProps){
  
  return(
    <img 
    {...props}
    className={hasBorder ? styled.avatarWithBorder : styled.avatarNotBorder} 
    />
  )
}