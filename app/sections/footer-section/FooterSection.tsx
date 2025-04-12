import Link from "next/link";

import {Github, Linkedin, Mail} from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="bg-white py-4 border-t-gray-500/15 border-t-1">
      <div className="container mx-auto max-md:pl-2 max-md:pr-2 max-lg:pl-4 max-lg:pr-4 ">

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <p className="text-md font-bold text-gray-700">
              Victor Cordeiro
            </p>
            <div className="pl-6 space-x-5 text-xs text-gray-500">

              <Link href="#" className="hover:text-gray-900 transition-colors">About</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors">Skills & Technologies</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors">Projects</Link>
              <Link href="#" className="hover:text-gray-900 transition-colors">Resume</Link>
            </div>
          </div>
          <div className="flex flex-row gap-4 text-gray-500 ">
            <Link href={'#'}><Github className="w-5 h-5 hover:text-gray-900 transition-colors" /></Link>
            <Link href={'#'}><Linkedin className="w-5 h-5 hover:text-gray-900 transition-colors"/></Link>
            <Link href={'#'}><Mail className="w-5 h-5 hover:text-gray-900 transition-colors"/></Link>
          </div>
        </div>
        <div className="flex items-center justify-center mt-2 mb-1">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Victor Cordeiro. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  )
}
