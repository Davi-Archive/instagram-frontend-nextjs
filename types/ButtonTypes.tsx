export interface ButtonType {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  text: String;
  color?: React.ButtonHTMLAttributes<HTMLButtonElement>["color"];
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  isDisabled?: React.ButtonHTMLAttributes<HTMLButtonElement>["disabled"];
}
