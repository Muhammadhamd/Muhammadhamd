/**
 * Minimal profile passed to the chat widget. The agent's real depth (work
 * history, stacks, philosophy) lives server-side in lib/site-content.ts
 * (getProfileBrief), compiled from lib/data.ts — not duplicated here.
 */
export interface ProfileData {
  name: string;
  chatSuggestions: string[];
}
