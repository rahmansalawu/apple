import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-800 p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6">Think Different</h1>
        <p className="text-xl mb-12">Welcome to a world of innovation and simplicity.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {['Design', 'Innovation', 'Simplicity', 'Impact'].map((item) => (
            <div key={item} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-3">{item}</h2>
              <p className="text-gray-600">The intersection of technology and liberal arts.</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-16 text-sm text-gray-500">
        © {new Date().getFullYear()} Inspired by Apple. All rights reserved.
      </footer>
    </main>
  );
}