const NewsItem = ({ item, idx }: any) => {
  return (
    <div
      key={idx}
      className=" shadow-md rounded-sm overflow-hidden bg-white w-[350px]  hover:shadow-2xl transition"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-800 hover:text-red-600 cursor-pointer">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1 mb-2 line-clamp-2">
          {item.desc}
        </p>
        <p className="text-xs text-gray-400">
          bởi <span className="text-blue-600">{item.author}</span> – {item.date}
        </p>
      </div>
    </div>
  );
};
export default NewsItem;
