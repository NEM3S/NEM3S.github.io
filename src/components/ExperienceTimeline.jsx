export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "Stage - Actemium Tavaux",
      date: "mars. 2026 - juillet. 2026",
      description: [`Aucune description disponible pour le moment.`],
    },
    {
      title: "Stage - Syensqo Tavaux",
      date: "janv. 2025 - mars. 2025",
      description: [`J'ai réalisé un stage de 9 semaines au sein de l'équipe digitale de l'usine chimique Syensqo à Tavaux.`,
        `Pendant ce stage, j'ai développé plusieurs applications mobiles destinées au secteur de la fabrication, puis conçu un tableau de bord centralisant les données qu'elles recueillaient, afin d'offrir une visualisation claire et synthétique des plans de contrôle de sécurité.`],
    },
    {
      title: "Stage - Actemium Tavaux",
      date: "déc. 2019",
      description: [`J'ai réalisé un stage d'une semaine durant mon année de troisième au sein du bureau d'étude à Actemium Tavaux.`,
        `Ce stage visait à me familiariser avec le monde professionnel. Bien que sa durée limitée ne m'ait pas permis d'en découvrir tous les aspects, il m'a offert une première expérience précieuse et formatrice.`],
    },
  ];

  return (
    <div className="relative mt-7">

      {/* Ligne verticale */}
      <div className="absolute left-4 top-4 bottom-0 w-1 bg-zinc-400 dark:bg-zinc-600 opacity-50 rounded-xl"></div>

      <div className="space-y-10 pb-2 mb-2">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-6 group/experience">

            {/* Point sur la ligne */}
            <div className="absolute left-2.5 top-2.5 w-4 h-4 bg-zinc-400 dark:bg-zinc-600 group-hover/experience:bg-sky-600 dark:group-hover/experience:bg-yellow-700 rounded-full transition-colors duration-300"></div>

            {/* Contenu */}
            <div className="flex justify-left items-left sm:justify-between flex-col relative bg-transparent pl-6 w-full text-left">
              <h4 className="group-hover/experience:translate-x-2 text-xl text-center sm:text-left font-bold text-zinc-900 dark:text-white duration-300">{exp.title}</h4>
              <p className="group-hover/experience:translate-x-1 text-sky-600 dark:text-yellow-700 text-sm mb-2 font-bold duration-300">
                {exp.date}
              </p>
              {exp.description.map((desc, i) => (
                <p key={i} className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
