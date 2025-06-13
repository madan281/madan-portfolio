export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center mt-12 border-t border-gray-700">
      <p className="text-sm">
        © {new Date().getFullYear()} Madan Chinthapally • All Rights Reserved
      </p>
      <p className="text-xs mt-1 italic">
        Designed with ❤️ for cybersecurity and cloud tech
      </p>
    </footer>
  );
}
