export const Footer = () => {
  return (
    <footer className="w-full lg:max-w-360 mx-auto bg-indigo-700 text-white py-10 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src="/white.svg" alt="Movie Z" className="w-6 h-6" />
            <span className="text-xl font-bold">Movie Z</span>
          </div>
          <div className="flex items-center gap-1.5 opacity-90">
            <img src="/copyright.svg" alt="" className="w-3.5 h-3.5" />
            <p className="text-sm">2024 Movie Z. All Rights Reserved.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-semibold">Contact information</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src="/mail.svg" alt="" className="w-5 h-5" />
              <div className="flex flex-col text-sm">
                <span className="opacity-70">Email</span>
                <span>support@movieZ.com</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src="/phone.svg" alt="" className="w-5 h-5" />
              <div className="flex flex-col text-sm">
                <span className="opacity-70">Phone</span>
                <span>+976(11)123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-semibold">Follow us</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
