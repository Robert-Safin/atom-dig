import TextFooter from "../typography/TextFooter";

const Footer = () => {
  return (
    <div className="tablet:flex-row tablet:space-y-0 tablet:justify-between laptop:px-[36px] desktop:px-[48px] laptop:pb-[32px] desktop:pb-[48px] mx-auto flex max-w-[1920px] flex-col items-center space-y-[21px] px-[28px] pb-[24px]">
      <TextFooter text="© 2025 Atomic Digital. All Rights Reserved." />
      <div className="tablet:space-x-8 flex">
        <div className="hover:text-accent cursor-pointer hover:underline">
          <TextFooter text="Terms & Conditions" />
        </div>
        <div className="hover:text-accent cursor-pointer hover:underline">
          <TextFooter text="Privacy Policy" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
