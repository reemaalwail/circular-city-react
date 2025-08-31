// src/components/OurServices.tsx
import { useEffect, useState } from "react";

type Item = {
  title?: string;
  description?: string;
  english_title?: string;
  english_description?: string;
};

type ApiRes = { page_id: number; page_name: string; data: Item[] };

export default function OurServices() {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const URL = "https://press.fayadev.net/api/pages/15/37";
    fetch(URL)
      .then((r) => (r.ok ? r.json() : Promise.reject(`HTTP ${r.status}`)))
      .then((json: ApiRes) => setData(json?.data ?? []))
      .catch((e) => setErr(String(e)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-6 text-slate-500">Loading…</div>;
  if (err) return <div className="p-6 text-red-600">Error: {err}</div>;

  return (
    <section className="mx-auto p-[5%] ltr">
      <div className="text-[40px] font-medium text-black">
        Our <span className="text-[#2A5BCA]">services</span>
      </div>
      <div className="max-w-3xl text-[16.67px] text-[#64717C] mb-[4%] mt-[10px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
      

      {/* العناصر */}
      <div className="mt-10 space-y-12l">
        {data.map((it, i) => {
          const title = it.english_title || it.title || "";
          const desc = it.english_description || it.description || "";
          return (
            <div key={i} className="flex items-start gap-3 mt-[15px]">
              <span className="mt-1 h-[47px] w-[2.59px] rounded bg-[#2A5BCA]" />
              <div>
                <div className="text-[40px] font-extrabold uppercase tracking-wide text-[#2A5BCA]">
                  {title}
                </div>
                <div className="mt-3 max-w-3xl text-[16.67px] leading-7 text-[#64717C]">
                  {desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
