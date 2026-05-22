// components/Stats.tsx

export default async function Stats() {
  const data = await fetch('https://shohanbackend.vercel.app/stats')
  const statsData = await data.json()
  return (
    <section className="py-10 bg-white/60">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            grid 
            grid-cols-2              /* 2 columns on very small screens */
            sm:grid-cols-2           /* still 2 on small tablets */
            md:grid-cols-4           /* 4 columns from medium screens and up */
            gap-6                    /* consistent spacing */
            text-center
          "
        >
          <div className="stat-box bg-purple-100 p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-purple-600">{statsData.experience}</h3>
            <p className="mt-2 text-gray-700">Experience</p>
          </div>

          <div className="stat-box bg-purple-100 p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-blue-600">{statsData.clients}</h3>
            <p className="mt-2 text-gray-700">Happy Clients</p>
          </div>

          <div className="stat-box bg-pink-100 p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-pink-600">{statsData.countries}</h3>
            <p className="mt-2 text-gray-700">Countries</p>
          </div>

          <div className="stat-box bg-green-100 p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-green-600">{statsData.projects}</h3>
            <p className="mt-2 text-gray-700">Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}