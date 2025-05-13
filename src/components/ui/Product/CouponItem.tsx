import { BsInfoCircle } from "react-icons/bs";
//cai thien tooltip
const CouponItem = () => {
  return (
    <div className="flex items-center p-5 w-[600px] border-b border-gray-200 transition duration-200 ease-in-out cursor-pointer">
      <div className="basis-[30%] max-w-[30%] h-auto items-center p-5">
        <img
          src="https://theme.hstatic.net/200000417685/1001040197/14/home_coupon_1_img.png?v=1173"
          alt=""
          className="w-20 h-20"
        />
      </div>
      <div className="flex flex-col gap-4 relative flex-1 w-full">
        <div className="group relative">
          <BsInfoCircle className="absolute top-0 right-0 h-5 w-5 flex-shrink-0 text-gray-400 hover:text-gray-600" />

          <div className="hidden group-hover:block relative before:absolute before:content-['day la tooltip'] before:h-[200px] before:w-full before:bg-white before:text-black before:top-0 before:translate-y-10  after:absolute after:content-[''] after:h-0 after:w-0 after:border-b-8 after:border-b-white after:border-x-8 after:border-x-transparent after:-right-1 after:-translate-x-1 after:translate-y-8 after:top-0"></div>
        </div>
        <div className="">
          <p>Giam 5k van chuyen</p>
          <p>don hang tu 100k</p>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-primary">Mã: GIAM15KSHIP</p>
            <p className="text-primary">HSD: 31/12/2025</p>
          </div>
          <p className="bg-yellow-500 text-white rounded-3xl px-2 text-center">
            Sao chep
          </p>
        </div>
      </div>
    </div>
  );
};

export default CouponItem;
