type TopbarProps = {
  title: string
};

export const Topbar = function Topbar({ title }: TopbarProps) {
  return (
    <section className="topbar">
      <h1>{title}</h1>
    </section>
  );
};
