import clsx from "clsx";
import { Loader2 } from "lucide-react";

type Props = {
  className: string;
  size?: number;
};

export const Loader = ({ size, className }: Props) => {
  return <Loader2 size={size} className={clsx(className, "animate-spin")} />;
};
