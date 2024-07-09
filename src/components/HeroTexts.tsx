import TextRotator from "./TextRotator";

const HeroTexts = () => {
  return (
    <>
      <h3 className="text-2xl max-sm:text-xl font-semibold">Hi, my name is</h3>
      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl ">
        Nguyen Khac Anh Quan
      </h1>
      <TextRotator />
    </>
  );
};
export default HeroTexts;
