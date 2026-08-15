import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ProjectCard } from '../component/ProjectCard';
import { projects } from './projectData';
import styles from './Home.module.css';

export default function Projects() {
  return <main className={styles.allProjectsPage}>
    <section className={styles.allProjectsHeader}>
      <Link to="/" className={styles.backHome}><ArrowBackIcon /> Back to home</Link>
      <span>02</span>
      <h1>All Projects</h1>
      <p>A selection of practical, thoughtful digital experiences.</p>
    </section>
    <section className={styles.allProjectsGrid}>
      {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
    </section>
  </main>;
}
