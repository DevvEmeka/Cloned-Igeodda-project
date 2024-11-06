import React from "react";

const Services: React.FC = () => {
  const gridData = [
    {
      title: "More About Us",
      content: `At CLONED IGEODDA Inc, we are committed to excellence and dedicated to providing top-tier employment services. Our diverse team of professionals is not only available for immediate deployment but also equipped with the skills and knowledge to excel in their respective fields. We pride ourselves on our comprehensive training programs and our unwavering commitment to inclusivity and excellence.`,
      color: "bg-blue-500",
    },
    {
      title: "Healthcare Excellence",
      content: `Our healthcare division stands as a beacon of quality and compassion. We offer a range of healthcare professionals who are well-trained and ready to address diverse healthcare needs with precision and empathy. Our healthcare professionals include Registered Nurses, Personal Support Workers, Developmental Support Workers, and Cleaners.`,
      color: "bg-green-500",
    },
    {
      title: "IT Solutions and Innovation",
      content: `In the realm of IT, CLONED IGEODDA Inc. delivers cutting-edge solutions that drive business success. Our IT services include software development, cloud services integration, IT service management, desktop technicians, and customer service representatives. We focus on creating customized solutions that meet the unique needs of businesses.`,
      color: "bg-yellow-500",
    },
    {
      title: "Comprehensive Workforce Solutions",
      content: `Our workforce solutions encompass a broad range of industries, including general labour workers, factory operators, cleaners, logistical and operational support, and facility management. We offer skilled professionals who are trained to meet the specific needs of your business.`,
      color: "bg-red-500",
    },
    {
      title: "Inclusivity and Training Program",
      content: `At CLONED IGEODDA Inc., we believe in fostering an inclusive environment where every employee can thrive. Our inclusivity initiatives include diverse hiring practices, equitable opportunities for career advancement, and an inclusive workplace culture. Our training programs include professional development workshops, mentorship programs, and job-specific training.`,
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 bg-gray-100 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">About CLONED IGEODDA Inc.</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto">
        {gridData.map((item, index) => (
          <div
            key={index}
            className={`${
              item.color
            } p-6 rounded-lg shadow-lg text-white flex flex-col justify-between transition-all transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-gray-300`}
          >
            <h2 className="text-xl font-bold mb-4">{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
