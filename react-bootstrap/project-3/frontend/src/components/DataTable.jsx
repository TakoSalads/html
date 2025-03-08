import React, { useState, useEffect } from 'react';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState({ key: 'id', order: 'asc' });

  const fetchData = async () => {
    setLoading(true);
    const params = new URLSearchParams({
      page,
      per_page: 5,
      search,
      sort_by: sort.key,
      sort_order: sort.order,
    });

    try {
      const response = await fetch(`/api/data?${params}`);
      const result = await response.json();
      setData(result.data);
      setTotal(result.total);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page, search, sort]);

  const handleSort = (key) => {
    const order = sort.key === key && sort.order === 'asc' ? 'desc' : 'asc';
    setSort({ key, order });
  };

  return (
    <div className="container mt-4">
      {/* Search Input */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th onClick={() => handleSort('id')}>
                  ID {sort.key === 'id' && (sort.order === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('message')}>
                  Message {sort.key === 'message' && (sort.order === 'asc' ? '↑' : '↓')}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.message}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <nav>
            <ul className="pagination">
              {Array.from({ length: Math.ceil(total / 5) }, (_, i) => (
                <li key={i} className={`page-item ${page === i + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setPage(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default DataTable; // Ensure this line is present