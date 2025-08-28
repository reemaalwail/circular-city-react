
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
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Our <span className="text-blue-600">services</span>
        </h2>
        <p className="text-gray-600 leading-relaxed mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the
        </p>

        {/* Services list */}
        <div className="space-y-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-blue-700 border-l-4 border-blue-600 pl-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
