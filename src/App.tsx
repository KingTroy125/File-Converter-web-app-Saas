import React from 'react';
import { 
  FileIcon, 
  Upload, 
  Download, 
  Settings, 
  Check, 
  Shield, 
  Zap, 
  Layers, 
  Globe, 
  Lock, 
  FileText, 
  Image, 
  Music, 
  Video, 
  File, 
  ChevronDown,
  Star
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FileIcon className="h-8 w-8 text-[#5E5DF0]" />
            <span className="text-xl font-bold bg-gradient-to-r from-[#5E5DF0] to-[#4B4ACE] bg-clip-text text-transparent">FileConvert</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-gray-600 hover:text-[#5E5DF0] transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-[#5E5DF0] transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-[#5E5DF0] transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-[#5E5DF0] transition-colors">FAQ</a>
            <button className="bg-gradient-to-r from-[#5E5DF0] to-[#4B4ACE] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow">
              Sign In
            </button>
          </div>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Convert & Compress Files <span className="bg-gradient-to-r from-[#5E5DF0] to-[#4B4ACE] bg-clip-text text-transparent">in Seconds</span>
            </h1>
            <p className="text-xl text-gray-600">
              Transform any file format with ease. Reduce file sizes by up to 90% without losing quality.
            </p>
            <div className="pt-4">
              <button className="bg-gradient-to-r from-[#5E5DF0] to-[#4B4ACE] text-white px-8 py-3 rounded-full font-medium text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                Start Converting Now
              </button>
              <p className="text-sm text-gray-500 mt-3">No signup required for basic conversions</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 bg-gray-50 flex flex-col items-center justify-center text-center">
              <Upload className="h-12 w-12 text-[#5E5DF0] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Drag & Drop Your Files Here</h3>
              <p className="text-gray-500 mb-4">or</p>
              <button className="bg-white border border-[#5E5DF0] text-[#5E5DF0] px-6 py-2 rounded-full font-medium hover:bg-[#5E5DF0] hover:text-white transition-colors">
                Browse Files
              </button>
              <p className="text-sm text-gray-400 mt-4">Supports 300+ file formats</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 bg-gray-50 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-500 mb-8">Trusted by thousands of companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
            <div className="text-gray-400 font-semibold text-xl">COMPANY</div>
            <div className="text-gray-400 font-semibold text-xl">BRAND</div>
            <div className="text-gray-400 font-semibold text-xl">STARTUP</div>
            <div className="text-gray-400 font-semibold text-xl">ENTERPRISE</div>
            <div className="text-gray-400 font-semibold text-xl">TECH CO</div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for All Your Needs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our file converter combines cutting-edge technology with a simple interface to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-indigo-50 p-3 rounded-xl inline-block mb-4">
                <FileIcon className="h-6 w-6 text-[#5E5DF0]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">300+ File Formats</h3>
              <p className="text-gray-600">
                Convert between hundreds of different file formats with perfect accuracy and quality preservation.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-indigo-50 p-3 rounded-xl inline-block mb-4">
                <Zap className="h-6 w-6 text-[#5E5DF0]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Compression</h3>
              <p className="text-gray-600">
                Reduce file sizes by up to 90% using our intelligent compression algorithms without quality loss.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-indigo-50 p-3 rounded-xl inline-block mb-4">
                <Shield className="h-6 w-6 text-[#5E5DF0]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
              <p className="text-gray-600">
                Browser-based processing when possible, with files never stored on our servers longer than necessary.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-indigo-50 p-3 rounded-xl inline-block mb-4">
                <Globe className="h-6 w-6 text-[#5E5DF0]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cross-Platform</h3>
              <p className="text-gray-600">
                Works seamlessly across all devices and operating systems. No software installation required.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-indigo-50 p-3 rounded-xl inline-block mb-4">
                <Layers className="h-6 w-6 text-[#5E5DF0]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Batch Processing</h3>
              <p className="text-gray-600">
                Convert multiple files simultaneously, saving you time and increasing productivity.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-indigo-50 p-3 rounded-xl inline-block mb-4">
                <Lock className="h-6 w-6 text-[#5E5DF0]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-gray-600">
                End-to-end encryption and secure processing for sensitive business documents and files.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Converting files has never been easier. Just three simple steps to transform your files.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#5E5DF0] to-[#4B4ACE] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="pt-4">
                <Upload className="h-12 w-12 text-[#5E5DF0] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Upload Files</h3>
                <p className="text-gray-600">
                  Drag and drop your files or use the file browser to select them from your device.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#5E5DF0] to-[#4B4ACE] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="pt-4">
                <Settings className="h-12 w-12 text-[#5E5DF0] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Choose Settings</h3>
                <p className="text-gray-600">
                  Select your desired output format and adjust compression settings as needed.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#5E5DF0] to-[#4B4ACE] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="pt-4">
                <Download className="h-12 w-12 text-[#5E5DF0] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Download Results</h3>
                <p className="text-gray-600">
                  Get your converted files instantly. Download individually or as a batch in a ZIP file.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* File Types Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported File Formats</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Convert between hundreds of file formats across multiple categories.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Documents */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <FileText className="h-10 w-10 text-[#5E5DF0] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Documents</h3>
              <p className="text-sm text-gray-500">PDF, DOCX, TXT, RTF, ODT, PAGES</p>
            </div>
            
            {/* Images */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <Image className="h-10 w-10 text-[#5E5DF0] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Images</h3>
              <p className="text-sm text-gray-500">JPG, PNG, WEBP, SVG, HEIC, TIFF</p>
            </div>
            
            {/* Audio */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <Music className="h-10 w-10 text-[#5E5DF0] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Audio</h3>
              <p className="text-sm text-gray-500">MP3, WAV, AAC, FLAC, OGG, M4A</p>
            </div>
            
            {/* Video */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <Video className="h-10 w-10 text-[#5E5DF0] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Video</h3>
              <p className="text-sm text-gray-500">MP4, MOV, AVI, MKV, WEBM, FLV</p>
            </div>
            
            {/* Other */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <File className="h-10 w-10 text-[#5E5DF0] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Other</h3>
              <p className="text-sm text-gray-500">ZIP, RAR, EPUB, PSD, AI, SKETCH</p>
            </div>
            
            {/* And many more... */}
            <div className="bg-gradient-to-r from-[#5E5DF0]/10 to-[#4B4ACE]/10 p-6 rounded-2xl text-center col-span-2 md:col-span-3 lg:col-span-5 mt-4">
              <p className="text-[#5E5DF0] font-medium">And 300+ more formats supported!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that works best for your needs. No hidden fees or surprises.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-gray-600 mb-6">Perfect for occasional use</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>5 conversions per day</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Files up to 100MB</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Basic compression</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Standard support</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-[#5E5DF0] text-[#5E5DF0] rounded-full font-medium hover:bg-[#5E5DF0] hover:text-white transition-colors">
                Get Started
              </button>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#5E5DF0] relative">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-gradient-to-r from-[#5E5DF0] to-[#4B4ACE] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-gray-600 mb-6">For regular users</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Unlimited conversions</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Files up to 1GB</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Advanced compression</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Batch processing</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-[#5E5DF0] to-[#4B4ACE] text-white rounded-full font-medium hover:shadow-lg transition-shadow">
                Start 7-Day Free Trial
              </button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">For businesses & teams</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$49.99</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Files up to 10GB</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Team management</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>API access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Dedicated support</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-[#5E5DF0] text-[#5E5DF0] rounded-full font-medium hover:bg-[#5E5DF0] hover:text-white transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thousands of users trust FileConvert for their file conversion needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "FileConvert saved me hours of work. I needed to convert hundreds of PDFs to Word docs, and it handled the batch perfectly. The quality was amazing!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Marketing Director</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-[#5E5DF0]">
                Saved 8 hours of manual work
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The compression technology is incredible. I reduced our company's image library by 87% without any noticeable quality loss. Our website loads much faster now."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-500">Web Developer</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-[#5E5DF0]">
                Reduced storage by 87%
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "As a photographer, I was skeptical about using an online converter for my RAW files. FileConvert surprised me with its accuracy and preservation of metadata. It's now part of my workflow."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Emma Rodriguez</h4>
                  <p className="text-sm text-gray-500">Professional Photographer</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-[#5E5DF0]">
                Processes 500+ photos weekly
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* FAQ Item 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-between">
                <span>Is my data secure?</span>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </h3>
              <p className="text-gray-600">
                Yes, we take security seriously. Files are processed in your browser when possible, and any server-side processing is done with end-to-end encryption. Files are automatically deleted after processing or within 24 hours, whichever comes first.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-between">
                <span>Will I lose quality during conversion?</span>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </h3>
              <p className="text-gray-600">
                Our advanced algorithms are designed to preserve quality during conversion. For lossless formats, there's no quality loss. For lossy formats, you can adjust the quality settings to balance file size and quality according to your needs.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-between">
                <span>What are the file size limits?</span>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </h3>
              <p className="text-gray-600">
                Free users can convert files up to 100MB, Pro users up to 1GB, and Enterprise users up to 10GB per file. There are no limits on the number of files for paid plans.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-between">
                <span>Can I convert multiple files at once?</span>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </h3>
              <p className="text-gray-600">
                Yes, batch processing is available on all plans. Free users can convert up to 5 files simultaneously, while paid plans have unlimited batch processing capabilities.
              </p>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-between">
                <span>Do you offer refunds?</span>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service. Simply contact our support team to process your refund.
              </p>
            </div>
            
            {/* FAQ Item 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-between">
                <span>Is there an API available?</span>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </h3>
              <p className="text-gray-600">
                Yes, we offer a RESTful API for Enterprise customers. This allows you to integrate our conversion capabilities directly into your applications and workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Footer */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[#5E5DF0] to-[#4B4ACE] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Files?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied users who save time and storage space every day with FileConvert.
          </p>
          <button className="bg-white text-[#5E5DF0] px-8 py-3 rounded-full font-medium text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
            Start Converting Now — It's Free
          </button>
          <p className="mt-4 text-white/80">No credit card required to get started</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <FileIcon className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">FileConvert</span>
            </div>
            <p className="mb-6">
              The fastest and most reliable file conversion service. Transform any file format with ease.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GDPR Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center">
          <p>© 2025 FileConvert. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;