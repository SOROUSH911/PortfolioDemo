import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaBriefcase } from "react-icons/fa";
import SectionHeading from "../ui/section-heading";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

function ContactInfoItem({ icon, title, content }: ContactInfoItemProps) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md flex items-start border border-blue-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-blue-600 p-3 rounded-full mr-4 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-blue-800 mb-1">{title}</h3>
        <span className="text-base text-gray-800 font-medium">{content}</span>
      </div>
    </motion.div>
  );
}

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent",
      description: "Thank you for your message! I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="min-h-screen py-16">
      <div className="max-w-4xl">
        <SectionHeading
          tagText="GET IN TOUCH"
          title="Contact Me"
          description="Feel free to reach out for opportunities, collaborations, or just to say hello."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ContactInfoItem
              icon={<FaEnvelope className="text-white" />}
              title="Email"
              content={
                <a 
                  href="mailto:soroush.salari2023@gmail.com" 
                  className="text-blue-800 hover:text-blue-600 transition-colors"
                >
                  soroush.salari2023@gmail.com
                </a>
              }
            />

            <ContactInfoItem
              icon={<FaPhone className="text-white" />}
              title="Phone"
              content={
                <a 
                  href="tel:+14375663508" 
                  className="text-blue-800 hover:text-blue-600 transition-colors"
                >
                  +1 (437) 566-3508
                </a>
              }
            />

            <ContactInfoItem
              icon={<FaMapMarkerAlt className="text-white" />}
              title="Location"
              content={<p className="text-gray-800">Toronto, Ontario, Canada</p>}
            />

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-bold text-blue-800 mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/SOROUSH911" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-500 transition-all"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/soroushx" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-500 transition-all"
                >
                  <FaLinkedinIn className="text-xl" />
                </a>
                <a 
                  href="https://www.upwork.com/freelancers/~01f5d4a0f4361ee0af" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-500 transition-all"
                >
                  <FaBriefcase className="text-xl" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md border border-blue-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-blue-800 mb-6">Send me a message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-700 font-semibold">Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field} 
                          className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-900 font-semibold placeholder-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-700 font-semibold">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field} 
                          className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-900 font-semibold placeholder-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-700 font-semibold">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-blue-900 font-semibold placeholder-gray-400 min-h-[120px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors shadow-md"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
