export type MainAreaProps = {
  children: any
};

export const MainArea = function Topbar({ children }: MainAreaProps) {
  return (
    <section className="main-area">
      {children}
    </section>
  );
};
