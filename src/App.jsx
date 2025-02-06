import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS của AOS
import video1 from "./assets/6291198832484.mp4";
import video2 from "./assets/111.mp4";
import video3 from "./assets/6292800892073.mp4";
import video4 from "./assets/6292800865385.mp4";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Thời gian hiệu ứng
    });
  }, []);

  return (
    <div className="main">
      {/* Phần Background */}
      <div className="main_bg relative">
        <img
          src="https://static.wixstatic.com/media/0b340f_7cd49c8b788046e482e5a1d00f39c7ff~mv2_d_2349_1566_s_2.jpg/v1/fill/w_1899,h_1043,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/0b340f_7cd49c8b788046e482e5a1d00f39c7ff~mv2_d_2349_1566_s_2.jpg"
          alt="Background"
          className="w-full h-auto object-cover object-bottom"
        />
        <div className="absolute inset-0 flex justify-center items-center px-4 text-center">
          <h1
            className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-relaxed"
            data-aos-anchor="#trigger-right"
            data-aos="fade-right"
          >
            HÃY CÙNG NHAU <br /> LƯU GIỮ LẠI <br /> KỈ NIỆM ĐẸP CỦA CHÚNG TA !!
          </h1>
        </div>
      </div>

      {/* Phần Slogan */}
      <div
        className="text_events text-center p-6 sm:p-10 font-bold text-3xl sm:text-4xl lg:text-5xl"
        data-aos="fade-right"
      >
        KỈ NIỆM CHÚNG TA CÒN Ở ĐÂY !!
      </div>

      {/* Phần Story */}
      <div className="mt-10 flex flex-wrap justify-center gap-10 items-center main_story__top">
        {[
          "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/472759129_1242130890189712_4239794314862245009_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hq2pIuvK1IkQ7kNvgHa98DT&_nc_oc=Adh6TYAsIbTr3pnpeeUSwV0lDs_HX36PNuWP-37KXuG6E2lAp8A2hFkIs9wwqL3IKfg&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=Ankfk3rVlJEmDo7x12wDLVU&oh=00_AYAvn_tu6kXhGfiVGim1s9L8FqZLMPkw0zEdxnE5AYCjrQ&oe=67AA22D8",
          "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/476413024_1260329721703162_1768596034499241113_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-jJ58tVFSM8Q7kNvgFMZkk2&_nc_oc=Adg1mJ2FuoT7f1PL2g5zwm44AJvaqNGwiWKizf8Q1deawjJb5urfVE2ClLpJ6_kAq2Q&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AL--L_e1N4shoKeKK3av1uE&oh=00_AYAvpXg493H6EsydqP0ACT9A1ZNVLedV5sSMVQ_BRRX_7A&oe=67AA2F52",
          "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/476116594_1260329448369856_603725328110804770_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xAd3ftZfk38Q7kNvgGUp8OU&_nc_oc=Adhc6_1avUqk4cHFCieQnOG9D0WSaGsBv2PMeb8nSSr1f9Dqj-Tj2CDmvB6WB1_ea4g&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AxormkWRS3zJcgQ03QinifC&oh=00_AYBuLUCbuh68M8O2s59fd1Pyc1XLXxbBVK1bQFDdyFOWcg&oe=67AA30E4",
          "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/472759129_1242130890189712_4239794314862245009_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hq2pIuvK1IkQ7kNvgHa98DT&_nc_oc=Adh6TYAsIbTr3pnpeeUSwV0lDs_HX36PNuWP-37KXuG6E2lAp8A2hFkIs9wwqL3IKfg&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=Ankfk3rVlJEmDo7x12wDLVU&oh=00_AYAvn_tu6kXhGfiVGim1s9L8FqZLMPkw0zEdxnE5AYCjrQ&oe=67AA22D8",
        ].map((src, index) => (
          <img
            key={index}
            style={{ width: "300px", height: "auto", objectFit: "cover" }}
            data-aos="zoom-in"
            src={src}
            alt={`Story Image ${index + 1}`}
          />
        ))}
      </div>

      {/* Phần Video */}
      <div className="main_video text-center mt-10">
        <h1 className="text-3xl font-bold mb-4" data-aos="fade-right">
          NHỮNG KHOẢNH KHẮC CHÚNG TA MÃI MÃI KHÔNG QUÊN !!
        </h1>
        <div className="w-full flex flex-wrap items-center justify-center gap-6">
          {[video1, video2, video3, video4].map((video, index) => (
            <video
              key={index}
              data-aos="zoom-in"
              src={video}
              autoPlay
              loop
              controls
              className="w-56 h-auto rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
