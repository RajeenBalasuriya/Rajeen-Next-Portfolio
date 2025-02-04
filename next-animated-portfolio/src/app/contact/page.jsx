"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_ID
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          setMessage("");
          setEmail("");
        },
        () => {
          setError(true);
        }
      );
  };

  const isFormValid = message.trim() !== "" && email.trim() !== "";

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 bg-white">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl text-black">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-white rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span className="text-black">Dear Rajeen,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none text-black"
            name="user_message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <span className="text-black">My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="text-black">Regards</span>

          <motion.button
            as="button"
            className={`${
              isFormValid ? "bg-purple-200" : "bg-gray-300 cursor-not-allowed"
            } rounded font-semibold text-gray-600 p-4`}
            type="submit"
            disabled={!isFormValid} // Disable button if form is not valid
            whileHover={{
              scale: isFormValid ? 1.1 : 1,
              backgroundColor: isFormValid ? "#9b4d96" : "#ddd", // Darker on hover
              color:isFormValid?"#000000":"purple-200",
              transition: { duration: 0.3 },
            }}
          >
            Send
          </motion.button>

          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
