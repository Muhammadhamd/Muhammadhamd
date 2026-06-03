export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  avatarUrl: string;
  aboutText: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  customSystemPrompt: string;
  chatSuggestions: string[];
  skills: any[];
  projects: any[];
  experiences: any[];
}
