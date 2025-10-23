export default function AboutSection() {
  return (
    <div className="pl-10 pr-10 w-full overflow-y-auto min-h-screen bg-transparent flex flex-col items-center justify-start pt-48 pb-24 text-zinc-900 dark:text-white transition-colors duration-300">
      <h1 className="text-5xl font-bold mb-6">A propos de moi</h1>
      <p className="text-zinc-700 dark:text-gray-300 mb-4 max-w-xl text-left">
        Etudiant en troisieme annee de BUT Informatique, je suis passionne par le developpement logiciel et le reverse engineering.
      </p>
      <p className="text-zinc-700 dark:text-gray-300 mb-4 max-w-xl text-left">
        J'aime comprendre comment les choses fonctionnent, que ce soit en programmation bas niveau, en conception <b>SOLID</b> ou en developpement web.
      </p>
      <p className="text-zinc-700 dark:text-gray-300 mb-4 max-w-xl text-left">
        Curieux et rigoureux, je passe beaucoup de temps a experimenter, apprendre de nouvelles technologies et perfectionner mes projets personnels.
      </p>
      <p className="text-zinc-700 dark:text-gray-300 mb-10 max-w-xl text-left">
        <u>Mon objectif</u> : concevoir des outils et des projets qui allient technique et creativite de la meilleure maniere possible, pour repondre aux besoins utilisateurs.
      </p>
    </div>
  );
}
