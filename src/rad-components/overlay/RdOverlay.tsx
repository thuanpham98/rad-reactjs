import "./rd-overlay.css";

export const RdOverlay = ({
  children,
  onTapBackGround,
  onTapChildren,
  classChildren,
  classBackground,
  id,
}: {
  children: React.ReactNode;
  onTapBackGround: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onTapChildren: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  classChildren: string | undefined;
  classBackground: string | undefined;
  id?: string;
}) => {
  return (
    <div id={id} className={classBackground} onClick={onTapBackGround}>
      <div
        className={`rd-overlay__child ${classChildren ?? ""}`}
        onClick={onTapChildren}
      >
        {children}
      </div>
    </div>
  );
};
