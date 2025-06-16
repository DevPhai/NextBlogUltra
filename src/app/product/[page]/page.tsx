export async function generateStaticParams() {
  const page = ["1", "2", "3"];

  return page.map((page) => ({
    page,
  }));
}
export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  return <div>Article: {page}</div>;
}
