// src/components/PartnersSection.tsx
import { useEffect, useState } from "react";

type Partner = {
  image: string;
  name: string;
};

type ApiResponse = {
  page_id: number;
  page_name: string;
  data: Partner[];
};

export default function PartnersSection() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageName, setPageName] = useState("Our Partners");
  const raw = localStorage.getItem("OurPartnerDataLength");
  const countLoadding = raw || 4;
  useEffect(() => {
    fetch("https://press.fayadev.net/api/pages/15/34")
      .then((res) => res.json())
      .then((json: ApiResponse) => {
        setPartners(json.data || []);
        setPageName(json.page_name || "Our Partners");
      })
      .catch(() => setPartners([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
         <div className="mb-1 text-[18.19px] font-bold tracking-[0.3em] text-[#2A5BCA] uppercase">Collaborations</div>
      <div className="text-3xl font-bold text-slate-900 mb-8">
        {pageName.split(" ")[0]}{" "}
        <span className="text-[#2A5BCA]">{pageName.split(" ")[1]}</span>
      </div>
      <div className="mt-4 max-w-4xl text-[16.67px] leading-6 text-[#64717C] mb-[4%] mt-[10px">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s…
      </div>
      {loading ? (
        <div
          className="
            grid gap-6
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
          "
        >
          {Array.from({ length: Number(countLoadding) }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm animate-pulse"
            >
              <div className="h-20 w-20 mb-2 bg-slate-200 rounded" />
              <div className="h-3 w-16 bg-slate-200 rounded" />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="
            grid gap-2
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
          "
        >
          {partners.map((p, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-4"
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-[132.2798614501953px] w-[140.0096435546875px] object-contain mb-2"
                loading="lazy"
              />
              <p className="text-sm font-medium text-slate-700 text-center">
                {p.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
