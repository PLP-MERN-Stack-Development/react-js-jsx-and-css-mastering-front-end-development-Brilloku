import { useState, useEffect } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function ApiList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    let cancel = false;
    async function fetchData() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('Failed to fetch data');
        const json = await res.json();
        if (!cancel) setData(json);
      } catch (err) {
        if (!cancel) setError(err.message);
      } finally {
        if (!cancel) setLoading(false);
      }
    }
    fetchData();
    return () => { cancel = true; };
  }, []);

  const filtered = data.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.body.toLowerCase().includes(query.toLowerCase()));
  const totalPages = Math.ceil(filtered.length / perPage);
  const pageData = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">API Integration</h1>
            <p className="text-gray-600 dark:text-gray-300">Fetch and explore posts from JSONPlaceholder</p>
          </div>

          <Card>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Search Posts
              </h2>
              <div className="relative">
                <input
                  value={query}
                  onChange={e => { setQuery(e.target.value); setPage(1); }}
                  placeholder="Search by title or content..."
                  className="w-full p-4 pl-12 rounded-lg border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-purple-500 focus:outline-none transition-colors text-lg"
                />
                <svg className="absolute left-4 top-4 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {loading && (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
                <span className="ml-3 text-lg text-gray-600 dark:text-gray-300">Loading posts...</span>
              </div>
            )}

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-red-700 dark:text-red-400 font-medium">Error: {error}</span>
                </div>
              </div>
            )}

            {!loading && !error && (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    Showing {pageData.length} of {filtered.length} posts
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Page {page} of {totalPages || 1}
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {pageData.map(p => (
                    <div key={p.id} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">{p.title}</h4>
                        <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs px-2 py-1 rounded-full">
                          #{p.id}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{p.body.slice(0, 120)}...</p>
                      <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        User {p.userId}
                      </div>
                    </div>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-8 flex justify-center items-center space-x-4">
                    <Button
                      onClick={() => setPage(p => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="px-6 py-2"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous
                    </Button>

                    <div className="flex space-x-2">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        const pageNum = Math.max(1, Math.min(totalPages - 4, page - 2)) + i;
                        return (
                          <button
                            key={pageNum}
                            onClick={() => setPage(pageNum)}
                            className={`px-3 py-2 rounded-lg transition-colors ${
                              page === pageNum
                                ? 'bg-purple-500 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>

                    <Button
                      onClick={() => setPage(p => Math.min(totalPages || 1, p + 1))}
                      disabled={page === totalPages}
                      className="px-6 py-2"
                    >
                      Next
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </div>
                )}
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
