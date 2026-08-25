import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="bg-[#123047] text-white/80 text-xs py-1.5 border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
          <span>Registered Independent Multidisciplinary Consulting Firm &bull; Established 2013</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1 bg-green-100/10 text-green-300 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-green-400/30">
            Public Record Verified
          </span>
          <Link href="/admin" className="text-white/60 hover:text-white underline text-[11px]">
            CMS Inspector
          </Link>
        </div>
      </div>
    </div>
  );
}
