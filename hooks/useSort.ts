import { useState } from 'react';

export type SortDirection = 'asc' | 'desc' | null;
export type SortConfig = {
  key: string;
  direction: SortDirection;
};

export function useSort<T>(initialData: T[]) {
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: '', direction: null });
  const [data, setData] = useState<T[]>(initialData);

  const sortData = (key: string) => {
    let direction: SortDirection = 'asc';
    
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    } else if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = null;
    }

    setSortConfig({ key, direction });

    if (direction === null) {
      setData(initialData);
      return;
    }

    const sortedData = [...data].sort((a: any, b: any) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setData(sortedData);
  };

  return { data, sortData, sortConfig };
}
