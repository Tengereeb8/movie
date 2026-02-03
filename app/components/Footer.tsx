export const Footer = () => {
  return (
    <div className="max-w-360 mx-auto h-70 bg-indigo-700 text-white flex items-center justify-between px-20">
      <div className="">
        <footer className="text-white flex gap-2">
          <img src="/white.svg" alt="" />
          <span>Movie Z</span>
        </footer>
        <span className="flex text-white text-base items-center gap-1">
          <img src="/copyright.svg" alt="" className="w-3 h-3" />
          <p>2024 Movie Z. All Rights Reserved.</p>
        </span>
      </div>

      <div className="flex gap-24">
        <div>
          <span>Contact information</span>
          <div className="flex items-center">
            <img src="/mail.svg" alt="" className="w-4 h-4" />
            <div className="flex flex-col items-start ">
              Email <span>support@movieZ.com</span>
            </div>
          </div>{" "}
          <div className="flex items-center">
            <img src="/phone.svg" alt="" className="w-4 h-4" />
            <div className="flex flex-col items-start ">
              Phone <span>+976(11)123-4567</span>
            </div>
          </div>
        </div>
        <div>
          <h4>Follow us</h4>
          <div className="flex gap-3">
            <p>Facebook</p>
            <p>Instagram </p>
            <p> Twitter</p>
            <p>Youtube </p>
          </div>
        </div>
      </div>
    </div>
  );
};
