"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ModernContact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
            <span className="serif-italic">Let's</span> Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're interested in partnership opportunities, investment inquiries, or learning more about our companies, we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 border-2 border-gray-200 focus:border-gray-900 outline-none transition-all text-gray-900"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 border-2 border-gray-200 focus:border-gray-900 outline-none transition-all text-gray-900"
                  placeholder="john@company.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-6 py-4 border-2 border-gray-200 focus:border-gray-900 outline-none transition-all text-gray-900"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-6 py-4 border-2 border-gray-200 focus:border-gray-900 outline-none transition-all text-gray-900 resize-none"
                  placeholder="Tell us about your inquiry..."
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Headquarters</div>
                    <div className="text-gray-900">Başpınar Organize Sanayi Bölgesi<br />Şehitkamil, Gaziantep, Turkey</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Phone</div>
                    <div className="text-gray-900">+90 342 360 98 55</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Email</div>
                    <div className="text-gray-900">info@tunagroup.com.tr</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t-2 border-gray-200">
              <h4 className="text-lg font-light text-gray-900 mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
