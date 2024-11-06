export default function Resources() {
  return (
    <div className="py-8 px-4 bg-[#f2f7f8]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Resources</h3>
            <p>
              At CLONED IGEODDA Inc., we are committed to providing valuable resources
              to our clients and partners. Our resources section is designed to
              offer insights, tools, and information that can help you navigate
              the complex landscape of employment solutions.
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong>Industry Insights:</strong> Stay informed with the latest
                trends and developments in healthcare and technology sectors.
              </li>
              <li>
                <strong>Tools and Templates:</strong> Access a range of tools and
                templates that can assist in your hiring processes, from job
                description templates to interview checklists.
              </li>
              <li>
                <strong>White Papers and Reports:</strong> Download comprehensive
                reports and white papers that delve into critical topics related
                to workforce management, healthcare staffing, and IT innovations.
              </li>
              <li>
                <strong>Case Studies:</strong> Explore detailed case studies that
                showcase our successful projects and the impact of our solutions
                on various organizations.
              </li>
              <li>
                <strong>Webinars and Workshops:</strong> Participate in our
                webinars and workshops that provide valuable training and updates
                on industry best practices and new technologies.
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">FAQ</h3>
            <p>
              Here are some frequently asked questions about our services at
              CLONED IGEODDA Inc.
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong>What services does CLONED IGEODDA Inc. provide?</strong> We offer
                a comprehensive range of services including healthcare staffing,
                IT solutions and innovation, and workforce solutions. For more
                details, visit our Services page.
              </li>
              <li>
                <strong>How can I apply for a job through CLONED IGEODDA Inc.?</strong> You
                can apply for job opportunities by visiting our Careers page,
                where you will find a list of current openings and application
                instructions.
              </li>
              <li>
                <strong>What types of IT solutions do you offer?</strong> Our IT
                division provides services such as software development, cloud
                services integration, IT service management (ITSM), and technical
                support. For more information, visit our Services page.
              </li>
              <li>
                <strong>How does CLONED IGEODDA Inc. ensure the quality of its healthcare
                staff?</strong> We maintain high standards through rigorous
                training programs, adherence to industry standards, and continuous
                professional development. Learn more on our About Us page.
              </li>
              <li>
                <strong>Can I contact CLONED IGEODDA Inc. for a consultation?</strong> Yes, you
                can request a consultation by reaching out through our Contact Us
                page.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h3 className="text-2xl font-semibold">Blog</h3>
          <p>
            Welcome to the CLONED IGEODDAs Inc. blog, where we share insights, updates,
            and expert opinions on topics relevant to our industry.
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>"The Future of Healthcare Staffing":</strong> Explore the
              trends that are shaping the future of healthcare staffing,
              including the increasing role of technology in workforce management.
            </li>
            <li>
              <strong>"Navigating IT Challenges in the Modern Business
              Environment":</strong> Learn about the common IT challenges faced
              by businesses today and how to overcome them with innovative
              solutions.
            </li>
            <li>
              <strong>"Workforce Solutions for the Next Decade":</strong> Discover
              the strategies and solutions that will define the next decade of
              workforce management and how IGEODDA Inc. is leading the way.
            </li>
            <li>
              <strong>"Building a Resilient Workforce":</strong> Understand the
              importance of resilience in today’s workforce and how to cultivate
              it within your organization.
            </li>
            <li>
              <strong>"The Role of AI in Healthcare":</strong> Dive into the role
              of artificial intelligence in healthcare and how it's transforming
              the way care is delivered.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
