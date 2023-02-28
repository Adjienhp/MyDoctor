export type IButton = {
  title?: string;
  onPress: () => void;
  type?: 'secondary' | 'button-icon';
  icon?: 'arrow-back-dark';
};

export type IButtonIcon = {
  onPress: () => void;
  icon?: 'arrow-back-dark';
};

export type IIcon = {
  icon?: 'arrow-back-dark';
};
