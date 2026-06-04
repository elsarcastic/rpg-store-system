import ArmasPageClient from "./components/ArmasPageClient";

type PageProps = {
  searchParams: Promise<{ vendedor?: string }>;
};

export default async function Page({ searchParams }: PageProps) {
  const { vendedor = "" } = await searchParams;

  return <ArmasPageClient vendedor={vendedor} />;
}