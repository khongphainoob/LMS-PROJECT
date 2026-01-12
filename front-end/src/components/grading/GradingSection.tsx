import React, { useMemo, useRef, useState } from 'react';
import { Upload, FileDown, Users, NotebookText, CheckCircle2, Image, Layers } from 'lucide-react';

export type SectionPreset = {
  title: string;
  subtitle: string;
  accent: string;
  badge: string;
};

export type GradingOptions = {
  classes: string[];
  sessions: string[];
  students: string[];
};

type BaseGradingState = {
  selectedClass: string;
  session: string;
  student: string;
  baremFile?: File;
  notes: string;
  images: File[];
};

interface GradingSectionProps {
  preset: SectionPreset;
  options: GradingOptions;
}

const GradingSection: React.FC<GradingSectionProps> = ({ preset, options }) => {
  const [state, setState] = useState<BaseGradingState>({
    selectedClass: options.classes[0],
    session: options.sessions[0],
    student: options.students[0],
    baremFile: undefined,
    notes: '',
    images: []
  });

  const [showNotes, setShowNotes] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const summary = useMemo(() => {
    if (!state.images.length) return 'Chưa có ảnh nào';
    if (state.images.length === 1) return state.images[0].name;
    return `${state.images.length} ảnh đã chọn`;
  }, [state.images]);

  const handleBaremUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setState(prev => ({ ...prev, baremFile: file }));
  };

  const handleImagesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setState(prev => ({ ...prev, images: files }));
  };

  const resetImages = () => {
    setState(prev => ({ ...prev, images: [] }));
    if (imageInputRef.current) imageInputRef.current.value = '';
  };

  const handleGrade = () => {
    if (!state.baremFile) {
      setMessage('Vui lòng tải barem cho phiên chấm này.');
      return;
    }
    if (!state.images.length) {
      setMessage('Cần tải ít nhất 1 ảnh bài làm để chấm.');
      return;
    }
    setMessage(`Đã chấm xong ${state.images.length} ảnh cho ${state.student}. Ảnh đã được reset.`);
    resetImages();
  };

  return (
    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
      <div className={`p-6 bg-gradient-to-r ${preset.accent} text-white flex items-center justify-between`}>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide opacity-90">{preset.badge}</p>
          <h3 className="text-2xl font-bold leading-tight">{preset.title}</h3>
          <p className="text-sm opacity-90">{preset.subtitle}</p>
        </div>
        <div className="px-4 py-2 rounded-2xl bg-white/15 border border-white/30 text-sm font-semibold flex items-center gap-2">
          <NotebookText size={16} /> 1 barem cho toàn bộ ảnh
        </div>
      </div>

      <div className="p-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Chọn lớp" icon={<Users size={16} />}>
            <select
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none"
              value={state.selectedClass}
              onChange={e => setState(prev => ({ ...prev, selectedClass: e.target.value }))}
            >
              {options.classes.map(c => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </Field>
          <Field label="Chia phiên chấm" icon={<Layers size={16} />}>
            <select
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={state.session}
              onChange={e => setState(prev => ({ ...prev, session: e.target.value }))}
            >
              {options.sessions.map(c => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </Field>
          <Field label="Chọn học sinh" icon={<Users size={16} />}>
            <select
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 outline-none"
              value={state.student}
              onChange={e => setState(prev => ({ ...prev, student: e.target.value }))}
            >
              {options.students.map(c => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </Field>
          <Field label="Barem (PDF/DOCX/TXT)" icon={<FileDown size={16} />}>
            <label className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl border border-dashed border-gray-300 hover:border-teal-500 cursor-pointer gap-3">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Upload size={16} className="text-teal-600" />
                <span>{state.baremFile ? state.baremFile.name : 'Tải 1 file barem cho phiên này'}</span>
              </div>
              <input type="file" accept=".pdf,.doc,.docx,.txt" className="hidden" onChange={handleBaremUpload} />
            </label>
          </Field>
        </div>

        <NotesArea
          value={state.notes}
          onChange={v => setState(prev => ({ ...prev, notes: v }))}
          showNotes={showNotes}
          toggle={() => setShowNotes(v => !v)}
        />

        <UploadArea
          summary={summary}
          images={state.images}
          onUpload={handleImagesUpload}
          inputRef={imageInputRef}
        />

        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleGrade}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold hover:opacity-95"
          >
            <CheckCircle2 size={18} /> Chấm bài
          </button>
          <button
            onClick={resetImages}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200"
          >
            Reset ảnh
          </button>
          {message && <span className="text-sm font-semibold text-gray-700">{message}</span>}
        </div>
      </div>
    </div>
  );
};

const Field: React.FC<{ label: string; icon?: React.ReactNode; children: React.ReactNode }> = ({ label, icon, children }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
      {icon && <span className="text-teal-600">{icon}</span>}
      <span>{label}</span>
    </div>
    {children}
  </div>
);

const NotesArea: React.FC<{ value: string; onChange: (v: string) => void; showNotes: boolean; toggle: () => void }> = ({ value, onChange, showNotes, toggle }) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <p className="text-sm font-semibold text-gray-800">Lưu ý khi chấm (không bắt buộc)</p>
      <button className="text-sm font-semibold text-teal-600 hover:text-teal-700" onClick={toggle}>
        {showNotes ? 'Ẩn' : 'Thêm'} lưu ý
      </button>
    </div>
    {showNotes && (
      <textarea
        className="w-full rounded-xl border border-gray-200 px-3 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
        rows={3}
        placeholder="Ví dụ: Trừ 0.25 điểm lỗi trình bày, ưu tiên cách làm ngắn..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    )}
  </div>
);

const UploadArea: React.FC<{
  summary: string;
  images: File[];
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}> = ({ summary, images, onUpload, inputRef }) => (
  <div className="border border-gray-100 rounded-2xl p-4 bg-gray-50">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-lg bg-white text-teal-600 border border-gray-200"><Image size={16} /></div>
        <div>
          <p className="text-sm font-semibold text-gray-800">Upload ảnh bài làm</p>
          <p className="text-xs text-gray-500">Có thể chọn nhiều ảnh, áp dụng 1 barem cho tất cả</p>
        </div>
      </div>
      <span className="text-xs font-semibold text-gray-600">{summary}</span>
    </div>
    <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl py-6 bg-white hover:border-teal-500 cursor-pointer gap-2 text-sm text-gray-600">
      <Upload size={18} className="text-teal-600" />
      <span>Chọn hoặc kéo thả ảnh</span>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={onUpload}
      />
    </label>
    {images.length > 0 && (
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
        {images.map(file => (
          <div key={file.name} className="px-3 py-2 rounded-lg bg-white border border-gray-200 flex items-center gap-2">
            <Image size={14} className="text-gray-500" />
            <span className="truncate" title={file.name}>{file.name}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default GradingSection;
