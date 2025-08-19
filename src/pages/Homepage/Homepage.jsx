import React from "react";
import Navbar from "../../layouts/Navbar";
import Hero from "../../layouts/Hero";
import Intro from "./Intro";
import ScrollToTop from "../../components/scrollToTop";
import heroImg from "../../assets/toa-a.jpg";
import introImg1 from "../../assets/introImg1.png";
import introImg2 from "../../assets/introImg2.png";
import introImg3 from "../../assets/introImg3.png";
import Footer from "../../layouts/Footer";

const Homepage = () => {
  return (
    <div className="w-screen h-full m-0 p-0">
      <ScrollToTop />
      <Navbar />
      <Hero
        image={heroImg}
        title={"Việt Đức Memories"}
        subtitle={
          "Lưu giữ những kỷ niệm đẹp nhất của các thế hệ học sinh trường THPT Việt Đức"
        }
        showButton={true}
      />
      <div className="flex flex-col pl-6 pr-6 md:pl-10 md:pr-10 mt-10 gap-5">
        <Intro
          image={introImg1}
          title={"NƠI KÝ ỨC BẮT ĐẦU"}
          subtitle={
            "Trường THPT Việt Đức được thành lập năm 1955. Trường có tiền thân là Trường Phổ thông cấp 2-3 Hà Nội, được thành lập ngay sau ngày giải phóng Thủ đô. Với sự hỗ trợ từ Chính phủ và nhân dân Cộng hòa Dân chủ Đức, trường đã phát triển mạnh mẽ và chính thức mang tên Việt Đức từ năm 1997."
          }
          mirror={true}
        />
        <Intro
          image={introImg2}
          title={"Dấu ấn không thể phai"}
          subtitle={
            "Tự hào là một trong những ngôi trường hàng đầu cả nước, Việt Đức đã chắp cánh cho biết bao học sinh vươn xa đến những chân trời tri thức khắp năm châu."
          }
          mirror={false}
        />
        <Intro
          image={introImg3}
          title={"Việt Đức – Mái trường của những ký ức và khát vọng"}
          subtitle={
            "Giữa lòng Hà Nội, Việt Đức vẫn vững vàng theo năm tháng. Nơi đây không chỉ chắp cánh ước mơ, mà còn lưu giữ ký ức, nuôi dưỡng tâm hồn và nhân cách. Trang kỷ yếu này là nơi để mỗi lần ghé lại, ta thấy mình trong những nụ cười và dòng lưu bút tưởng chừng đã xa."
          }
          mirror={true}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
