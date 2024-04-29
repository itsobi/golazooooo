import PostForm from './PostForm';

export default function Feed() {
  return (
    <section className="col-span-full md:col-span-6 xl:col-span-4 p-4 border rounded h-full">
      <PostForm />
    </section>
  );
}
