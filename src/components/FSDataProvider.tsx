import React, { useContext, useState, useEffect } from 'react';

export type FSItem = {
  id: string;
  type: string;
  name: string;
  children?: FSItem[]
};

interface IFSDataProvider {
  fsData: FSItem[];
  selectedFsItem?: FSItem;
  expandedFolderIds: string[];

  selectItem: (id: FSItem) => void;
}

const FSDataContext = React.createContext<IFSDataProvider | null>(null);

export const sortFSItems = (items: FSItem[]) => {
  return [...items].sort((a, b) => a.name > b.name ? 1 : -1);
};

const toggleListElem = (items: string[], item: string) =>
  items.find(it => it === item) ? items.filter(it => it !== item) : [...items, item];

const FSDataProvider = ({ children }: { children: any }) => {
  const [fsData, setFSData] = useState<FSItem[]>([]);
  const [selectedFsItem, setSelectedFsItem] = useState<FSItem | undefined>();
  const [expandedFolderIds, setExpandedFolderIds] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/api/v1/tree');
      const json = await response.json();
      setFSData(json?.response || []);
    }
    fetchData();
  }, []);

  const selectItem = (item: FSItem) => {
    setSelectedFsItem(item);
    if (item.type === 'folder') {
      setExpandedFolderIds(toggleListElem(expandedFolderIds, item.id));
    }
  };

  return (
    <FSDataContext.Provider
      value={{
        fsData,
        selectedFsItem,
        expandedFolderIds,

        selectItem,
      }}
    >
      {children}
    </FSDataContext.Provider>
  );
};

const useFSData = () => {
  const context = useContext(FSDataContext);
  if (!context) {
    throw new Error('useFSData() called outside of a FSDataProvider?');
  }

  return context;
};

export { FSDataProvider, useFSData };
