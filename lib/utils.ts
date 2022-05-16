import { Language } from "prism-react-renderer";
import { Toolbar } from "./types/toolbar";



export const JavaScriptToolbar: Toolbar = {
  language: "javascript" as Language,
  items: [
    { value: "  ", label: "TAB" },
    { value: ";", label: ";" },
    { value: "const", label: "const" },
    { value: "let", label: "let" },
    { value: "var", label: "var" },
    { value: "function", label: "function" },
    { value: "if ( )", label: "if" },
    { value: "else", label: "else" },
    { value: "for(let i=0; i < __; i++)", label: "forᵢ" },
    { value: "for(let j=0; j < __; j++)", label: "forⱼ" },
    { value: "while", label: "while" },
    { value: "=", label: "=" },
    { value: "<", label: "<" },
    { value: ">", label: ">" },
    { value: "!", label: "!" },
    { value: "`", label: "`" },
    { value: "${ }", label: "${}" },
    { value: "class", label: "class" },
    { value: "console.log", label: "console.log" },
  ],
};


export const JavaToolbar: Toolbar = {
  language: "java" as Language,
  items: [
    { value: "  ", label: "TAB" },
    { value: ";", label: ";" },
    { value: "public static void main(String[] args)", label: "main" },
    { value: "(", label: "(" },
    { value: ")", label: ")" },
    { value: "{", label: "{" },
    { value: "}", label: "}" },
    { value: "public class", label: "class" },
    { value: "public", label: "public" },
    { value: "private", label: "private" },
    { value: "System.out.println", label: "println" },
  ]};

  export const PythonToolbar: Toolbar = {
    language: "python" as Language,
    items: [
      { value: "  ", label: "TAB" },
      { value: ":", label: ":" },
      { value: "def", label: "def" },
      { value: "if", label: "if" },
      { value: "else", label: "else" },
      { value: "for", label: "for" },
      { value: "while", label: "while" },

    ]};


  export const CSSToolbar: Toolbar = {
    language: "css" as Language,
    items: [
      { value: "  ", label: "TAB" },
      { value: ";", label: ";" },
      { value: ".", label: "." },
      { value: ":", label: ":" },
      { value: "{", label: "{" },
      { value: "}", label: "}" },
      { value: "*", label: "*" },

    ]};




export const LanguageToolbarMapping: any = {
  "javascript": JavaScriptToolbar,
  "java": JavaToolbar,
  "python": PythonToolbar,
  "css": CSSToolbar,

};

export function likeFormater(like: number, digits: number = 3) {
  //return new Intl.NumberFormat('en', { notation: 'compact' }).format(like ?? 0);

    const num = like ?? 0;

    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "B" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    console.log(num);
    return item
      ? (Math.round(1000*num / item.value)/1000).toFixed(1).replace(rx, "$1") + item.symbol
      : "0";

}