export default function PostForm() {
  return (
    <form className="flex-col">
      <div className="flex items-center space-x-2">
        <label>Title:</label>
        <input
          placeholder="Enter a title to create a post"
          type="text"
          className="outline-none bg-slate-50 w-full rounded-full px-4 py-2"
        />
      </div>
    </form>
  );
}
