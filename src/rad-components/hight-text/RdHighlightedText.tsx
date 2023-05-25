import React from "react";

interface RdHighlightedTextProps {
  text?: string;
  highlight?: string;
  classText?: string;
  classHighlight?: string;
}

export const RdHighlightedText: React.FC<RdHighlightedTextProps> = ({
  text = "",
  highlight = "",
  classHighlight,
  classText,
}) => {
  if (!highlight.trim()) {
    return <span className={classText}>{text}</span>;
  }
  // const regex = new RegExp(
  //   `(${highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
  //   "gi",
  // );
  const parts = text.split("");

  return (
    <span className={classText}>
      {parts
        .filter((part) => part)
        .map((part, i) => {
          return highlight.replaceAll(" ", "").includes(part.toLowerCase()) &&
            part !== "" ? (
            <mark className={classHighlight} key={i}>
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          );
        })}
    </span>
  );
};
