import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ProjectCard, type Project } from '../component/ProjectCard';
import styles from './Home.module.css';

export type ProjectListingProps = {
  projects: Project[];
  status: 'loading' | 'ready' | 'unavailable';
};

export function ProjectListing({ projects, status }: ProjectListingProps) {
  if (status === 'loading') return <p role="status">Loading projects…</p>;
  if (status === 'unavailable') return <p role="status">Projects are temporarily unavailable.</p>;
  if (!projects.length) return <p role="status">No projects to display yet.</p>;

  return projects.map((project) => <ProjectCard key={project.id ?? project.title} project={project} />);
}

export default function Projects({ projects, status }: ProjectListingProps) {
  return <main className={styles.allProjectsPage}>
    <section className={styles.allProjectsHeader}>
      <Link to="/" className={styles.backHome}><ArrowBackIcon /> Back to home</Link>
      <span>02</span>
      <h1>All Projects</h1>
      <p>A selection of practical, thoughtful digital experiences.</p>
    </section>
    <section className={styles.allProjectsGrid}>
      <ProjectListing projects={projects} status={status} />
    </section>
  </main>;
}
