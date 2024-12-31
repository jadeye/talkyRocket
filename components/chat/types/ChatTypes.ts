interface ChatMessage {
    id: string;
    avatar: string;
    name: string;
    message: string;
    time: string;
    hasUnread?: boolean;
  }
  
  interface ChatListItemProps {
    message: ChatMessage;
  }
  
  interface ChatHeaderProps {
    onMenuPress: () => void;
    onSearchPress: () => void;
  }
  
  interface ChatTabsProps {
    activeTab: 'chat' | 'call';
    onTabChange: (tab: 'chat' | 'call') => void;
  }
  
  export type { ChatMessage, ChatListItemProps, ChatHeaderProps, ChatTabsProps };