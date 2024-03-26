"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import ButtonLink from "./ButtonLink";
import { MdEmail } from "react-icons/md";
// import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [data, setData] = React.useState<any>({ input: "", textArea: "" });

  return (
    <motion.section
      id="Contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <div className="text-gray-700 flex items-center justify-center gap-2 -mt-6 dark:text-white/80">
          <div className=""><MdEmail size={20} /></div>
        <a className="underline" href="mailto:preciousabou@gmail.com">
           preciousabou@gmail.com
        </a>{" "}
      </div>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data } = await sendEmail(formData);

          // if (error) {
          //   toast.error(error);
          //   return;
          // }

          // toast.success("Email sent successfully!");
          // setData({input: "", textArea: ""});
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          value={data.input}
          onChange={(e) => setData({ ...data, input: e.target.value })}
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          value={data.textArea}
          onChange={(e) => setData({ ...data, textArea: e.target.value })}
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <ButtonLink type="submit">Submit</ButtonLink>
      </form>
    </motion.section>
  );
}