export default function SiteMapLink({ children }) {
  return (
    <li className="underline underline-offset-4 ">
      <a href="#" className="text-stone-200 hover:text-red-400 text-sm">
        {children}
      </a>
    </li>
  );
}
