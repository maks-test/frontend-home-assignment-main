import React, { useContext, useState, useEffect } from 'react';

export type FSItem = {
  id: string;
  type: string;
  name: string;
  children?: FSItem[]
};

interface IFSDataProvider {
  fsData: FSItem[];
}

const FSDataContext = React.createContext<IFSDataProvider | null>(null);

const FSDataProvider = ({ children }: { children: any }) => {
  const [fsData, setFSData] = useState<FSItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/api/v1/tree');
      const json = await response.json();
      setFSData(json?.response || []);
    }
    fetchData();
  }, []);

  return (
    <FSDataContext.Provider
      value={{
        fsData: fsData,
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
