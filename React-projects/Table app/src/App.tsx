import './App.css';

import { useMemo, useState } from 'react';

import useFetch from './hooks/use-fetch';

import { flattenObject } from './utils/flattenObject';
import { sortOrderType } from './utils/types';
import { sortData } from './utils/sortData';

const url = 'https://randomuser.me/api/?results=20';

function App() {
  const [sortOrder, setSortOrder] = useState<sortOrderType>('default');
  const [selectedHeader, setSelectedHeader] = useState('');
  const [term, setTerm] = useState('');
  const { isLoading, data, error } = useFetch(url);

  const [locations, headers] = useMemo(() => {
    const locations = [];
    const headers = [];

    if (data) {
      const results: any[] = data.results;

      results.forEach(({ location }: any) =>
        locations.push(flattenObject(location))
      );
      Object.keys(locations[0]).forEach((key) => headers.push(key));
    }
    return [locations, headers];
  }, [data]);

  const sortedLocations = sortData(
    [...locations],
    selectedHeader,
    sortOrder
  ).filter((obj) =>
    Object.values(obj).some((value) =>
      String(value).toLocaleLowerCase().includes(term.toLocaleLowerCase())
    )
  );

  function orderData(header: string) {
    let curentSortOrder: sortOrderType | undefined;

    switch (sortOrder) {
      case 'default':
        curentSortOrder = 'asc';
        break;
      case 'asc':
        curentSortOrder = 'desc';
        break;
      case 'desc':
        curentSortOrder = 'default';
        break;
    }

    setSortOrder(curentSortOrder);
    setSelectedHeader(header);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <div>
        <label htmlFor="search">Search term:</label>
        <input
          onChange={(e) => setTerm(e.target.value)}
          id="search"
          type="text"
        />
      </div>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th onClick={() => orderData(header)} key={header}>
                {header === selectedHeader && sortOrder === 'asc' ? (
                  <span>{header}&nbsp;&uarr;</span>
                ) : header === selectedHeader && sortOrder === 'desc' ? (
                  <span>{header}&nbsp;&darr;</span>
                ) : (
                  header
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedLocations.map((location, index) => (
            <tr key={index}>
              {Object.values(location).map((value: any, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
