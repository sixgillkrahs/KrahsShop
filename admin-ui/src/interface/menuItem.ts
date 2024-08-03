import { ReactNode } from "react";

interface MenuItem {
  path?: string;
  label: string;
  icon?: ReactNode;
  key?: number;
  type?:string
  children?:MenuItem[]
}


export default MenuItem