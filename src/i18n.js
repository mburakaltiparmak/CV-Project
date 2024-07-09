import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  tr: {
    translation: {
      1: "Ben bir Frontend Geliştiriciyim...",
      2: "Sağlam ve ölçeklenebilir kullanıcı deneyimleri sunan Frontend ürünleri oluşturmayı seven biriyim...",
      3: "Beceriler",
      4: "Profil",
      5: "Temel Bilgiler",
      6: "Doğum Tarihi",
      7: "İkamet Şehri",
      8: "Eğitim",
      9: "Tercih Ettiği Rol",
      10: "Erciyes Üniversitesi",
      11: "Hakkımda",
      12: "Projeler",
      13: "Siteyi görüntüle",
      14: "Bana bir mesaj gönder!",
      15: "Bir sorun veya teklifin mi var, ya da sadece selam mı vermek istiyorsun? Devam et.",
      16: "Makine Mühendisliği(YL)",
      17: "Kendini sürekli geliştirmeyi ve yeni beceriler edinmeyi hedefleyen, büyüme odaklı bir full-stack geliştirici adayıyım. Bir yıl Makine Mühendisi olarak çalıştıktan sonra, çocukluk hayalimi gerçekleştirmeye karar verdim ve yazılım geliştiricisi olma yolunda ilerlemeye başladım. Frontend, Backend ve bilgisayar bilimi alanlarında kendimi geliştirmek amacıyla 6 aylık yoğun bir Workintech full-stack geliştirme programını tamamladım.",
      18: "JavaScript (JS) ve React ile e-ticaret alanında uzmanlaşmış Full Stack Developer. Dinamik alışveriş özellikleri geliştirdim ve kullanıcı deneyimini optimize ettim. React Redux kullanarak verimli durum yönetimi sağladım ve cihazlar arasında kesintisiz uyumlu bir deneyim sundum.",
      19: "Basit bir favori film listesi oluşturma aracı.",
    },
  },
  en: {
    translation: {
      1: "I am a Frontend Developer...",
      2: "...who likes to craft solid and scalable frontend products with great user experiences",
      3: "Skills",
      4: "Profile",
      5: "Basic Information",
      6: "Birth of Date",
      7: "Location",
      8: "Education",
      9: "Preferred Role",
      10: "Erciyes University",
      11: "About Me",
      12: "Projects",
      13: "View Site",
      14: "Send me a message!",
      15: "Got a question or proposal, or just want to say hello? Go ahead.",
      16: "Mechanical Engineering(MSc)",
      17: "I am an aspiring full-stack developer with a growth mindset to acquire new skills and continuously develop myself with new challenges. After working as a Mechanical Engineering for a year, I decided to fulfill my childhood dream to become a software developer and improve myself in front end, back end and CS by completing a 6-month intensive Workintech full-stack development program.",
      18: "Full Stack Developer specializing in e-commerce with JavaScript (JS) and React. Developed dynamic shopping features and optimized user experience. Implemented React Redux for efficient state management and ensured seamless responsiveness across devices.",
      19: "A simple tool for creating a favorite movie list.",
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "tr",
  resources: resources,
});

export default i18n;
