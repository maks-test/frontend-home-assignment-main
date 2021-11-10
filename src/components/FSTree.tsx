import { useFSData, FSItem, sortFSItems } from './FSDataProvider';

type FSTreeProps = {
};

const FSItemList = ({ items }: { items: FSItem[] }) => {
  const { selectedFsItem, expandedFolderIds, selectItem } = useFSData();

  const itemClicked = (item: FSItem, e: any) => {
    e.preventDefault();
    selectItem(item);
  };

  const sortedItems = sortFSItems(items);

  return (
    <div className="fs-item-list">
      {sortedItems.map(item => {
        const isExpanded = item.type === 'folder' && !!expandedFolderIds.find(id => item.id === id);

        return (
          <div key={item.id} className={'fs-item' + (selectedFsItem?.id === item.id ? ' selected' : '')}>
            {item.type === 'folder' ? (
              <a href="#" onClick={e => itemClicked(item, e)} className="fs-item-gap">
                {isExpanded ? 'ᐁ' : 'ᐅ'}
              </a>
            ) : (
              <span className="fs-item-gap"></span>
            )}
            <a href="#" onClick={e => itemClicked(item, e)} className="fs-item-label">{item.name}</a>
            {isExpanded ? <FSItemList items={item.children || []} /> : null}
          </div>
        );
      })}
    </div>
  );
};

export const FSTree = function FSTree({ }: FSTreeProps) {
  const { fsData } = useFSData();

  return (
    <section className="sidebar">
      <FSItemList items={fsData} />
    </section>
  );
};
