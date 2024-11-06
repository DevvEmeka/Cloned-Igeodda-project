import React from "react";

const Creeers: React.FC = () => {
  const jobs = [
    {
      title: "Personal Support Worker (PSW)",
      description:
        "We are looking for dedicated and compassionate PSWs to provide high-quality care to our clients.",
      link: "#",
      bgColor: "bg-blue-100",
    },
    {
      title: "Nurse",
      description:
        "Join our team as a Nurse and provide healthcare services across various locations.",
      link: "#",
      bgColor: "bg-green-100",
    },
    {
      title: "Nannies for Private Services",
      description:
        "We are looking for experienced and caring nannies to provide personalized care for children in private home settings.",
      link: "#",
      bgColor: "bg-purple-100",
    },
    {
      title: "Developmental Services Worker (DSW)",
      description:
        "We are hiring DSWs to support individuals with developmental disabilities.",
      link: "#",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Full Stack Developer",
      description:
        "We are seeking a Full Stack Developer to work on diverse projects involving both front-end and back-end technologies.",
      link: "#",
      bgColor: "bg-pink-100",
    },
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Careers</h2>
      <p className="text-center mb-8">
        Welcome to the CLONED IGEODDA Inc. Careers page. We are currently seeking
        talented individuals to join our team. Below are our current job
        openings:
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`${job.bgColor} p-6 rounded-lg shadow-md flex flex-col justify-between`}
          >
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <p className="mb-4">{job.description}</p>
            <a
              href={job.link}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Read more
            </a>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center py-10 px-4 md:px-8 lg:px-12 min-h-screen">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl p-6  rounded-lg shadow-lg text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          How to Apply
        </h2>
        <p className="mb-4 text-sm md:text-base lg:text-lg">
          To apply for any of the positions listed above, please follow the steps below:
        </p>
        <ol className="list-decimal list-inside text-left mb-6 space-y-3 text-sm md:text-base lg:text-lg">
          <li>Review the job descriptions to ensure you meet the qualifications and requirements.</li>
          <li>Prepare your resume and cover letter, highlighting your relevant experience and skills.</li>
          <li>
            Submit your application through our{" "}
            <a href="/contact-us" className="text-blue-600 hover:underline">
              Contact Us
            </a>{" "}
            page or email your resume to{" "}
            <a href="mailto:careers@igeodda.com" className="text-blue-600 hover:underline">
              careers@igeodda.com
            </a>.
          </li>
          <li>We will review your application and contact you if your qualifications match our needs.</li>
        </ol>
        <p className="text-sm md:text-base lg:text-lg">
          If you have any questions about the application process or need further assistance, feel free to reach out to us.
        </p>
      </div>
    </div>
    </section>
  );
};

export default Creeers;
