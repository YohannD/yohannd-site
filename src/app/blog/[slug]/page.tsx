import { redirect } from "next/navigation";
import { getAllPosts } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogSlugRedirect({ params }: Props) {
  const { slug } = await params;
  redirect(`/writing/${slug}`);
}
