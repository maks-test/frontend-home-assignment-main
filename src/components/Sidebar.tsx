import { useFSData, FSItem } from './FSDataProvider';

type SidebarProps = {
};

const FSItemList = ({ items }: { items: FSItem[] }) => {
  return (
    <div>
      {items.map(item => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export const Sidebar = function Sidebar({ }: SidebarProps) {
  const { fsData } = useFSData();

  return (
    <section className="sidebar">
      <FSItemList items={fsData} />
    </section>
  );
};
