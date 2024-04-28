export default function Home() {
  return (
    <div className="grid grid-cols-8">
      {/* left menu */}
      <div className="hidden xl:inline-grid xl:col-span-1 bg-red-100">
        <p>Menu</p>
      </div>

      {/* feed */}
      <div className="col-span-full md:col-span-6 xl:col-span-5 bg-green-100">
        <p>Feed</p>
      </div>

      {/* right widget for communities */}
      <div className="hidden md:inline-grid md:col-span-2 bg-blue-100">
        <p>Community widget</p>
      </div>
    </div>
  );
}
