import Logo from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { FOOTER_LINKS } from "@/constants/footer-links";
import { SOCIAL_LINKS } from "@/constants/social-links";
import { Link } from "react-router";
const FooterSection = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="section-container mt-36 flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
        {/* Brand */}
        <div className="flex flex-col items-start gap-6">
          {" "}
          <Logo />{" "}
          <p className="w-full max-w-xl text-muted-foreground">
            {" "}
            Upload, explore, and get instant AI-powered answers from your
            documents. <br /> Sonor turns your PDFs into interactive
            knowledge.{" "}
          </p>{" "}
          <div className="flex items-center gap-5">
            {" "}
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {" "}
                <link.icon className="size-5" />{" "}
              </a>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        {/* Footer Links */}{" "}
        <div className="grid w-full grid-cols-2 gap-8 sm:max-w-md lg:max-w-lg">
          {" "}
          {FOOTER_LINKS.map((footerLink) => (
            <div key={footerLink.title} className="flex flex-col gap-4">
              <h2 className="text-sm font-semibold text-foreground">
                {footerLink.title}
              </h2>
              <ul className="flex flex-col gap-3">
                {" "}
                {footerLink.links.map((link) => (
                  <li key={link.name}>
                    {" "}
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Separator
        orientation="horizontal"
        className=" bg-transparent bg-linear-to-r from-transparent via-border to-transparent"
      />
      {/* Copyright */}
      <div className="py-2 text-sm text-muted-foreground">
        © {date} Sonor. All rights reserved.
      </div>
      {/* Oversized Brand */}
      <div aria-hidden="true" className="w-full overflow-hidden pt-8">
        <div className="whitespace-nowrap bg-linear-to-b from-primary/20 to-transparent bg-clip-text text-center text-[clamp(4rem,18vw,14rem)] font-extrabold leading-[0.75] tracking-tight text-transparent">
          Sonor
        </div>
      </div>
    </footer>
  );
};
export default FooterSection;
