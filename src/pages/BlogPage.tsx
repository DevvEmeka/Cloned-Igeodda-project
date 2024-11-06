import React from "react";

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of Healthcare Staffing: Trends to Watch",
      description:
        "Explore emerging trends in healthcare staffing and how they are shaping the future of patient care and service delivery. This post discusses key developments such as the rise of telemedicine, the integration of AI in staffing solutions, and the impact of healthcare reform on staffing practices.",
      readMore: "Read more",
    },
    {
      title: "Harnessing Technology for Efficient Workforce Solutions",
      description:
        "Learn how technological advancements are enhancing workforce management and operational efficiency across various industries. This article covers innovations like automated HR tools, data-driven recruitment strategies, and the benefits of cloud-based workforce management systems.",
      readMore: "Read more",
    },
    {
      title: "Top 5 IT Innovations Transforming Businesses Today",
      description:
        "Discover the latest IT innovations that are driving business success and how they can be leveraged for competitive advantage. Topics include blockchain technology, AI and machine learning, IoT, 5G networks, and advanced cybersecurity measures.",
      readMore: "Read more",
    },
    {
      title: "Success Stories: How Our Clients Achieved Their Goals",
      description:
        "Read about the success stories of our clients and how our solutions have made a positive impact on their organizations. This post highlights case studies of clients who have transformed their operations through our services.",
      readMore: "Read more",
    },
    {
      title: "Best Practices for Professional Development and Training",
      description:
        "Get tips and advice on how to effectively develop and train your workforce to meet the evolving demands of the industry. This guide provides strategies for creating effective training programs, fostering continuous learning, and measuring training success.",
      readMore: "Read more",
    },
  ];

  return (
    <section className="flex flex-col items-center py-10 px-4 md:px-8 lg:px-16 bg-gray-50 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
            <p className="text-sm md:text-base mb-4">{post.description}</p>
            <button className="text-blue-500 font-medium hover:text-blue-600">{post.readMore}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;

