import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
const page = () => {
  const items = [
    { hobby: "Coding" },
    { hobby: "Video games" },
    { hobby: "Sports" },
    { hobby: "Music" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2 py-[6px]">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>
          Web Developer
          <br />
          Based in Vietnam
        </Heading>
        <FramerWrapper y={0} x={100}>
          <p className="text-xl w-full text-primary max-sm:text-lg leading-relaxed font-medium">
            I am a Web Developer based in Ho Chi Minh City, Vietnam,
            specializing in <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>JavaScript</strong>. With a
            portfolio that includes dashboards and a web app for reading
            text-based stories, I excel in creating engaging and efficient web
            applications. Passionate about seamless and responsive user
            experiences, I am committed to performance optimization and
            user-centric design. My strength lies in bringing pixel-perfect
            designs to life, ensuring interfaces are both visually stunning and
            highly functional.
          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper
        className="w-full flex flex-row justify-between max-lg:flex-col "
        y={100}
        delay={0.3}
      >
        <Aboutfooter />
      </FramerWrapper>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {" "}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start font-medium"
              >
                <Circle strokeWidth={3} className="h-3 w-3" /> 
                <p>{val.hobby}</p>
              </div>
            );
          })}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;
