
export default async function Dashboard() {

  return (
    <div className="h-screen w-full bg-zinc-50 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mt-20 text-zinc-900">
        Welcome to the Dashboard!
      </h1>
      
      {/* Logout button (we can build this action next) */}
      <form action="/auth" method="post">
        <button 
          className="mt-6 px-4 py-2 bg-zinc-900 text-white rounded-lg text-sm hover:bg-zinc-800 transition"
          type="submit"
        >
          Sign out
        </button>
      </form>
    </div>
  );
}