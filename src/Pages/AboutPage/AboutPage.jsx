
function AboutPage () {
  return (
    <div className="container mx-auto py-12">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Book Vibe</h1>
      <p className="text-lg text-gray-800 mb-8">Where Words Come to Life</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-purple-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-purple-800 mb-4">Our Mission</h2>
        <p className="text-lg text-purple-700">
          At Book Vibe, our mission is simple: to ignite a passion for reading and foster a community of book lovers
          from all walks of life. We believe that books have the power to inspire, educate, and transform lives, and
          we are committed to sharing that magic with readers everywhere.
        </p>
      </div>
      <div className="bg-green-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Our Story</h2>
        <p className="text-lg text-green-700">
          Founded in 2021 by a team of avid readers, Book Vibe started as a small passion project with a big dream.
          Today, we have grown into a thriving online bookstore with a diverse selection of titles spanning every
          genre imaginable. But our journey is far from over – we are always looking for new ways to innovate and
          elevate the reading experience for our customers.
        </p>
      </div>
    </div>
    <div className="mt-12">
      <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Our Values</h2>
      <ul className="list-disc list-inside text-lg text-yellow-700">
        <li className="mb-2">Passion for Literature: We are passionate about books and their ability to enrich lives.</li>
        <li className="mb-2">Diversity & Inclusion: We celebrate diversity in voices, perspectives, and stories.</li>
        <li className="mb-2">Quality & Excellence: We strive for excellence in everything we do, from curating our collection to serving our customers.</li>
        <li className="mb-2">Community & Connection: We believe in building a supportive community of readers who share their love of books.</li>
        <li className="mb-2">Innovation & Growth: We embrace innovation and are always looking for new ways to improve and evolve.</li>
      </ul>
    </div>
  </div>
  )
}

export default AboutPage