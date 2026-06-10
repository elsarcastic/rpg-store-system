export function NewsItems({ t }: { t: (word: string) => string }) {
  return (
    <div className="flex shrink-0 items-center">
      <p className="text-primary mr-12">
        <span className="inline-block h-2 w-2 rounded-full bg-red-300 mr-2" />
        {t("newsCarousel.borderWar")}
      </p>

      <p className="text-primary mr-12">
        <span className="inline-block h-2 w-2 rounded-full bg-red-300 mr-2" />
        {t("newsCarousel.harvest")}
      </p>

      <p className="text-primary mr-12">
        <span className="inline-block h-2 w-2 rounded-full bg-red-300 mr-2" />
        {t("newsCarousel.decree")}
      </p>

      <p className="text-primary mr-12">
        <span className="inline-block h-2 w-2 rounded-full bg-red-300 mr-2" />
        {t("newsCarousel.plague")}
      </p>
    </div>
  );
}
