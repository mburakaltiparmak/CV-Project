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
      10: "Erciyes Üni. Makine Müh.(YL)",
      11: "Hakkımda",
      12: "Projeler",
      13: "Siteyi görüntüle",
      14: "Bana bir mesaj gönder!",
      15: "Bir sorun veya teklifin mi var, ya da sadece selam mı vermek istiyorsun? Devam et.",
      16: "Makine Müh.(YL)",
      17: "Kendini sürekli geliştirmeyi ve yeni beceriler edinmeyi hedefleyen, büyüme odaklı bir full-stack geliştirici adayıyım. Bir yıl Makine Mühendisi olarak çalıştıktan sonra, 2023 yılında çocukluk hayalimi gerçekleştirmeye karar verdim ve yazılım geliştiricisi olma yolunda ilerlemeye başladım. Frontend, Backend ve bilgisayar bilimi alanlarında kendimi geliştirmek amacıyla 6 aylık yoğun bir Workintech full-stack geliştirme programını tamamladım.",
      18: "JavaScript (JS) ve React ile e-ticaret alanında uzmanlaşmış Full Stack Developer. Dinamik alışveriş özellikleri geliştirdim ve kullanıcı deneyimini optimize ettim. React Redux kullanarak verimli durum yönetimi sağladım ve cihazlar arasında kesintisiz uyumlu bir deneyim sundum.",
      19: "Basit bir favori film listesi oluşturma aracı.",
      20: "Next.js kullanarak yapmış olduğum bir Pizza Restoranı websitesi. Dinamik alışveriş özellikleri geliştirdim ve kullanıcı deneyimini Tailwind ile Shadcn kullanarak optimize ettim. React Redux kullanarak verimli durum yönetimi sağladım ve cihazlar arasında kesintisiz uyumlu bir deneyim sundum.",
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
      10: "Erciyes Uni. Mechanical Eng.(MSc)",
      11: "About Me",
      12: "Projects",
      13: "View Site",
      14: "Send me a message!",
      15: "Got a question or proposal, or just want to say hello? Go ahead.",
      16: "Mechanical Eng.(MSc)",
      17: "I am a full-stack developer candidate focused on continuous self-improvement and acquiring new skills with a growth mindset. After working as a Mechanical Engineer for a year, I decided to pursue my childhood dream in 2023 and embarked on the journey to become a software developer. To enhance my skills in frontend, backend, and computer science, I completed an intensive 6-month full-stack development program at Workintech.",
      18: "Full Stack Developer specializing in e-commerce with JavaScript (JS) and React. Developed dynamic shopping features and optimized user experience. Implemented React Redux for efficient state management and ensured seamless responsiveness across devices.",
      19: "A simple tool for creating a favorite movie list.",
      20: "I developed a Pizza Restaurant website using Next.js. I created dynamic shopping features and optimized the user experience with Tailwind CSS and Shadcn. By utilizing React Redux, I ensured efficient state management and provided a seamless experience across devices.",
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "tr",
  resources: resources,
});

export default i18n;
