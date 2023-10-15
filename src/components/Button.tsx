import Link from "next/link";
import React from "react";

function Button({ text, link, children }: { text: string; link: string, children?: React.ReactNode }) {
  return (
    <Link className="btn" href={link}>
      {text}
      {children}
    </Link>
  );
}

export default Button;
