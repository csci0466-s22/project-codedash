import { Language } from "prism-react-renderer";

export interface ToolbarItem {
  value: string;
  label: string;
};


export interface Toolbar {
    language: Language;
    items: ToolbarItem[];
}