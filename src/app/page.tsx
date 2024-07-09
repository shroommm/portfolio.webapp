import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/FramerWrapper";

export const siteConfig = {
  name: "Anh Quan Nguyen",
  description: "My full name is Nguyen Khac Anh Quan",
  ogImage: "",
  url: "",
};
export default function Home() {
  return (
    <>
      {/* LEFT SIDE  */}
      <FramerWrapper
        className="h-full w-auto flex flex-col justify-start gap-4"
        y={0}
        x={-100}
      >
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-3">
          <SocialLinks />
        </div>
        <DownLoadResumeBtn />
      </FramerWrapper>
      {/* RIGHT SIDE image  */}
      <FramerWrapper
        className="h-full w-fit relative block max-lg:hidden text-center"
        y={0}
        x={100}
      >
        {/* IMAGE  */}
        <HeroImage />
      </FramerWrapper>

      {/* GITHUB BUTTON  */}
      <GithubBtn />
    </>
  );
}
