export interface ProfileHeaderProps {
  onBackPress: () => void;
  onProfilePress: () => void;
}

export interface UserAvatarProps {
  imageUrl: string;
  size: number;
  borderRadius?: number;
}

export interface InputFieldProps {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
}

export interface StatusIndicatorProps {
  isAvailable: boolean;
  hasNotification?: boolean;
}