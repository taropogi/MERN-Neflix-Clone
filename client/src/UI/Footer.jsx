export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full py-1 md:px-8 z-50 bg-black text-white border-t border-gray-800">
      <div className="flex flex-col items-center justify-between">
        <p className="text-balance text-sm  md:text-left">
          Built by:
          <a
            href="https://richardbernisca.com/about"
            target="_blank"
            className="font-medium underline underline-offset-4 text-blue-500 ml-2"
          >
            Richard Bernisca
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/taropogi/MERN-Neflix-Clone"
            target="_blank"
            className="font-medium underline underline-offset-4 text-blue-500"
          >
            Github
          </a>
        </p>
      </div>
    </footer>
  );
}
