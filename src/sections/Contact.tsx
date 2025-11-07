import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "@/lib/motion";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();

  const schema = z.object({
    name: z.string().min(2, "Please enter your full name"),
    email: z.string().email("Please enter a valid email"),
    subject: z.string().optional(),
    message: z.string().min(10, "Message should be at least 10 characters")
  });
  type FormValues = z.infer<typeof schema>;

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (values: FormValues) => {
    try {
      await emailjs.send(
        import.meta.env?.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env?.VITE_EMAILJS_TEMPLATE_ID || '',
        values,
        import.meta.env?.VITE_EMAILJS_PUBLIC_KEY || ''
      );
      toast({ title: "Message sent", description: "Thanks! I will get back to you shortly." });
      reset();
    } catch (_error) {
      toast({ title: "Failed to send", description: "Please try again later or email directly." });
    }
  };

  return (
    <section id="contact" className="section py-4 bg-gray-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-center text-text-secondary mb-12 max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          Have a project in mind or just want to chat? Feel free to reach out!
        </motion.p>
        <motion.div className="flex flex-col lg:flex-row gap-8" variants={staggerChildren(0.08, 0)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
          <motion.div className="w-full lg:w-1/2" variants={fadeUp}>
            <Card className="bg-card p-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl mb-4">Send me a message</CardTitle>
                <CardDescription className="mb-6">Have a question or project in mind? Let's talk!</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-card-foreground font-semibold mb-2">Name</label>
                    <Input type="text" id="name" placeholder="Your Name" required {...register('name')} />
                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-card-foreground font-semibold mb-2">Email</label>
                    <Input type="email" id="email" placeholder="Your Email" required {...register('email')} />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-card-foreground font-semibold mb-2">Subject</label>
                    <Input type="text" id="subject" placeholder="Subject of your message" {...register('subject')} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-card-foreground font-semibold mb-2">Message</label>
                    <Textarea id="message" rows={5} placeholder="Write your message here..." required {...register('message')} />
                    {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="bg-button-primary hover:bg-button-primary-hover text-white transform hover:scale-105 transition-all duration-300 w-full md:w-auto">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div className="w-full lg:w-1/2" variants={fadeUp}>
            <div className="h-full flex flex-col justify-start">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-text-secondary mb-8">Feel free to reach out through any of these channels. I'm always open to discussing new opportunities and collaborations.</p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4"><Mail className="h-6 w-6 text-portfolio-blue" /></div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <a href="mailto:harshkushwaha4151@gmail.com" className="text-text-secondary hover:text-portfolio-blue">harshkushwaha4151@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4"><Phone className="h-6 w-6 text-portfolio-blue" /></div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <a href="tel:+91 8528815252" className="text-text-secondary hover:text-portfolio-blue">+91 8528815252</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4"><MapPin className="h-6 w-6 text-portfolio-blue" /></div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-text-secondary">Gurugram, Haryana, India</p>
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/harsh-kushwaha-7x" target="_blank" rel="noopener noreferrer" className="bg-secondary p-3 rounded-full hover:bg-muted transition-colors"><Linkedin className="w-6 h-6 text-portfolio-blue" /></a>
                <a href="https://github.com/harshkushwaha7x" target="_blank" rel="noopener noreferrer" className="bg-secondary p-3 rounded-full hover:bg-muted transition-colors"><Github className="w-6 h-6 text-portfolio-blue" /></a>
                <a href="mailto:harshkushwaha4151@gmail.com" className="bg-secondary p-3 rounded-full hover:bg-muted transition-colors"><Mail className="w-6 h-6 text-portfolio-blue" /></a>
              </div>
              <div className="mt-8 bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">Let's Work Together</h3>
                <p className="text-card-foreground">I'm always interested in new opportunities and exciting projects. Whether you have a specific project in mind or want to explore possibilities, I'd love to hear from you and discuss how we can bring your ideas to life.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
