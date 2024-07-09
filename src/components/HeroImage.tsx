import logo from "../../public/portfolioLogo.png";
import Image from "next/image";

const HeroImage = () => {
  return (
    <>
      <Image
        src="/portrait_bg_removed.png"
        alt="self portrait"
        loading="eager"
        priority
        height={500}
        width={550}
        className="w-[550px] h-[500px] object-contain object-top"
        quality={100}
      />
    </>
  );
};
export default HeroImage;
