import React from "react";

const Faq: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-10 px-4 md:px-8 lg:px-16 bg-gray-50 min-h-screen">
      <div className="w-full max-w-screen-lg bg-white p-6 md:p-10 lg:p-12 rounded-lg shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
        <p className="text-sm md:text-base lg:text-lg text-center mb-8">
          Welcome to our FAQ page. Here, we address common questions about CLONED IGEODDA Inc. and our services. If you have any other
          questions or need further assistance, please don't hesitate to reach out to us.
        </p>

        {/* FAQ Items */}
        <div className="space-y-8">
          {/* FAQ 1 */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold">1. What is CLONED IGEODDA Inc.?</h2>
            <p className="text-sm md:text-base mt-2">
              IGEODDA Inc. is a premier provider of advanced solutions in healthcare staffing and IT services. Our goal is to deliver
              exceptional service and state-of-the-art technology solutions that address the dynamic needs of our clients. We specialize in
              offering innovative and reliable solutions to improve both operational efficiency and client satisfaction.
            </p>
          </div>

          {/* FAQ 2 */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold">2. How do I apply for a job with CLONED IGEODDA Inc.?</h2>
            <p className="text-sm md:text-base mt-2">
              Applying for a position with us is straightforward. Navigate to our Careers page, review the available job opportunities, and
              follow the application guidelines provided. Each application is carefully reviewed, and if your qualifications align with our
              requirements, we will reach out to you for further steps.
            </p>
          </div>

          {/* FAQ 3 */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold">3. What IT services does CLONED IGEODDA Inc. provide?</h2>
            <p className="text-sm md:text-base mt-2">
              Our IT services encompass a wide range of offerings including custom software development, cloud solutions, IT consulting,
              and support services. We are dedicated to delivering dependable and scalable solutions that are customized to meet the
              unique needs of your business.
            </p>
          </div>

          {/* FAQ 4 */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold">4. How does CLONED IGEODDA Inc. ensure the quality of its healthcare staffing?</h2>
            <p className="text-sm md:text-base mt-2">
              We uphold stringent standards in healthcare staffing by implementing thorough screening processes, offering continuous
              training, and adhering to industry regulations. Our team members are highly qualified and committed to providing superior care,
              ensuring the highest quality of service.
            </p>
          </div>

          {/* FAQ 5 */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold">5. How can I request a consultation with CLONED IGEODDA Inc.?</h2>
            <p className="text-sm md:text-base mt-2">
              To request a consultation, please visit our Contact Us page and complete the form with your information and specific request.
              Our team will contact you to arrange a suitable time for your consultation, tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
