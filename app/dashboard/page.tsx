'use client';
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

type DocumentItem = { id: string; status: string; result?: any };

export default function DashboardPage() {
  const [url, setUrl] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [docs, setDocs] = useState<DocumentItem[]>([]);

  const handleUpload = async () => {
    if (!url && files.length === 0) {
      toast({ title: 'No Input', description: 'Add a URL or select files first.' });
      return;
    }
    try {
      const formData = new FormData();
      if (url) formData.append('urls', url);
      files.forEach((f) => formData.append('files', f));
      const res = await fetch('/api/documents/upload', {
        method: 'POST',
        body: formData,
      });
      const json = await res.json();
      if (!res.ok) {
        toast({ title: 'Upload failed', description: json.error || 'Server error' });
        return;
      }
      const id = json.documentId;
      toast({ title: 'Queued', description: 'Document upload queued.' });
      setDocs((prev) => [...prev, { id, status: 'pending' }]);
      setUrl(''); setFiles([]);
      pollDocument(id);
    } catch (e: any) {
      toast({ title: 'Network error', description: e.message });
    }
  };

  const pollDocument = async (id: string) => {
    try {
      const res = await fetch(`/api/documents/status/${id}`);
      const json = await res.json();
      setDocs((prev) =>
        prev.map((d) => (d.id === id ? { id, status: json.status, result: json.result } : d))
      );
      if (json.status === 'pending' || json.status === 'processing') {
        setTimeout(() => pollDocument(id), 3000);
      }
    } catch (e: any) {
      toast({ title: 'Error', description: e.message });
    }
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-3xl mx-auto mt-12">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="flex flex-col sm:flex-row sm:space-x-2 mb-6">
          <input
            type="text"
            placeholder="Document URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 p-2 border rounded mb-2 sm:mb-0"
          />
          <input
            type="file"
            multiple
            onChange={(e) => setFiles(Array.from(e.target.files || []))}
            className="mb-2 sm:mb-0"
          />
          <button onClick={handleUpload} className="p-2 bg-blue-500 text-white rounded">
            Upload
          </button>
        </div>
        <div>
          {docs.map((doc) => (
            <div key={doc.id} className="mb-4 p-4 border rounded">
              <p><strong>ID:</strong> {doc.id}</p>
              <p><strong>Status:</strong> {doc.status}</p>
              {doc.status === 'done' && (
                <pre className="mt-2 bg-gray-100 p-2 overflow-auto">
                  {JSON.stringify(doc.result, null, 2)}
                </pre>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 