export interface MessageProps {
    text: string;
    time?: string;
    isOutgoing?: boolean;
    images?: string[];
  }
  
  export interface ChatHeaderProps {
    userName: string;
    onBack: () => void;
    userAvatar: string;
  }
  
  export interface ChatInputProps {
    onSend: (message: string) => void;
  }