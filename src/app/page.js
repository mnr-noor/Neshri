import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Welcome to My Website</h1>
      </main>
    </div>
  );
}
