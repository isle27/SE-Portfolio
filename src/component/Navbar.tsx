import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const links = ['Home', 'Skills', 'Projects', 'About', 'Contact'];
export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  const toggleTheme = () => setTheme((currentTheme) => {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', nextTheme);
    return nextTheme;
  });
  const go = (label: string) => {
    const targetId = label.toLowerCase();
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      return;
    }
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };
  return <header className={styles.navbar}><div className={styles.inner}><button className={styles.brand} onClick={() => go('Home')}><span aria-hidden="true">E</span><b>Elsa Chanyalew</b></button><nav className={open ? styles.open : ''}>{links.map((link) => <button key={link} onClick={() => go(link)}>{link}</button>)}</nav><button className={styles.themeToggle} onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}><span className={theme === 'light' ? styles.activeIcon : ''}><LightModeOutlinedIcon /></span><span className={theme === 'dark' ? styles.activeIcon : ''}><DarkModeOutlinedIcon /></span></button><button className={styles.menu} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <CloseIcon /> : <MenuIcon />}</button></div></header>;
}
