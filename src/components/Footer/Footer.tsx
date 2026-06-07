interface FooterProps {
  t: (word: string) => string;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer
      id="footer"
      className="bg-base-100 text-sm py-8 gap-12 flex flex-col items-center w-full"
    >
      <ul className="flex gap-8 text-primary/70">
        <li>{t("footer.documentation")}</li>
        <li>{t("footer.developmentLog")}</li>
        <li>{t("footer.community")}</li>
      </ul>
      <p className="text-primary">{t("footer.copyright")}</p>
    </footer>
  );
}
