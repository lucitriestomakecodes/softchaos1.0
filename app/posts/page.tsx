import ListStories from "@/components/ListStories";

export default function StoriesPage() {
  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Stories</h1>
      <ListStories />
    </main>
  );
}
