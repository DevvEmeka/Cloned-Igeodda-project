export default function Home() {
  return (
    <main className="mx-auto max-w-[1200px]">
      <div className="px-4 sm:px-8 lg:px-16 mt-16 ">
        <div className="text-center mb-8">
          <h1 className="text-[32px] sm:text-[43px] border-yellow-300 border-b-8 font-bold text-[#333333]">
            About Us
          </h1>
        </div>

        <div className="bg-[#F8F4F0] p-6 max-w-[1500px] mx-auto">
          {/* Flex Container for 5 Items */}
          <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:justify-between">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h2 className="font-bold text-3xl text-center mb-3">Overview</h2>
              <p className="md:text-start text-center">
              CLONED IGEODDA Inc. is a distinguished employment agency founded by
                professionals with deep expertise in healthcare and software
                engineering . Established through collaboration, our company
                represents a unique intersection of healthcare excellence and
                technological innovation. Our mission is to provide top-tier
                employment solutions by leveraging the extensive experience and
                comprehensive skills of our founding professionals.
              </p>
            </div>

            <div className="bg-green-100 text-center p-6 rounded-lg">
              <h2 className="font-bold text-3xl text-center mb-3">Founders</h2>
              <p className="md:text-start text-center">
                <span className="text-red-600">Healthcare Professional:</span>{" "}
                Our co-founder, a highly experienced healthcare worker, brings a
                wealth of knowledge in healthcare service delivery, patient
                care, and management. Their extensive background includes
                working in various capacities within both public and private
                healthcare sectors, where they have been instrumental in
                improving patient outcomes and implementing best practices in
                healthcare services.
              </p>
              <p className="md:text-start text-center">
                <span className="text-red-600">Software Engineer:</span> Our
                other co-founder, a skilled software engineer, has a robust
                background in developing and implementing technological
                solutions across various industries. With experience in both
                large and small organizations, they have played a crucial role
                in designing, deploying, and maintaining software solutions that
                drive operational efficiency and innovation.
              </p>
            </div>

            <div className="bg-yellow-100 p-6 rounded-lg">
              <h2 className="font-bold text-3xl text-center mb-3">Collaboration and Expert</h2>
              <p className="md:text-start text-center">
                The fusion of our founders’ expertise represents a strategic
                advantage for IGEODDA Inc. By combining healthcare and
                technology, we have established a unique employment agency that
                addresses the complex needs of both sectors. Our founders have
                consulted and collaborated with numerous organizations,
                contributing to projects that range from improving healthcare
                service delivery to advancing technological solutions. Their
                collective experience has shaped our approach to workforce
                solutions, ensuring that we deliver services that meet the
                highest standards of quality and effectiveness.
              </p>
            </div>

            <div className="bg-purple-100 p-6 rounded-lg">
              <h2 className="font-bold text-3xl text-center mb-3">Our Services</h2>
              <p className="md:text-start text-center mb-5">
                At IGEODDA Inc., we offer a broad spectrum of employment
                services, driven by our founder's commitment to excellence and
                innovation. Our services include
              </p>
              <p className="md:text-start text-center">
                <span className="text-red-600">Healthcare Staffing:</span> We
                provide highly trained healthcare professionals, including
                Registered Nurses (RNs), Personal Support Workers (PSWs),
                Developmental Support Workers (DSWs), and Cleaners. Each member
                of our healthcare staff is equipped with the skills and
                knowledge to deliver exceptional care, thanks to our rigorous
                recruitment process.
              </p>
              <p className="md:text-start text-center">
                <span className="text-red-600">Technology Solutions:</span> Our
                technology solutions include IT support, software development,
                and technical consulting. We offer services tailored to meet the
                specific needs of businesses and healthcare organizations,
                leveraging the latest advancements in technology to enhance
                operational efficiency and effectiveness.
              </p>
            </div>

            <div className="container mx-auto text-center">
            <h2 className="font-bold text-2xl text-center mb-3">Our Services</h2>
              <p className="mb-2">
                We are committed to providing personalized support to our
                clients and partners. For inquiries, please contact us at:
              </p>
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@igeodda.com"
                  className="text-blue-300 hover:underline"
                >
                  info@igeodda.com
                </a>
              </p>
              <p className="mb-2">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+12896862681"
                  className="text-blue-300 hover:underline"
                >
                  +1-289-686-2681
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
