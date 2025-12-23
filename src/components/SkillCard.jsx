import { motion } from "motion/react";

const item = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: { duration: 0.7, ease: [.79,.05,.38,1] },
      opacity: { duration: 2, ease: [.79,.05,.38,1] },
    },
  },
};

export default function SkillCard({ skill }) {
  return (
    <motion.div 
      variants={item}
      className={`group/skill relative h-14 p-5 gap-5 flex justify-center items-center rounded-lg border border-zinc-800 hover:scale-105 hover:shadow-md ${skill.getColor()} transition  duration-300`}>
      
      {skill.getIsExpert() && <img src="/assets/star.svg" className="absolute h-4 -top-2 -right-2"/>}
      <img src={skill.getImage()} className={`${skill.getImageSize()} saturate-[0.25] group-hover/skill:saturate-100 flex-shrink-0 transition duration-300`} alt={skill.getName()} />
      
      <p className="">{skill.getName()}</p>
    </motion.div>
  );
}
