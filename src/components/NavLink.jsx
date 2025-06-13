function NavLink({ to, icon, label }) {
  return (
    
    <Link
      to={to}
      className="flex items-center gap-2 hover:text-blue-400 transition duration-200 transform hover:-translate-y-1"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
