
function ContactUs () {
  return (
    <div className="bg-gradient-to-b from-purple-500 to-blue-500 py-16 rounded-lg my-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
          <p className="text-lg text-white mt-4">We would love to hear from you!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-lg text-gray-700 mb-4">Feel free to reach out to us via email or phone:</p>
            <ul className="text-gray-700">
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a8 8 0 018 8c0 3.306-2.08 6.132-5 7.277V18a1 1 0 01-2 0v-.723C4.08 16.132 2 13.306 2 10a8 8 0 018-8zm1 14a1 1 0 11-2 0 1 1 0 012 0zM4.929 6.929a1 1 0 011.414 0l1.768 1.768a.5.5 0 00.707 0l1.768-1.768a1 1 0 011.414 1.414l-1.768 1.768a.5.5 0 000 .707l1.768 1.768a1 1 0 01-1.414 1.414L9.95 12.536a.5.5 0 000-.707l-1.768-1.768a1 1 0 01-1.414-1.414l1.768-1.768a.5.5 0 000-.707l-1.768-1.768a1 1 0 010-1.414zm8.142-.828l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414zM13 12a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
                <span>contact@bookvibe.com</span>
              </li>
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 5a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V5zm2-1a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 001-1V5a1 1 0 00-1-1H7z" clipRule="evenodd" />
                </svg>
                <span>+1 (123) 456-7890</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Drop Us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-1">Your Name</label>
                <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-purple-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-1">Your Email</label>
                <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-purple-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-1">Your Message</label>
                <textarea id="message" name="message" rows="4" className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-purple-600"></textarea>
              </div>
              <button type="submit" className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs