import axios from "axios";
import {useState} from "react";

export function downloadBlob(blob: Blob, filename: string) {
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

export function downloadBufferAsFile(
  buffer: Buffer | ArrayBuffer,
  fileName: string,
  mimeType?: string
) {
  const blob = new Blob([buffer], { type: mimeType });

  downloadBlob(blob, fileName);
}


export default function () {
  const [loading, setLoading] = useState(false);

  return <div onClick={async () => {
    if (loading) return;
    setLoading(true);
    const resp = await axios.post('/api/browser');

    const pdf = Buffer.from(resp.data.pdf);

    downloadBufferAsFile(pdf, 'file.pdf');
    setLoading(false);
  }}>
    {loading ? 'Loading...' : 'Download pdf!'}
  </div>
}