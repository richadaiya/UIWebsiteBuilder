import svgPaths from "../imports/svg-zxu77g0tp3";
import heroBg from "./imports/image-1.png";
import productImg1 from "./imports/image-2.png";
import productImg2 from "./imports/image-3.png";
import productImg3 from "./imports/image-4.png";

const HERO_BG = heroBg;
const GREEN_DETOX_IMG = productImg1;
const SURYA_IMG = productImg2;
const BUNDLE_IMG = productImg3;

const fontDisplay = "'Cormorant Garamond', Georgia, serif";
const fontSans = "'DM Sans', sans-serif";

function StarRow() {
  return (
    <div className="flex gap-[4px]">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} fill="none" height="19" viewBox="0 0 20 19" width="20">
          <path d={svgPaths.p777b400} fill="#2F5207" />
        </svg>
      ))}
    </div>
  );
}

function UberEatsLogo() {
  return (
    <svg fill="none" height="20" viewBox="0 0 122 19.8653" width="122">
      <path d={svgPaths.peb91780} fill="black" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg fill="none" height="40" viewBox="0 0 42.9874 43" width="40">
      <path d={svgPaths.p39c9d700} fill="#00E510" />
      <path d={svgPaths.p8a8ee80} fill="#FDFDFD" />
      <path d={svgPaths.p2b362d72} fill="#FDFDFD" />
    </svg>
  );
}

function CircleIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative size-[80px] shrink-0">
      <div className="absolute left-[20px] top-[20px] size-[40px] flex items-center justify-center overflow-clip">
        {children}
      </div>
      <svg
        className="absolute inset-0"
        fill="none"
        height="80"
        viewBox="0 0 80 80"
        width="80"
      >
        <circle cx="40" cy="40" r="38.5" stroke="#B1ABA0" strokeWidth="3" />
      </svg>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-[28px] items-center w-[260px] shrink-0">
      <CircleIcon>{icon}</CircleIcon>
      <p
        className="text-[#476a32] text-[19px] text-center leading-[1.3] font-semibold"
        style={{ fontFamily: fontSans }}
      >
        {title}
      </p>
      <p
        className="text-[#666] text-[17px] text-center leading-[1.5] tracking-[-0.5px]"
        style={{ fontFamily: fontSans }}
      >
        {description}
      </p>
    </div>
  );
}

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="bg-[#96bf7d] rounded-[24px] p-[36px] flex flex-col gap-[14px] w-[390px] shrink-0">
      <p
        className="text-[#497330] text-[15px] font-medium leading-normal tracking-[-0.4px]"
        style={{ fontFamily: fontSans }}
      >
        {name}
      </p>
      <StarRow />
      <p
        className="text-black text-[18px] leading-[1.5] tracking-[-0.5px]"
        style={{ fontFamily: fontSans }}
      >
        {text}
      </p>
    </div>
  );
}

function ProductCard({
  name,
  description,
  price,
  imgSrc,
}: {
  name: string;
  description: string;
  price: string;
  imgSrc: string;
}) {
  return (
    <div className="flex flex-col rounded-[28px] border-2 border-[#2f5207] overflow-hidden w-[360px] shrink-0 bg-white">
      <div className="h-[400px] w-full overflow-hidden">
        <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-[20px] p-[24px] pb-[28px]">
        <div className="flex flex-col gap-[4px]">
          <p
            className="text-[26px] text-black font-semibold leading-[1.3] tracking-[-0.8px]"
            style={{ fontFamily: fontSans }}
          >
            {name}
          </p>
          <p
            className="text-[#476a32] text-[16px] leading-[1.5]"
            style={{ fontFamily: fontSans }}
          >
            {description}
          </p>
        </div>
        <div className="flex items-center gap-[40px]">
          <p
            className="text-[28px] font-bold text-black tracking-[-0.8px]"
            style={{ fontFamily: fontSans }}
          >
            {price}
          </p>
          <button
            className="bg-[#2f5207] text-white px-[22px] py-[10px] rounded-[40px] text-[20px] font-medium leading-[1.3] hover:bg-[#3d6a0a] transition-colors cursor-pointer"
            style={{ fontFamily: fontSans }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-[#f7f0e1] min-h-screen w-full overflow-x-hidden">
      {/* Hero */}
      <div className="relative w-full h-[700px] overflow-hidden">
        <img
          src={HERO_BG}
          alt="lush green nature"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Nav */}
        <nav className="relative z-10 flex gap-[100px] items-center px-[80px] pt-[48px]">
          {["Home", "Products", "About Us", "Contact Us"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white text-[19px] leading-normal tracking-[-0.5px] hover:opacity-80 transition-opacity"
              style={{ fontFamily: fontSans }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Hero text */}
        <div className="relative z-10 px-[100px] pt-[110px]">
          <h1
            className="text-white leading-[1.05] tracking-[-2.4px] font-normal italic mb-[28px] max-w-[640px]"
            style={{ fontFamily: fontDisplay, fontSize: "80px" }}
          >
            Pressed to Pureness
          </h1>
          <p
            className="text-white text-[19px] leading-[1.5] tracking-[-0.5px] max-w-[560px] mb-[48px]"
            style={{ fontFamily: fontSans }}
          >
            Not just juice. Something you actually feel good drinking.
            <br />
            Fresh, organic ingredients blended with Ayurvedic herbs — made to
            enhance your everyday routine. Based in Surrey, BC.
          </p>
          <div className="flex gap-[20px] items-center flex-wrap">
            <div className="flex items-center gap-[10px] bg-[#f98909] px-[28px] py-[14px] rounded-[30px]">
              <span
                className="text-black text-[22px] leading-[1.3] tracking-[-0.7px] whitespace-nowrap"
                style={{ fontFamily: fontSans }}
              >
                Order on
              </span>
              <UberEatsLogo />
            </div>
            <div className="flex items-center gap-[10px] bg-white px-[28px] py-[10px] rounded-[30px]">
              <span
                className="text-black text-[22px] leading-[1.3] tracking-[-0.7px] whitespace-nowrap"
                style={{ fontFamily: fontSans }}
              >
                Order on WhatsApp
              </span>
              <WhatsAppIcon />
            </div>
          </div>
        </div>
      </div>

      {/* More than Juice */}
      <div className="py-[100px] px-[60px]">
        <div className="text-center mb-[70px]">
          <h2
            className="text-black leading-normal tracking-[-2px] font-normal italic"
            style={{ fontFamily: fontDisplay, fontSize: "68px" }}
          >
            More than Juice
          </h2>
          <p
            className="text-[#555] text-[18px] leading-[1.5] tracking-[-0.5px] mt-[10px]"
            style={{ fontFamily: fontSans }}
          >
            The goodness of Ayurveda, with ingredients you can trust.
          </p>
        </div>
        <div className="flex gap-[60px] justify-center flex-wrap">
          <FeatureCard
            icon={
              <svg
                fill="none"
                height="40"
                viewBox="0 0 39.9954 39.9491"
                width="40"
              >
                <path d={svgPaths.pa794f40} fill="#B1ABA0" />
              </svg>
            }
            title="Cold-pressed freshness"
            description="Every bottle is designed around freshness-first preparation for a clean, vibrant taste and elevated experience."
          />
          <FeatureCard
            icon={
              <svg
                fill="none"
                height="40"
                viewBox="0 0 39.9874 39.9792"
                width="40"
              >
                <path d={svgPaths.p15f52700} fill="#B1ABA0" />
              </svg>
            }
            title="Organic Ingredients"
            description="We prioritize organic produce and carefully sourced botanicals to keep the menu rooted in quality."
          />
          <FeatureCard
            icon={
              <svg
                fill="none"
                height="40"
                viewBox="0 0 39.9926 40.0004"
                width="40"
              >
                <path d={svgPaths.p3435a080} fill="#B1ABA0" />
              </svg>
            }
            title="Ayurvedic Infusions"
            description="Selected herbs and spices bring depth, warmth, and a distinctive wellness identity to every blend."
          />
          <FeatureCard
            icon={
              <svg
                fill="none"
                height="40"
                viewBox="0 0 40.0117 39.9707"
                width="40"
              >
                <path d={svgPaths.p268cf200} fill="#B1ABA0" />
              </svg>
            }
            title="Premium Everyday Ritual"
            description="Chilliwack Juice Co is built for customers who want something polished, intentional, and easy to enjoy regularly."
          />
        </div>
      </div>

      {/* Reviews */}
      <div className="py-[80px] px-[100px]">
        <h2
          className="text-black leading-normal tracking-[-2px] font-normal italic mb-[56px]"
          style={{ fontFamily: fontDisplay, fontSize: "68px" }}
        >
          Opinions you can trust
        </h2>
        <div className="flex gap-[28px] overflow-x-auto pb-[16px]">
          <ReviewCard
            name="Anna K"
            text="The staff are really friendly and were very patient while serving a senior customer who was ahead of me. They had a lot of questions and comments about the drinks and food, and the staff handled everything with grace."
          />
          <ReviewCard
            name="Maria L"
            text="The staff are really friendly and were very patient while serving a senior customer who was ahead of me. They had a lot of questions and comments about the drinks and food, and the staff handled it beautifully."
          />
          <ReviewCard
            name="James T"
            text="The staff are really friendly and were very patient while serving a senior customer who was ahead of me. They had a lot of questions and comments about the drinks and food, and the staff handled it all so well."
          />
          <ReviewCard
            name="Sophie R"
            text="Incredible wellness blends. The Ayurvedic infusions are unique and the cold-pressed process really comes through in every sip. Highly recommend the Green Detox."
          />
        </div>
      </div>

      {/* Products */}
      <div className="py-[80px] px-[100px]">
        <h2
          className="text-black leading-normal tracking-[-2px] font-normal italic mb-[56px]"
          style={{ fontFamily: fontDisplay, fontSize: "68px" }}
        >
          Revitalize your routine
        </h2>
        <div className="flex gap-[36px] flex-wrap">
          <ProductCard
            name="Green Detox"
            description="A crisp green blend with cooling herbs and a clean, spa-like finish."
            price="$20"
            imgSrc={GREEN_DETOX_IMG}
          />
          <ProductCard
            name="Surya"
            description="A bright, clean citrus pour softened with coconut water and basil."
            price="$20"
            imgSrc={SURYA_IMG}
          />
          <ProductCard
            name="5 Day Bundle"
            description="Five-day guided juice plan that fits your pace."
            price="$100"
            imgSrc={BUNDLE_IMG}
          />
        </div>
      </div>

      {/* Our Story */}
      <div className="py-[80px] px-[100px]">
        <h2
          className="text-black leading-normal tracking-[-2px] font-normal italic mb-[40px]"
          style={{ fontFamily: fontDisplay, fontSize: "68px" }}
        >
          Our Story
        </h2>
        <div className="max-w-[800px]">
          <p
            className="text-[#444] text-[20px] leading-[1.7] tracking-[-0.5px]"
            style={{ fontFamily: fontSans }}
          >
            Chilliwack Juice Co began as a simple belief: that what you drink
            every day should nourish you deeply, not just refresh you briefly.
            Founded in Surrey, BC, we craft small-batch cold-pressed juices
            infused with Ayurvedic botanicals — bridging ancient wisdom with
            modern wellness.
          </p>
          <p
            className="text-[#444] text-[20px] leading-[1.7] tracking-[-0.5px] mt-[24px]"
            style={{ fontFamily: fontSans }}
          >
            Every bottle is made with organic, locally sourced ingredients and
            zero shortcuts. We believe your daily ritual deserves to feel
            premium — approachable, intentional, and genuinely good for you.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2f5207] py-[48px] px-[100px] flex items-center justify-between flex-wrap gap-[24px]">
        <p
          className="text-white leading-normal tracking-[-0.8px] font-normal italic"
          style={{ fontFamily: fontDisplay, fontSize: "28px" }}
        >
          Chilliwack Juice Co.
        </p>
        <div className="flex gap-[40px]">
          {["Home", "Products", "About Us", "Contact Us"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/80 text-[16px] hover:text-white transition-colors"
              style={{ fontFamily: fontSans }}
            >
              {item}
            </a>
          ))}
        </div>
        <p
          className="text-white/50 text-[14px]"
          style={{ fontFamily: fontSans }}
        >
          © 2026 Chilliwack Juice Co.
        </p>
      </footer>
    </div>
  );
}
