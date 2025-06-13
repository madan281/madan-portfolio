export default function Resume() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">My Resume</h1>
      <p className="text-lg text-gray-700 mb-6">
        You can view or download my resume using the button below.
      </p>

      <a
        href="/MADAN CHINTHAPALLY.pdf"
        download
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
      >
        Download Resume (PDF)
      </a>
    </div>
  );
}
