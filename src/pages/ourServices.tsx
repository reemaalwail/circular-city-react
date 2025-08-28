
const services = [
  {
    title: "LOREM IPSUM LOREM IPSUM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing",
  },
  {
    title: "LOREM IPSUM LOREM IPSUM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing",
  },
  {
    title: "LOREM IPSUM LOREM IPSUM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing",
  },
  {
    title: "LOREM IPSUM LOREM IPSUM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing",
  },
  {
    title: "LOREM IPSUM LOREM IPSUM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing",
  },
  {
    title: "LOREM IPSUM LOREM IPSUM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-3xl font-semibold text-gray-900 mb-4">
          Our <span className="text-blue-600">services</span>
        </div>
        <div className="text-gray-600 leading-relaxed mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the
        </div>

 
 <div className="space-y-10">
            <div className="flex flex-col gap-4">
              <h3 className="titleService text-xl font-bold pl-3">
                title service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                service description
              </p>
            </div>
        </div>




      </div>
    </section>
  );
}
