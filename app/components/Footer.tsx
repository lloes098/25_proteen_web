export default function Footer() {
  return (
    <footer className="w-full bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 text-white text-sm">
            <a href="#" className="hover:text-gray-400 transition-colors">개인정보 처리 방침</a>
          </div>
          <p className="text-white text-sm">
            © PROTEEN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

