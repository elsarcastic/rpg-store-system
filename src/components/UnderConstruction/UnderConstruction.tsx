import Image from "next/image";
import paper from "@/assets/img/paper-background.png";
import { useTranslation } from "@/hooks/useTranslation";
import { underConstruction } from "@/assets/svg";

interface UnderConstructionProps {
  namespace: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onReturn: any;
}

export function UnderConstruction({
  namespace,
  onReturn,
}: UnderConstructionProps) {
  const { t } = useTranslation(namespace);

  return (
    <div className="relative flex flex-col items-center">
      <Image src={paper} alt="papiro" unoptimized />
      <div className="absolute p-20 flex flex-col gap-8">
        <div className="bg-base-200/10 border-2 rounded-xl p-8 border-primary/60 w-fit mx-auto">
          <Image src={underConstruction} alt="under construction" />
        </div>
        <div className="flex flex-col gap-4 items-center w-[500px] text-center">
          <h1 className="text-4xl font-bold text-secondary uppercase">
            {t("title")}
          </h1>
          <p className="italic text-base-350/60 text-2xl">{t("subtitle")}</p>
        </div>
        <div className="border-1 border-primary w-32 mx-auto" />
        <div className="flex flex-col gap-4 w-[500px] text-center text-base-300 text-lg leading-6">
          <p>{t("description")}</p>
          <p>{t("returnWhen")}</p>
        </div>
        <button
          onClick={onReturn}
          className="bg-red-400 py-4 px-12 mx-auto w-fit rounded-lg hover:bg-red-600 active:scale-95 transition-all duration-100 text-secondary text-xl font-bold"
        >
          {t("returnButton")}
        </button>
      </div>
    </div>
  );
}
