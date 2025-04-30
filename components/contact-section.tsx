import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, subject, message } = formData
    const mailtoLink = `mailto:info@mcthconsult.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <SectionHeading
          badge="Contact Us"
          title="Get In"
          titleColored="Touch"
          description="Have a project in mind? Contact us today to discuss how we can help your organization succeed"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-md bg-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-md bg-transparent"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md bg-transparent"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md min-h-[120px] bg-transparent"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-[#f5c855] hover:bg-yellow-500 text-black">Send Message</Button>
              </form>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full p-3">
                    <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-muted-foreground">Office Address:<br />
                    5th Ngong Avenue Suites, 8th Floor.<br />
                    P.O Box 1630 - 00606, Nairobi</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full p-3">
                    <Phone className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">+254 736 909 050‬
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full p-3">
                    <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">Info@mcthconsult.com</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-4">
                  <h4 className="font-medium mb-3">Follow Us</h4>
                  <div className="flex gap-3">
                    {[
                      { name: "LinkedIn", url: "https://www.linkedin.com/company/mcthconsult" },
                      { name: "Twitter", url: "https://twitter.com/mcthconsult" },
                      { name: "Facebook", url: "https://www.facebook.com/mcthconsult" },
                      { name: "Instagram", url: "https://www.instagram.com/mcthconsult" }
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary-100 dark:bg-primary-900/30 hover:bg-primary-200 dark:hover:bg-primary-800/30 rounded-full p-3 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary-600 dark:text-primary-400"
                        >
                          {social.name === "LinkedIn" ? (
                            <>
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                              <rect width="4" height="12" x="2" y="9" />
                              <circle cx="4" cy="4" r="2" />
                            </>
                          ) : social.name === "Twitter" ? (
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          ) : social.name === "Facebook" ? (
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          ) : (
                            <>
                              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </>
                          )}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <h3 className="text-xl font-semibold mb-6">Our Location</h3>
              <div className="aspect-video bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6893831179247!2d36.8177!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f7e8b1e863f3b%3A0x91df392c5f7e4e6e!2s5th%20Ngong%20Avenue%20Suites!5e0!3m2!1sen!2ske!4v1710259774247!5m2!1sen!2ske"
                  width="600"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
