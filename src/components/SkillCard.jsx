import { motion } from "motion/react";

export default function SkillCard({ skill }) {
  console.log(skill.getColor())
  return (
    <motion.div className={`group/skill relative h-14 p-5 gap-5 flex justify-center items-center rounded-lg border border-zinc-800 hover:scale-105 hover:shadow-md ${skill.getColor()} transition-all duration-300`}>
      
      {skill.getIsExpert() && <img src="/assets/star.svg" className="absolute h-4 -top-2 -right-2"/>}
      <img src={skill.getImage()} className={`${skill.getImageSize()} saturate-0 group-hover/skill:saturate-100 flex-shrink-0 transition-all duration-300`} alt={skill.getName()} />
      
      <p className="">{skill.getName()}</p>
    </motion.div>
  );
}
