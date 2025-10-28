import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-600">BizExpress</h3>
            <p className="text-sm text-gray-600">
              Expert business services for startups and SMEs
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/start-your-business/private-limited-company">Company Registration</Link></li>
              <li><Link href="/tax-and-advisory/gst-registration">GST Services</Link></li>
              <li><Link href="/trademark">Trademark</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contact@bizexpress.in
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Mumbai, India
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © 2025 BizExpress. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
