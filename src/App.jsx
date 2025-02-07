import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS của AOS
import video1 from "./assets/6291198832484.mp4";
import video2 from "./assets/111.mp4";
import video3 from "./assets/6292800892073.mp4";
import video4 from "./assets/6292800865385.mp4";
import "./App.css";
import {
  User,
  Facebook,
  Briefcase,
  Heart,
  MapPin,
  Star,
  Instagram,
  Github,
} from "lucide-react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <img
          src="https://static.wixstatic.com/media/0b340f_7cd49c8b788046e482e5a1d00f39c7ff~mv2_d_2349_1566_s_2.jpg/v1/fill/w_1899,h_1043,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/0b340f_7cd49c8b788046e482e5a1d00f39c7ff~mv2_d_2349_1566_s_2.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1
            className="text-white font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center leading-relaxed px-4"
            data-aos="fade-right"
            data-aos-anchor="#trigger-right"
          >
            HÃY CÙNG NHAU <br />
            LƯU GIỮ LẠI <br />
            KỈ NIỆM ĐẸP CỦA CHÚNG TA !!
          </h1>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="container mx-auto py-20 px-4">
        <h2
          className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-16"
          data-aos="fade-right"
        >
          KỈ NIỆM CHÚNG TA CÒN Ở ĐÂY !!
        </h2>

        {/* Story Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/472759129_1242130890189712_4239794314862245009_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hq2pIuvK1IkQ7kNvgHa98DT&_nc_oc=Adh6TYAsIbTr3pnpeeUSwV0lDs_HX36PNuWP-37KXuG6E2lAp8A2hFkIs9wwqL3IKfg&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=Ankfk3rVlJEmDo7x12wDLVU&oh=00_AYAvn_tu6kXhGfiVGim1s9L8FqZLMPkw0zEdxnE5AYCjrQ&oe=67AA22D8",
            "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/476413024_1260329721703162_1768596034499241113_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-jJ58tVFSM8Q7kNvgFMZkk2&_nc_oc=Adg1mJ2FuoT7f1PL2g5zwm44AJvaqNGwiWKizf8Q1deawjJb5urfVE2ClLpJ6_kAq2Q&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AL--L_e1N4shoKeKK3av1uE&oh=00_AYAvpXg493H6EsydqP0ACT9A1ZNVLedV5sSMVQ_BRRX_7A&oe=67AA2F52",
            "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/476116594_1260329448369856_603725328110804770_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xAd3ftZfk38Q7kNvgGUp8OU&_nc_oc=Adhc6_1avUqk4cHFCieQnOG9D0WSaGsBv2PMeb8nSSr1f9Dqj-Tj2CDmvB6WB1_ea4g&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AxormkWRS3zJcgQ03QinifC&oh=00_AYBuLUCbuh68M8O2s59fd1Pyc1XLXxbBVK1bQFDdyFOWcg&oe=67AA30E4",
            "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/472759129_1242130890189712_4239794314862245009_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hq2pIuvK1IkQ7kNvgHa98DT&_nc_oc=Adh6TYAsIbTr3pnpeeUSwV0lDs_HX36PNuWP-37KXuG6E2lAp8A2hFkIs9wwqL3IKfg&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=Ankfk3rVlJEmDo7x12wDLVU&oh=00_AYAvn_tu6kXhGfiVGim1s9L8FqZLMPkw0zEdxnE5AYCjrQ&oe=67AA22D8",
          ].map((src, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <img
                src={src}
                alt={`Story Image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-10" data-aos="fade-right">
            NHỮNG KHOẢNH KHẮC CHÚNG TA MÃI MÃI KHÔNG QUÊN !!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[video1, video2, video3, video4].map((video, index) => (
              <div key={index} className="aspect-video" data-aos="zoom-in">
                <video
                  src={video}
                  autoPlay
                  loop
                  controls
                  className="w-full h-full rounded-lg shado w-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div
        className="text-center font-bold text-3xl -mt-11"
        data-aos="fade-right"
      >
        TOP NHỮNG NGƯỜI TÔI LUÔN TIN TƯỞNG{" "}
      </div>
      {/* Profile Card Section */}
      <div className="section flex flex-wrap justify-center gap-1 mx-10 mt-10">
        <div
          className="section_children  bg-slate-900 text-white text-center m-auto"
          data-aos="zoom-in"
        >
          <div className="text-center m-auto  flex justify-center mt-2.5">
            <img
              className="w-36 h-36 rounded-full text-center object-cover"
              src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/475306581_1151382893309590_5015191308722816565_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GGsDAalDF9AQ7kNvgHXWJtz&_nc_oc=Adj425KciBGRvB0gGiWESUPVQ526eVoM0xHrKa9-mnsENG5Swy-f8PZ_saJzZCsOc_U&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=AWV9ed2_r6-ICmjLOwsmlHH&oh=00_AYDCi0w_NoDYay-YOG3xbtYoqQ2PhVc1tv_TNyrwn1OkWg&oe=67AB6C13"
              alt="thùy linh"
            />
          </div>
          <div className="p-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-500 text-transparent bg-clip-text mt-2">
              Thùy Linh
            </h1>
            <p className="text-center text-gray-400">@techie.dev</p>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Briefcase />
            <span className="ml-1.5 text-gray-200 font-medium">
              Giáo viên mầm non
            </span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-pink-500/20 via-pink-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Heart />
            <span className="ml-1.5 text-gray-200 font-medium">Hẹn hò</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <MapPin />
            <span className="ml-1.5 text-gray-200 font-medium">Bình Phước</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Star />
            <span className="ml-1.5 text-gray-200 font-medium">
              Music, đi chơi , cafe , xem phim
            </span>
          </div>
          <div className="h-12 m-1.5  flex justify-center items-center gap-1">
            <a
              href="https://www.facebook.com/profile.php?id=100053136698677&sk=photos"
              class="bg-gradient-to-r from-blue-600 to-blue-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <button class="bg-gradient-to-r from-pink-600 to-purple-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </button>
          </div>
        </div>
        <div
          className="section_children  bg-slate-900 text-white text-center m-auto"
          data-aos="zoom-in"
        >
          <div className="text-center m-auto  flex justify-center mt-2.5">
            <img
              className="w-36 h-36 rounded-full text-center object-cover"
              src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/472238617_2161882027542084_1128841394134598286_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QY1-6v3eWFsQ7kNvgFrga9m&_nc_oc=AdhueyzZxG5Fv9NpTsgs5qpJEDNs3pKal7DJMjqAm_XOZhckFZRfn8eDZFGOW_jX7F4&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=A-N96AmtMhYtI1d6mLAA0JF&oh=00_AYBIbiD2HeLtgI7QUNiFG0GdYFUKAv9kdwX39NIdwJiAWQ&oe=67AB66E7"
              alt="đôn"
            />
          </div>
          <div className="p-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-500 text-transparent bg-clip-text mt-2">
              Phạm Đôn
            </h1>
            <p className="text-center text-gray-400">@techie.dev</p>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Briefcase />
            <span className="ml-1.5 text-gray-200 font-medium">
              Anh chàng Shipper may mắn
            </span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-pink-500/20 via-pink-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Heart />
            <span className="ml-1.5 text-gray-200 font-medium">Độc thân</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <MapPin />
            <span className="ml-1.5 text-gray-200 font-medium">Bình Phước</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Star />
            <span className="ml-1.5 text-gray-200 font-medium">
              Music, ông hoàng ngôn tình chúa tể dại gái
            </span>
          </div>
          <div className="h-12 m-1.5  flex justify-center items-center gap-1">
            <a
              href="https://www.facebook.com/donpham2003"
              class="bg-gradient-to-r from-blue-600 to-blue-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <button class="bg-gradient-to-r from-pink-600 to-purple-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </button>
          </div>
        </div>
        <div
          className="section_children  bg-slate-900 text-white text-center m-auto"
          data-aos="zoom-in"
        >
          <div className="text-center m-auto  flex justify-center mt-2.5">
            <img
              className="w-36 h-36 rounded-full text-center object-cover"
              src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/321568948_1193769081534613_1292282837773194818_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DkXvPt6eYWgQ7kNvgH3oAN2&_nc_oc=AdgdnZHNsWiM-YiIbkLB3f_qxqK_L0d7aXOGjcmepn2_lFZOQidOhPKhiIK9zQ4tTS0&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=AVQryEWa2YmDTZxDBPIGpQP&oh=00_AYA2AMStWkTjN1bZrITnER3Uh_ddB0g-jODSzLt8d2tPXQ&oe=67AB906F"
              alt="Thanh"
            />
          </div>
          <div className="p-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-500 text-transparent bg-clip-text mt-2">
              Trọng Thanh
            </h1>
            <p className="text-center text-gray-400">@techie.dev</p>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Briefcase />
            <span className="ml-1.5 text-gray-200 font-medium">
              Ông hoàng đa nghề
            </span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-pink-500/20 via-pink-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Heart />
            <span className="ml-1.5 text-gray-200 font-medium">Độc thân</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <MapPin />
            <span className="ml-1.5 text-gray-200 font-medium">Bình Phước</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Star />
            <span className="ml-1.5 text-gray-200 font-medium">
              Music, đi chơi , cafe , xem phim
            </span>
          </div>
          <div className="h-12 m-1.5  flex justify-center items-center gap-1">
            <a
              href="https://www.facebook.com/TrongThanh2k2"
              class="bg-gradient-to-r from-blue-600 to-blue-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <button class="bg-gradient-to-r from-pink-600 to-purple-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </button>
          </div>
        </div>
        <div
          className="section_children  bg-slate-900 text-white text-center m-auto"
          data-aos="zoom-in"
        >
          <div className="text-center m-auto  flex justify-center mt-2.5">
            <img
              className="w-36 h-36 rounded-full text-center object-cover"
              src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/475815366_1293988268523442_6248075480707877617_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YJlYQ6_Uf7gQ7kNvgFKi97i&_nc_oc=AdgiDyOaHs7s8-wnjMr03dtbBQOeNKliPmsk1PaulmOYy3IAsbZHqdjRAa4ep7vXnuA&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=ACsjEql1dfN_NdtitNtVg84&oh=00_AYA4ks1O-XCcDObNZXbs6o4EvY8iLyoBV7udC3IlIF1Nsw&oe=67AB6E07"
              alt="Khánh"
            />
          </div>
          <div className="p-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-500 text-transparent bg-clip-text mt-2">
              Nguyễn Ngọc Khánh
            </h1>
            <p className="text-center text-gray-400">@techie.dev</p>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Briefcase />
            <span className="ml-1.5 text-gray-200 font-medium">Spa</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-pink-500/20 via-pink-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Heart />
            <span className="ml-1.5 text-gray-200 font-medium">Hẹn hò</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <MapPin />
            <span className="ml-1.5 text-gray-200 font-medium">Đắk Nông</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Star />
            <span className="ml-1.5 text-gray-200 font-medium">
              Music, đi chơi , cafe , xem phim
            </span>
          </div>
          <div className="h-12 m-1.5  flex justify-center items-center gap-1">
            <a
              href="https://www.facebook.com/profile.php?id=100037368440310"
              class="bg-gradient-to-r from-blue-600 to-blue-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <button class="bg-gradient-to-r from-pink-600 to-purple-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </button>
          </div>
        </div>
        <div
          className="section_children  bg-slate-900 text-white text-center m-auto"
          data-aos="zoom-in"
        >
          <div className="text-center m-auto  flex justify-center mt-2.5">
            <img
              className="w-36 h-36 rounded-full text-center object-cover"
              src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/398007919_1512335419541897_1174544092835925295_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=enBZqgNVA14Q7kNvgHk3s6-&_nc_oc=AdgQ3MJFCLA3MBTVrgUALpl1frHEAGHfqOzcCO43BMl4SG_-skXPGG_Y8hue0UuIN88&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=AjZzFzP-TrlL63sPB-nA9w5&oh=00_AYBY1CAK4l3ocNJkgYn8s4zhTsgVXQYUIhZxTKCZU1p9Rw&oe=67AB71F6"
              alt="thùy linh"
            />
          </div>
          <div className="p-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-500 text-transparent bg-clip-text mt-2">
              Thu Hiền
            </h1>
            <p className="text-center text-gray-400">@techie.dev</p>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Briefcase />
            <span className="ml-1.5 text-gray-200 font-medium">Kế Toán</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-pink-500/20 via-pink-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Heart />
            <span className="ml-1.5 text-gray-200 font-medium">Độc thân</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <MapPin />
            <span className="ml-1.5 text-gray-200 font-medium">Bình Dương</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Star />
            <span className="ml-1.5 text-gray-200 font-medium">
              Music, đi chơi , cafe , xem phim , dốt còn hay cãi
            </span>
          </div>
          <div className="h-12 m-1.5  flex justify-center items-center gap-1">
            <a
              href="https://www.facebook.com/hien.thuthu.7737"
              class="bg-gradient-to-r from-blue-600 to-blue-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <button class="bg-gradient-to-r from-pink-600 to-purple-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </button>
          </div>
        </div>
        <div
          className="section_children  bg-slate-900 text-white text-center m-auto"
          data-aos="zoom-in"
        >
          <div className="text-center m-auto  flex justify-center mt-2.5">
            <img
              className="w-36 h-36 rounded-full text-center object-cover"
              src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/450086198_1818451885347305_359275058148953300_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jSyM9iZYp-AQ7kNvgFcjn8N&_nc_oc=AdiB35_4EjMO3iTjNuZhbL-E8pgJNHUN5o1KbeJlizA5jL4Lzgwsw5ilqv6uFWn1ayo&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AUB7am-yiwSczZAkMSvxei-&oh=00_AYA8yroN_67kMfNzmQhWYue0LlHz_fFfUZgdAvEJzJJyvA&oe=67AB8929"
              alt="Quý"
            />
          </div>
          <div className="p-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-500 text-transparent bg-clip-text mt-2">
              Trần Hoàng Phúc
            </h1>
            <p className="text-center text-gray-400">@techie.dev</p>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Briefcase />
            <span className="ml-1.5 text-gray-200 font-medium">
              IT Developer
            </span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-pink-500/20 via-pink-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Heart />
            <span className="ml-1.5 text-gray-200 font-medium">Hẹn hò</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <MapPin />
            <span className="ml-1.5 text-gray-200 font-medium">Bình Dương</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Star />
            <span className="ml-1.5 text-gray-200 font-medium">
              Music, ca hát , cafe , xem phim
            </span>
          </div>
          <div className="h-12 m-1.5  flex justify-center items-center gap-1">
            <a
              href="https://www.facebook.com/huanphne"
              class="bg-gradient-to-r from-blue-600 to-blue-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <button class="bg-gradient-to-r from-pink-600 to-purple-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </button>
          </div>
        </div>
        <div
          className="section_children  bg-slate-900 text-white text-center m-auto"
          data-aos="zoom-in"
        >
          <div className="text-center m-auto  flex justify-center mt-2.5">
            <img
              className="w-36 h-36 rounded-full text-center object-cover"
              src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-1/472819325_1303910544131299_3111724377166340446_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d2534&_nc_ohc=bo_kQiCRWGUQ7kNvgE8yULM&_nc_oc=Adhh9DYk1j5AVu4BOmuqYogW8y6Xq1ffVfVIo61pDBO1Jk649HeU-B-h3O8YjLnVQ-0&_nc_zt=24&_nc_ht=scontent.fdad1-3.fna&_nc_gid=AzqjD7TUIHcAZkRTdbGDUjG&oh=00_AYBSlSexOkC-_yLjsFEL4ujhiys_1U3kK9rB_nujgPbRIw&oe=67AB5C76"
              alt="Quý"
            />
          </div>
          <div className="p-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-500 text-transparent bg-clip-text mt-2">
              Lương Đức Quý
            </h1>
            <p className="text-center text-gray-400">@techie.dev</p>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Briefcase />
            <span className="ml-1.5 text-gray-200 font-medium">
              IT Developer
            </span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-pink-500/20 via-pink-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Heart />
            <span className="ml-1.5 text-gray-200 font-medium">Độc thân</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <MapPin />
            <span className="ml-1.5 text-gray-200 font-medium">Đắk Nông</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Star />
            <span className="ml-1.5 text-gray-200 font-medium">
              Du lịch , bida , bóng đá
            </span>
          </div>
          <div className="h-12 m-1.5  flex justify-center items-center gap-1">
            <a
              href="https://www.facebook.com/ducquy.7Ro"
              class="bg-gradient-to-r from-blue-600 to-blue-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <button class="bg-gradient-to-r from-pink-600 to-purple-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </button>
          </div>
        </div>
        <div
          className="section_children  bg-slate-900 text-white text-center m-auto"
          data-aos="zoom-in"
        >
          <div className="text-center m-auto  flex justify-center mt-2.5">
            <img
              className="w-36 h-36 rounded-full text-center object-cover"
              src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/475488978_122407907600001122_3359190952724653383_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4M2HQriDpY8Q7kNvgEJt25g&_nc_oc=Adg72wcTq1u2R6U1M2Gcv686eDKpiCZT6s3sEsdhv8-dJ_SVxuR-lYX0i5kqEZvKZ88&_nc_zt=23&_nc_ht=scontent.fdad1-1.fna&_nc_gid=AQW1O0SKY5MQxU-JVldsWX9&oh=00_AYARyKRAOOgZogAsQ4gCWP52D57mGJwyJP5acYn1y7TNNw&oe=67AB7519"
              alt="Duy"
            />
          </div>
          <div className="p-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-500 text-transparent bg-clip-text mt-2">
              Hoàng Văn Duy
            </h1>
            <p className="text-center text-gray-400">@techie.dev</p>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Briefcase />
            <span className="ml-1.5 text-gray-200 font-medium">
              Ăn xong ngủ , xong làm
            </span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-pink-500/20 via-pink-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Heart />
            <span className="ml-1.5 text-gray-200 font-medium">Độc thân</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <MapPin />
            <span className="ml-1.5 text-gray-200 font-medium">Đắk Nông</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Star />
            <span className="ml-1.5 text-gray-200 font-medium">
              Music, du lịch , cafe , xem phim
            </span>
          </div>
          <div className="h-12 m-1.5  flex justify-center items-center gap-1">
            <a
              href="https://www.facebook.com/profile.php?id=61550033678058"
              class="bg-gradient-to-r from-blue-600 to-blue-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <button class="bg-gradient-to-r from-pink-600 to-purple-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </button>
          </div>
        </div>
        <div
          className="section_children  bg-slate-900 text-white text-center m-auto"
          data-aos="zoom-in"
        >
          <div className="text-center m-auto  flex justify-center mt-2.5">
            <img
              className="w-36 h-36 rounded-full text-center object-cover"
              src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-1/476044108_1775774783215155_5585907422360186520_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ROM6clnhaBgQ7kNvgGpopQw&_nc_oc=Adi3O-SyAe_TQWdpwaZMCtx834_vBoMV4X1Ep0nyB5uzPzHsFfQW5rsNTEHlztkB0Pk&_nc_zt=24&_nc_ht=scontent.fdad1-3.fna&_nc_gid=ArM5l0MSdPYD0qBY9oRCdNa&oh=00_AYCsORyYwGXN96IRo0TSSut92Iy82YDadnW5LDOQDg_NWA&oe=67ABD41A"
              alt="Thắm"
            />
          </div>
          <div className="p-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-500 text-transparent bg-clip-text mt-2">
              Đinh Thị Hồng Thắm
            </h1>
            <p className="text-center text-gray-400">@tham.19</p>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Briefcase />
            <span className="ml-1.5 text-gray-200 font-medium">Luật Sư </span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-pink-500/20 via-pink-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Heart />
            <span className="ml-1.5 text-gray-200 font-medium">Hẹn hò</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <MapPin />
            <span className="ml-1.5 text-gray-200 font-medium">Đắk Nông</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Star />
            <span className="ml-1.5 text-gray-200 font-medium">
              Music, du lịch , cafe , xem phim
            </span>
          </div>
          <div className="h-12 m-1.5  flex justify-center items-center gap-1">
            <a
              href="https://www.facebook.com/profile.php?id=100023479519370"
              class="bg-gradient-to-r from-blue-600 to-blue-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <button class="bg-gradient-to-r from-pink-600 to-purple-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </button>
          </div>
        </div>
        <div
          className="section_children  bg-slate-900 text-white text-center m-auto"
          data-aos="zoom-in"
        >
          <div className="text-center m-auto  flex justify-center mt-2.5">
            <img
              className="w-36 h-36 rounded-full text-center object-cover"
              src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-1/308857486_807057623674514_5552546983705596243_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=rWmtaDPmrQUQ7kNvgE4bbGI&_nc_oc=Adjd3WBVDd0HLhfv4RLxprvDarOoYbTNmyjIbtwB2pOHNdeU7NjvtNLa3JRDlmgrT0Y&_nc_zt=24&_nc_ht=scontent.fdad1-1.fna&_nc_gid=AbtbqyShogN71cyiRn4ozxO&oh=00_AYBj01mq7j5zQ9j7WGaQVfRhz661kGC2AJdzzpnOWe9lkg&oe=67ABCF7F"
              alt="tam"
            />
          </div>
          <div className="p-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-500 text-transparent bg-clip-text mt-2">
              Mai Thị Minh Tâm
            </h1>
            <p className="text-center text-gray-400">@tam.19</p>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Briefcase />
            <span className="ml-1.5 text-gray-200 font-medium">
              Giáo dục tiểu học
            </span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-pink-500/20 via-pink-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Heart />
            <span className="ml-1.5 text-gray-200 font-medium">Hẹn hò</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <MapPin />
            <span className="ml-1.5 text-gray-200 font-medium">Đắk Nông</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Star />
            <span className="ml-1.5 text-gray-200 font-medium">
              Music, du lịch , cafe , xem phim
            </span>
          </div>
          <div className="h-12 m-1.5  flex justify-center items-center gap-1">
            <a
              href="https://www.facebook.com/profile.php?id=100031108503318"
              class="bg-gradient-to-r from-blue-600 to-blue-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <button class="bg-gradient-to-r from-pink-600 to-purple-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </button>
          </div>
        </div>
        <div
          className="section_children  bg-slate-900 text-white text-center m-auto"
          data-aos="zoom-in"
        >
          <div className="text-center m-auto  flex justify-center mt-2.5">
            <img
              className="w-36 h-36 rounded-full text-center object-cover"
              src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-1/351466702_1913937095642756_9063937292105686399_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=DgrcdPAcrUgQ7kNvgGDvXLa&_nc_oc=AdjO4ntk7mtIFITZoPTD76ixYWwF3VBBZquljafYcmqe8DxjnxoA6d3iPJJlteBQbIY&_nc_zt=24&_nc_ht=scontent.fdad1-4.fna&_nc_gid=A6MJaMJXAt5dvhp4yih1pj6&oh=00_AYBOYZHOGl6dU5PoKTDq0OCd5oJowKoMKcQsyDEZoO40uw&oe=67ABABCF"
              alt="tam"
            />
          </div>
          <div className="p-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-500 text-transparent bg-clip-text mt-2">
              Nguyễn Minh Nhựt
            </h1>
            <p className="text-center text-gray-400">@nhut.19</p>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Briefcase />
            <span className="ml-1.5 text-gray-200 font-medium">
              IT Developer
            </span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-pink-500/20 via-pink-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Heart />
            <span className="ml-1.5 text-gray-200 font-medium">Độc thân</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <MapPin />
            <span className="ml-1.5 text-gray-200 font-medium">Bình Dương</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Star />
            <span className="ml-1.5 text-gray-200 font-medium">
              Music, du lịch , cafe , xem phim
            </span>
          </div>
          <div className="h-12 m-1.5  flex justify-center items-center gap-1">
            <a
              href="https://www.facebook.com/profile.php?id=100031108503318"
              class="bg-gradient-to-r from-blue-600 to-blue-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <button class="bg-gradient-to-r from-pink-600 to-purple-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </button>
          </div>
        </div>
        <div
          className="section_children  bg-slate-900 text-white text-center m-auto"
          data-aos="zoom-in"
        >
          <div className="text-center m-auto  flex justify-center mt-2.5">
            <img
              className="w-36 h-36 rounded-full text-center object-cover"
              src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-1/472903759_2377002389349659_6421545169918745142_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=YoOsCEv2T7wQ7kNvgGddJ_u&_nc_oc=Adgxt-1_NXFXLfh7H0dBOuvo0HcHdBwoTntD95FhzTyBG1nXEM30z7OkQc5g_cO9g4c&_nc_zt=24&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AGAgaGJP3qbrc8KBLyXQZ__&oh=00_AYDFGG8gKAv6NneRRttFtJnqsKI9Geu2LkPf4EGnFcUUuw&oe=67ABB4C1"
              alt="tam"
            />
          </div>
          <div className="p-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-500 text-transparent bg-clip-text mt-2">
              Huỳnh Hùng Mạnh
            </h1>
            <p className="text-center text-gray-400">@manh.19</p>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Briefcase />
            <span className="ml-1.5 text-gray-200 font-medium">
              IT Developer
            </span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-pink-500/20 via-pink-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Heart />
            <span className="ml-1.5 text-gray-200 font-medium">Độc thân</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <MapPin />
            <span className="ml-1.5 text-gray-200 font-medium">Bình Dương</span>
          </div>
          <div className="h-12 m-1.5 bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent p-4 rounded-2xl backdrop-blur-lg border border-white/10 flex  items-center">
            <Star />
            <span className="ml-1.5 text-gray-200 font-medium">
              Music, du lịch , cafe , xem phim
            </span>
          </div>
          <div className="h-12 m-1.5  flex justify-center items-center gap-1">
            <a
              href="https://www.facebook.com/profile.php?id=100031108503318"
              class="bg-gradient-to-r from-blue-600 to-blue-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <button class="bg-gradient-to-r from-pink-600 to-purple-400 p-3 rounded-xl hover:scale-110 transition-transform duration-300 text-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
