import { Mail, Phone, MapPin } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sajjanaasht@gmail.com",
    href: "mailto:pedro@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 90242-08888",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New Delhi",
    href: "#",
  },
];
const openGmail = () => {
  const to = "sajjanaasht@gmail.com";
  const subject = "";
  const body = "Hi";

  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.open(gmailURL, "_blank");
};

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build <span className="font-serif italic font-normal text-white">something great.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.</p>
        </div>

        <div className=" gap-12 max-w-3xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a key={i} href={item.href} className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
           
            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">I'm currently open to new opportunities and exciting projects. Whether you need a full-time engineer or a freelance consultant, let's talk!</p>
            </div>
             <div  className="flex items-center justify-center"> 
              <div className="rounded-4xl cursor-pointer" onClick= {openGmail}>
              <AnimatedBorderButton  > Send Message</AnimatedBorderButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
