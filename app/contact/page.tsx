import type { Metadata } from "next";
import baseMetadata from "../layout";
import Contact from "./Contact";

export const runtime = "edge";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Ryan | Contact",
  description:
    "Get in touch with Ryan, a skilled fullstack developer ready to bring your ideas to life.",
};

const ContactPage = () => {
  return (
    <Contact />
  );
};

export default ContactPage;
