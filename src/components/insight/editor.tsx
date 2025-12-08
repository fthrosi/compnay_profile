"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

interface ReactQuilProps {
  defaultValue?: string;
  onChange: (value: string) => void; // ✅ Callback ke parent
}

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => (
    <div className="border border-slate-300 rounded-lg p-4 min-h-[300px] bg-slate-50 animate-pulse">
      <p className="text-slate-400">Loading editor...</p>
    </div>
  ),
});

export default function ReactQuil({
  defaultValue = "",
  onChange,
}: ReactQuilProps) {
  const modules = {
    toolbar: [
      [{ header: [2, 3, false] }], // H2, H3, normal
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote"],
      [{ indent: "-1" }, { indent: "+1" }], // ✅ Indent/Outdent
      [{ align: [] }],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "list",
    "indent",
    "blockquote",
    "align",
    "link",
  ];

  return (
    <div className="quill-wrapper">
      <ReactQuill
        theme="snow"
        value={defaultValue}
        onChange={onChange} // ✅ Kirim value ke parent
        modules={modules}
        formats={formats}
        placeholder="Mulai menulis artikel Anda di sini..."
        className="bg-white"
      >
        <div className="overflow-y-auto min-h-70 bg-white p-4 border border-slate-300 rounded-b-lg" />
      </ReactQuill>
    </div>
  );
}
