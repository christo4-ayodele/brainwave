import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex justify-between items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => {
            //you can use the curly bracket for a map function but you will have to use the return and parenthesis for the html element or just use the parenthesis for the map function if you are not going to do any javascript prior to returning the html and react fragment
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              >
                <img
                  src={item.iconUrl}
                  alt={item.title}
                  width={16}
                  height={16}
                />
              </a>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
