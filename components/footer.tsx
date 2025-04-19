import Link from "next/link"
import { Clock, Mail, MapPin, Phone, Server } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative h-8 w-8">
                <Image
                  src="/logo.jpg"
                  alt="Matrix Cloud Hub Logo"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white">Matrix Cloud Hub</span>
            </div>
            <p className="text-slate-400 mb-6">
              A leading Kenyan ICT consultancy company delivering innovative technology solutions to government
              departments, religious organizations, and private companies.
            </p>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "Facebook", "Instagram"].map((social, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social === "LinkedIn" ? (
                      <>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </>
                    ) : social === "Twitter" ? (
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    ) : social === "Facebook" ? (
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
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-400 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#insights" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Network Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-slate-400">Shell, Joska, Kenya</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-slate-400">+254 736 909 050</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-slate-400">info@mcthconsult.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-slate-400">Mon-Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Matrix Cloud Hub. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
