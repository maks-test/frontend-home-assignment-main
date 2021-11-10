import { useFSData, FSItem, sortFSItems } from './FSDataProvider';

type FSDetailsProps = {
};

export const FSDetails = function FSDetails({ }: FSDetailsProps) {
  const { selectedFsItem, selectItem } = useFSData();
  if (!selectedFsItem) {
    return null;
  }

  const itemClicked = (item: FSItem, e: any) => {
    e.preventDefault();
    selectItem(item);
  };

  return (
    <section className="main">
      {selectedFsItem.type === 'folder' ? (
        <div className="fs-preview-items">
          {sortFSItems(selectedFsItem.children || []).map(item => (
            <a key={item.id} href="#" className="fs-preview-item" onClick={e => itemClicked(item, e)}>
              {item.type === 'folder' ? (
                <div className="folder-preview" />
               ) : (
                <div className="file-preview">{item.name.substr(0, 1)}</div>
               )}
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      ) : (
        <div>
          <h2>Preview</h2>
          <p>name: {selectedFsItem.name}</p>
          <p>type: {selectedFsItem.type}</p>
        </div>
      )}
    </section>
  );
};
