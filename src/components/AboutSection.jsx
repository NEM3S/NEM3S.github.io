export default function AboutSection() {
  return (
    <div className="overflow-y-auto min-h-screen w-full bg-gray-950 text-white flex flex-col items-center justify-start pt-48 pb-24">

      <h1 className="text-5xl font-bold mb-6">À propos de moi</h1>
      <p className="text-gray-400 mb-4 max-w-xl text-left">
        Étudiant en troisième année de BUT Informatique, je suis passionné par le développement logiciel et le reverse engineering.
      </p>
      <p className="text-gray-400 mb-4 max-w-xl text-left">
        J'aime comprendre comment les choses fonctionnent, que ce soit en programmation bas niveau, en conception <b>SOLID</b> ou en développement de web.
      </p>
      <p className="text-gray-400 mb-4 max-w-xl text-left">
        Curieux et rigoureux, je passe beaucoup de temps à expérimenter, apprendre de nouvelles technologies et perfectionner mes projets personnels
      </p>
      <p className="text-gray-400 mb-10 max-w-xl text-left">
        <u>Mon objectif</u> : concevoir des outils et des projets qui allient technique et créativité de la meilleur manière possible, pour répondre aux besoins utilisateurs.
      </p>
    </div>
  );
}
