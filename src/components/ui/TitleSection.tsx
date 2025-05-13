const TitleSection = () => {
  return (
    <div className="text-center mb-8">
      <p className="text-lg md:text-xl text-gray-500 font-light italic">
        Mua Ngay Kẻo Lỡ
      </p>
      <div className="flex items-center justify-center mt-1">
        <h2 className="text-2xl md:text-4xl font-bold text-[#8B5A2B]">
          Giá Sốc
        </h2>
        <div className="mx-3">
          <span
            className="inline-block"
            style={{ color: "#FF0000", fontSize: "2rem" }}
          >
            {/* Fallback icon if image fails to load */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 40C15.18 40 8 32.82 8 24C8 15.18 15.18 8 24 8C32.82 8 40 15.18 40 24C40 32.82 32.82 40 24 40Z"
                fill="#FF4500"
              />
              <path d="M20 16H28V32H20V16Z" fill="#FF4500" />
              <path d="M26 13L32 24L26 35" stroke="#FF4500" strokeWidth="2" />
              <path d="M22 13L16 24L22 35" stroke="#FF4500" strokeWidth="2" />
            </svg>
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-[#8B5A2B]">
          Hôm Nay
        </h2>
      </div>
      <div className="w-32 h-0.5 bg-gray-300 mt-3 mx-auto"></div>
    </div>
  );
};

export default TitleSection;
