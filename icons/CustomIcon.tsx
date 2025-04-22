import React from 'react';
import { Icon, IconProps } from '../Icon';

export const CustomIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </Icon>
  );
};

CustomIcon.displayName = 'CustomIcon'; 