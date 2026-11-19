import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import styles from '../page/Home.module.css';

export type Project = { id?: number; featured?: boolean; title: string; description: string; image: string; technologies: string[]; github: string | null; live: string | null };

export function ProjectCard({ project }: { project: Project }) {
  return <motion.article className={styles.projectCard} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .42 }} whileHover={{ y: -3 }}>{project.image && <div className={styles.projectImageWrap}><img src={project.image} alt={`${project.title} preview`} /></div>}<div className={styles.projectBody}><h3>{project.title}</h3><p>{project.description}</p><div className={styles.projectFooter}><div className={styles.tags}>{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><div className={styles.projectLinks}>{project.github && <a aria-label={`${project.title} source code`} href={project.github} target="_blank" rel="noreferrer"><GitHubIcon /></a>}{project.live && <a aria-label={`${project.title} live site`} href={project.live} target="_blank" rel="noreferrer"><OpenInNewIcon /></a>}</div></div></div></motion.article>;
}
