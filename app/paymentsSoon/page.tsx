export default function TicketsComingSoon() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-5xl w-full px-6">
        {/* TEDx Tag */}
        <p className="text-red-600 tracking-[0.35em] font-bold text-sm mb-6">
          TEDxKIET 2026
        </p>

        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-black leading-tight">
          Tickets
          <br />
          <span className="text-red-600">Coming Soon</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
          An independently organized TED event.
          <br />
          Ideas worth spreading.
        </p>

        {/* Divider */}
        <div className="w-20 h-[3px] bg-red-600 my-10" />

        {/* CTA */}
        <p className="text-lg mb-8">
          Be ready. Limited seats. One unforgettable experience.
        </p>

        <button className="border-2 border-red-600 px-10 py-4 text-sm tracking-widest font-semibold hover:bg-red-600 transition">
          NOTIFY ME
        </button>
         <a href="/">
         <button  className="border-2 border-red-600 px-10 py-4 text-sm tracking-widest font-semibold hover:bg-red-600 transition">
          HOME
        </button></a>
      </div>
    </main>
  )
}
