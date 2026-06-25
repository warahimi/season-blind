// import { Phone, Mail, MapPin, Clock3 } from "lucide-react";

// import { brand } from "../data/siteData";

// const ContactSection = () => {
//   return (
//     <section id="contact" className="bg-[#F7F1EA] px-6 py-24 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         {/* Section Header */}
//         <div className="mx-auto max-w-3xl text-center">
//           <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#F26A00] shadow-sm">
//             Contact Us
//           </span>

//           <h2 className="mt-6 text-4xl font-extrabold text-[#5A3827]">
//             Request Free Measurement & Quote
//           </h2>

//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             Contact Season Blinds today for professional window blinds
//             consultation, measurement, and installation.
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
//           {/* Left Info */}
//           <div className="rounded-3xl bg-white p-10 shadow-xl">
//             <h3 className="text-3xl font-extrabold text-[#5A3827]">
//               Get In Touch
//             </h3>

//             <p className="mt-4 leading-7 text-gray-600">
//               We are ready to help you choose the perfect blinds and shades for
//               your home or office.
//             </p>

//             <div className="mt-10 space-y-6">
//               {/* Phone */}
//               <div className="flex items-start gap-4">
//                 <div className="rounded-2xl bg-[#F26A00]/10 p-4 text-[#F26A00]">
//                   <Phone size={26} />
//                 </div>

//                 <div>
//                   <h4 className="text-lg font-bold text-[#5A3827]">
//                     Phone Number
//                   </h4>

//                   <p className="mt-1 text-gray-600">{brand.phone}</p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start gap-4">
//                 <div className="rounded-2xl bg-[#F26A00]/10 p-4 text-[#F26A00]">
//                   <Mail size={26} />
//                 </div>

//                 <div>
//                   <h4 className="text-lg font-bold text-[#5A3827]">
//                     Email Address
//                   </h4>

//                   <p className="mt-1 text-gray-600">{brand.email}</p>
//                 </div>
//               </div>

//               {/* Address */}
//               <div className="flex items-start gap-4">
//                 <div className="rounded-2xl bg-[#F26A00]/10 p-4 text-[#F26A00]">
//                   <MapPin size={26} />
//                 </div>

//                 <div>
//                   <h4 className="text-lg font-bold text-[#5A3827]">Location</h4>

//                   <p className="mt-1 text-gray-600">{brand.address}</p>
//                 </div>
//               </div>

//               {/* Working Hours */}
//               <div className="flex items-start gap-4">
//                 <div className="rounded-2xl bg-[#F26A00]/10 p-4 text-[#F26A00]">
//                   <Clock3 size={26} />
//                 </div>

//                 <div>
//                   <h4 className="text-lg font-bold text-[#5A3827]">
//                     Working Hours
//                   </h4>

//                   <p className="mt-1 text-gray-600">Monday - Saturday</p>

//                   <p className="text-gray-600">8:00 AM - 6:00 PM</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Form */}
//           <div className="rounded-3xl bg-white p-10 shadow-xl">
//             <h3 className="text-3xl font-extrabold text-[#5A3827]">
//               Send Us A Message
//             </h3>

//             <p className="mt-4 leading-7 text-gray-600">
//               Fill out the form and we will contact you shortly.
//             </p>

//             <form className="mt-10 space-y-6">
//               {/* Name */}
//               <div>
//                 <label className="mb-2 block font-semibold text-[#5A3827]">
//                   Full Name
//                 </label>

//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#F26A00]"
//                 />
//               </div>

//               {/* Phone */}
//               <div>
//                 <label className="mb-2 block font-semibold text-[#5A3827]">
//                   Phone Number
//                 </label>

//                 <input
//                   type="text"
//                   placeholder="Enter your phone number"
//                   className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#F26A00]"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="mb-2 block font-semibold text-[#5A3827]">
//                   Email Address
//                 </label>

//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#F26A00]"
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="mb-2 block font-semibold text-[#5A3827]">
//                   Message
//                 </label>

//                 <textarea
//                   rows="5"
//                   placeholder="Tell us about your blinds project..."
//                   className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#F26A00]"
//                 ></textarea>
//               </div>

//               {/* Button */}
//               <button
//                 type="submit"
//                 className="w-full rounded-full bg-[#F26A00] px-8 py-4 font-bold text-white shadow-md transition hover:bg-[#d85f00]"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import { useState } from "react";
import { Phone, Mail, MapPin, Clock3 } from "lucide-react";
import { brand } from "../data/siteData";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setStatus("Message sent successfully. We will contact you soon.");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        "Failed to send message. Please try again or call us directly.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#F7F1EA] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#F26A00] shadow-sm">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-[#5A3827]">
            Request Free Measurement & Quote
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Contact Season Blinds today for professional window blinds
            consultation, measurement, and installation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <h3 className="text-3xl font-extrabold text-[#5A3827]">
              Get In Touch
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              We are ready to help you choose the perfect blinds and shades for
              your home or office.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-[#F26A00]/10 p-4 text-[#F26A00]">
                  <Phone size={26} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#5A3827]">
                    Phone Number
                  </h4>
                  <p className="mt-1 text-gray-600">{brand.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-[#F26A00]/10 p-4 text-[#F26A00]">
                  <Mail size={26} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#5A3827]">
                    Email Address
                  </h4>
                  <p className="mt-1 text-gray-600">{brand.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-[#F26A00]/10 p-4 text-[#F26A00]">
                  <MapPin size={26} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#5A3827]">Location</h4>
                  <p className="mt-1 text-gray-600">{brand.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-[#F26A00]/10 p-4 text-[#F26A00]">
                  <Clock3 size={26} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#5A3827]">
                    Working Hours
                  </h4>
                  <p className="mt-1 text-gray-600">Monday - Saturday</p>
                  <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <h3 className="text-3xl font-extrabold text-[#5A3827]">
              Send Us A Message
            </h3>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <input
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full name"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#F26A00]"
              />

              <input
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#F26A00]"
              />

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#F26A00]"
              />

              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your blinds project..."
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#F26A00]"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#F26A00] px-8 py-4 font-bold text-white shadow-md transition hover:bg-[#d85f00] disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-center font-semibold text-[#5A3827]">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
