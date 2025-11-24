import M1 from "../assets/M1.png";
import M2 from "../assets/M2.png";
import M3 from "../assets/M3.png";
import MouseTilt from "../Components/MouseTilt";

export default function Missions() {
  return (
    <section id="missions" className="section-padding bg-[var(--bg)] reveal-up">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-dark)]">
            Level up your learning journey
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mt-3 text-base sm:text-lg">
            A structured, gamified mission path — with expert mentor support and instant AI help.
          </p>
        </div>

        {/* 3 Equal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <MouseTilt>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-full h-[360px] flex justify-center items-center overflow-hidden rounded-xl bg-white/90">
             
              <img
                src={M1}
                alt="Mission 1"
                className="h-full object-cover"
              />
              
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[var(--text-dark)]">
              Structured like a game
            </h3>

            <p className="mt-2 text-gray-600 text-sm leading-relaxed px-2">
              A fun mission-style learning path that boosts consistency and motivation.
            </p>
          </div>
</MouseTilt>
          {/* Card 2 */}
           <MouseTilt>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-full h-[360px] flex justify-center items-center overflow-hidden rounded-xl bg-white/90">
              <img
                src={M2}
                alt="Mission 2"
                className="h-full object-cover"
              />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[var(--text-dark)]">
              Choose your preferred mentor
            </h3>

            <p className="mt-2 text-gray-600 text-sm leading-relaxed px-2">
              View expert profiles and select the teacher who matches your style.
            </p>
          </div>
</MouseTilt>
          {/* Card 3 */}
          <MouseTilt>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-full h-[360px] flex justify-center items-center overflow-hidden rounded-xl bg-white/90">
              <img
                src={M3}
                alt="Mission 3"
                className="h-full object-cover"
              />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[var(--text-dark)]">
              AI-powered instant doubt help
            </h3>

            <p className="mt-2 text-gray-600 text-sm leading-relaxed px-2">
              Get real-time AI explanations and quick solutions whenever you are stuck.
            </p>
          </div>
</MouseTilt>
        </div>

      </div>
    </section>
  );
}
