import ContactForm from "./contact/contact-form";
import Peta from "./contact/peta";

export default function ContactSection() {
  return (
    <div className="container-layout lg:h-dvh flex items-center mb-10 lg:mb-0">
      <div className="flex flex-col-reverse md:flex-row px-5 py-10 lg:px-15 lg:py-20 gap-16 bg-light-primary rounded-[1.875rem] w-full" id="contact">
        <ContactForm />
        <Peta />
      </div>
    </div>
  );
}
