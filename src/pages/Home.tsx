export default function Home() {
  return (
    <main>
      <div className="px-4 sm:px-8 lg:px-16 max-w-[3000px]">
        <div className="">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-2xl font-bold mb-4">
                Welcome to CLONED IGEODDA Employment Agency
              </h1>
              <p className="text-lg md:text-xl">
                Your Gateway to Professional Employment Services.
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <h1 className="text-[32px] sm:text-[43px] font-bold text-[#333333] ">
              Our Services
            </h1>
          </div>

          <div className="bg-[#F8F4F0] p-6 mx-auto">
            <div className="grid gap-4">
              {/* Single Column (for Mobile) */}
              <div className="bg-blue-100 text-center p-6 rounded-lg">
                <p>
                  Welcome to CLONED IGEODDA Inc. At CLONED IGEODDA Inc., we
                  pride ourselves on delivering a diverse range of specialized
                  services designed to meet the needs of our clients across
                  various industries. Our commitment to excellence is reflected
                  in the expertise and dedication of our professionals.
                </p>
              </div>

              {/* Two Columns Layout (Tablet and Up) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-100 text-center p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-start mb-2">
                    Healthcare Excellence
                  </h3>
                  <p className="text-start">
                    Our healthcare division is at the forefront of delivering
                    exceptional care through our team of highly trained
                    professionals. We provide and deploy a wide array of
                    healthcare experts, including Registered Nurses, Personal
                    Support Workers (PSWs), Developmental Support Workers
                    (DSWs), and Cleaners. Our healthcare professionals are
                    equipped to offer compassionate, top-quality care in
                    hospitals, long-term care facilities, and home care
                    environments.
                  </p>
                </div>
                <div className="bg-yellow-100 text-center p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-start mb-2">
                    IT Solutions and Innovation
                  </h3>
                  <p className="text-start">
                    CLONED IGEODDA Inc. is also a leader in providing advanced
                    IT solutions tailored to enhance business productivity. Our
                    team of IT experts specializes in software development,
                    cloud services integration, and IT service management
                    (ITSM). Whether you need to streamline your operations,
                    develop custom software, or integrate cloud-based solutions,
                    our professionals are dedicated to delivering innovative and
                    reliable IT services that drive success.
                  </p>
                </div>
              </div>

              {/* Single Column (for Mobile) */}
              <div className="bg-purple-100 text-center p-6 rounded-lg">
                <h3 className="font-semibold text-xl text-start mb-2">
                  Comprehensive Workforce Solutions
                </h3>
                <p className="text-start">
                  Beyond healthcare and IT, we offer comprehensive workforce
                  solutions that cater to a wide range of industries. Our
                  skilled professionals are available to support your business
                  with a variety of tasks, from logistical and operational
                  support to facility management and specialized services. We
                  ensure that every deployment meets the highest standards of
                  professionalism and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
