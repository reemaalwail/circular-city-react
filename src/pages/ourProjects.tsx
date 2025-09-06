import { useEffect, useState } from "react";

type Item = {
  title?: string;
  description?: string;
  english_title?: string;
  english_description?: string;
  image?: string;
};

type ApiRes = { page_id: number; page_name: string; data: Item[] };

export default function OurProjects() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const raw = localStorage.getItem("OurProjectsDataLength");
  const countLoadding = raw || 4;

  useEffect(() => {
    fetch("https://press.fayadev.net/api/pages/15/45")
      .then((r) => (r.ok ? r.json() : Promise.reject(`HTTP ${r.status}`)))
      .then((json: ApiRes) => {
        const data = json?.data ?? [];
           console.log(data)
        setItems(data) 
       
      })
      .catch((e) => setErr(String(e)))
      .finally(() => setLoading(false));
  }, []);


  return (
    <div className="home">
    <section className="relative mx-auto max-w-6xl px-4 py-12 sm:py-16 ltr">
      <div className="fontJokkerBold mb-1 text-[18.19px] font-bold tracking-[0.3em] text-[#2A5BCA] uppercase">WORK</div>
      <div className="fontJokkerMedium text-[40px] text-black sm:text-4xl">
        Our <span className="text-[#2A5BCA] fontJokkerBold">Projects</span>
      </div>

      <div className="fontJokkerMedium mt-4 max-w-4xl text-[16.67px] leading-6 text-[#64717C] mb-[4%] mt-[10px">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s…
      </div>

      {loading&& (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length:  Number(countLoadding) }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-40 rounded-xl bg-slate-200" />
              <div className="mt-3 h-5 w-3/4 rounded bg-slate-200" />
              <div className="mt-2 h-4 w-full rounded bg-slate-200" />
              <div className="mt-1 h-4 w-5/6 rounded bg-slate-200" />
            </div>
          ))}
        </div>
      )}

      {err && (
        <div className="mt-8 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          Error: {err}
        </div>
      )}

      {/* الشبكة */}
      {!loading && !err && (
        <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => {
            const title = it.english_title || it.title || "";
            const desc = it.english_description || it.description || "";
            return (
              <article
                key={idx}
                className="p-3"
              >
  
                {it.image ? (
                  <img
                    src={it.image}
                    alt={title}
                    className="h-[239px] w-full rounded-xl object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative h-40 w-full rounded-xl bg-slate-100">
                    <div className="absolute inset-0 grid place-items-center text-slate-400">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                        <path d="M3 5h18v14H3z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M3 15l5-5 5 5 3-3 5 5" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                )}

                <div className="fontJokkerMedium mt-3 line-clamp-2 text-lg font-extrabold leading-snug text-slate-800">
                  {title}
                </div>
                <div className="fontJokkerMedium mt-2 line-clamp-3 text-[13.5px] leading-6 text-slate-600">{desc}</div>
              </article>
            );
          })}
        </div>
      )}
    </section>
    </div>
  );
}
