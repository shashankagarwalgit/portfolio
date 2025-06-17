import React, { useState, useEffect, useMemo } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Box,
  Avatar,
  Paper,
  Chip,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Fab,
} from '@mui/material';
import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import LaunchIcon from '@mui/icons-material/Launch';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// --- THEME UPDATE ---
// Official Google Material 3 Baseline Theme (Blue)
const m3Theme = createTheme({
  palette: {
    primary: {
      main: '#0061a4',
    },
    onPrimary: {
      main: '#ffffff',
    },
    primaryContainer: {
      main: '#d1e4ff',
    },
    onPrimaryContainer: {
      main: '#001d36',
    },
    secondary: {
      main: '#535f70',
    },
    onSecondary: {
      main: '#ffffff',
    },
    secondaryContainer: {
      main: '#d7e3f7',
    },
    onSecondaryContainer: {
      main: '#101c2b',
    },
    background: {
      default: '#fdfcff',
      paper: '#fdfcff',
    },
    surfaceVariant: {
      main: '#dfe3eb',
    },
    onSurfaceVariant: {
      main: '#42474e',
    },
    outline: {
      main: '#73777f',
    },
    text: {
      primary: '#1a1c1e',
      secondary: '#42474e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20, // Fully rounded buttons are a key M3 feature
          textTransform: 'none',
          fontWeight: 'bold',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
        outlined: ({ theme }) => ({
          borderColor: theme.palette.outline.main,
        }),
      },
    },
    MuiFab: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.primaryContainer.main,
          color: theme.palette.onPrimaryContainer.main,
          '&:hover': {
            backgroundColor: alpha(theme.palette.primaryContainer.main, 0.8),
          }
        })
      }
    }
  },
});


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const NavLink = ({ href, children }) => (
    <Button
      onClick={() => scrollToSection(href)}
      variant={activeSection === href ? 'contained' : 'text'}
      sx={{
        color: activeSection === href ? 'onPrimary.main' : 'text.primary',
        margin: '0 15px',
      }}
    >
      {children}
    </Button>
  );

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <ThemeProvider theme={m3Theme}>
      {/* --- MODIFICATION 1: BEAUTIFUL BACKGROUND --- */}
      <Box sx={{
        color: 'text.primary',
        background: `linear-gradient(180deg, ${alpha(m3Theme.palette.primary.main, 0.05)} 0%, ${m3Theme.palette.background.default} 20%)`
      }}>
        <AppBar position="fixed" elevation={0} sx={{ bgcolor: alpha(m3Theme.palette.background.default, 0.8), backdropFilter: 'blur(10px)' }}>
          <Container maxWidth="lg">
            <Toolbar>
              <Typography
                variant="h5"
                component="div"
                onClick={() => window.location.reload()}
                sx={{
                  flexGrow: 1,
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  color: 'primary.main', // Existing color
                  transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out', // Smooth transition for transform and color
                  '&:hover': {
                    transform: 'scale(1.05)', // Slightly enlarge on hover
                    color: 'secondary.main', // Change color on hover (you can adjust this)
                  }
                }}
                color='primary.main'
              >
                Shashank Agarwal.
              </Typography>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <NavLink href="home">Home</NavLink>
                <NavLink href="about">About</NavLink>
                <NavLink href="experience">Experience</NavLink>
                <NavLink href="projects">Projects</NavLink>
                <NavLink href="contact">Contact</NavLink>
              </Box>
              {/* --- MODIFICATION: MADE MENU ICON VISIBLE ON MOBILE --- */}
              <IconButton
                color="primary" // Changed from "inherit" to "primary" for visibility
                aria-label="open drawer"
                edge="end"
                onClick={() => setIsMenuOpen(true)}
                sx={{ display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>

        <Drawer anchor="right" open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setIsMenuOpen(false)}
            onKeyDown={() => setIsMenuOpen(false)}
          >
            <List>
              {['home', 'about', 'experience', 'projects', 'contact'].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => scrollToSection(text)}>
                    <ListItemText primary={text.charAt(0).toUpperCase() + text.slice(1)} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Box id="home" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', pt: 10 }}>
            <Container maxWidth="lg">
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={7}>
                  <Typography variant="h2" component="h1" gutterBottom>
                    Hi, I'm <span style={{ color: m3Theme.palette.primary.main }}>Shashank</span>
                  </Typography>
                  <Typography variant="h4" color="text.secondary" gutterBottom>
                    Chemical Engineer & Web Developer
                  </Typography>
                  <Typography variant="body1" sx={{ maxWidth: '600px', mb: 4 }}>
                    B.Tech in Chemical Engineering with hands-on experience in industrial processes
                    and a passion for web development. Bridging the gap between chemical engineering
                    and modern technology.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => scrollToSection('projects')}
                      sx={{ color: 'onPrimary.main' }}
                    >
                      View My Work
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => scrollToSection('contact')}
                    >
                      Contact Me
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Avatar
                    alt="Shashank Profile"
                    src="/profile_pic.webp"
                    sx={{ width: 450, height: 455, border: '3px solid', borderColor: 'primary.main' }}
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </motion.div>

        {useMemo(() => (
          <>
            <Paper id="about" elevation={0} sx={{ py: 10, background: 'transparent' }}>
              <Container maxWidth="lg">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                  <Typography variant="h3" align="center" gutterBottom sx={{ mb: 5 }}>
                    About Me
                  </Typography>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <Paper sx={{ p: 3, bgcolor: 'primaryContainer.main', color: 'onPrimaryContainer.main' }}>
                        <Box display="flex" alignItems="center" mb={2}>
                          <SchoolIcon sx={{ mr: 2, fontSize: 40 }} />
                          <Typography variant="h5">Education</Typography>
                        </Box>
                        <Typography variant="h6" color="primary.main">
                          B.Tech in Chemical Engineering
                        </Typography>
                        <Typography variant="body2">
                          Completed Bachelor of Technology with a strong foundation in process design, thermodynamics, and mass transfer.
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Paper sx={{ p: 3, bgcolor: 'secondaryContainer.main', color: 'onSecondaryContainer.main' }}>
                        <Box display="flex" alignItems="center" mb={2}>
                          <CodeIcon sx={{ mr: 2, fontSize: 40 }} />
                          <Typography variant="h5">Skills</Typography>
                        </Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          Chemical Engineering
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                          {['Process Design', 'HYSYS', 'Aspen Plus', 'Process Safety', 'Quality Control'].map((skill) => (
                            <Chip key={skill} label={skill} sx={{ bgcolor: alpha(m3Theme.palette.primary.main, 0.1), color: 'primary.main' }} />
                          ))}
                        </Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          Web Development
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {['JavaScript', 'React', 'Node.js', 'MUI', 'Tailwind CSS'].map((skill) => (
                            <Chip key={skill} label={skill} sx={{ bgcolor: alpha(m3Theme.palette.secondary.main, 0.1), color: 'secondary.main' }} />
                          ))}
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>
                </motion.div>
              </Container>
            </Paper>

            <Box id="experience" sx={{ py: 10, background: 'transparent' }}>
              <Container maxWidth="md">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                  <Typography variant="h3" align="center" gutterBottom sx={{ mb: 5 }}>
                    Experience
                  </Typography>
                  <Paper variant="outlined" sx={{ p: 4, background: alpha(m3Theme.palette.background.paper, 0.7) }}>
                    <Box display="flex" alignItems="flex-start" mb={2}>
                      <Avatar sx={{ bgcolor: 'primary.main', color: 'onPrimary.main', mr: 2 }}>
                        <WorkIcon />
                      </Avatar>
                      <Box>
                        <Typography variant="h5">Chemical Engineering Intern</Typography>
                        <Typography variant="h6" color="primary.main">
                          Indian Oil Corporation Limited (IOCL), Mathura
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      Gained hands-on experience in petroleum refining operations. Worked on crude oil distillation, quality control, process optimization, and safety protocols.
                    </Typography>
                  </Paper>
                </motion.div>
              </Container>
            </Box>

            <Paper id="projects" elevation={0} sx={{ py: 10, background: 'transparent' }}>
              <Container maxWidth="lg">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                  <Typography variant="h3" align="center" gutterBottom sx={{ mb: 5 }}>
                    Projects
                  </Typography>
                  <Grid container spacing={4}>
                    {[
                      { title: 'SHA.CT.WS', subtitle: 'URL Shortener & Bio Links Platform', link: 'https://sha.ct.ws' },
                      { title: 'CodeWith', subtitle: 'JavaScript Notebook Platform', link: 'https://codewith.shashankag.co.in' },
                    ].map(proj => (
                      <Grid item xs={12} md={6} key={proj.title}>
                        <Paper variant="outlined" sx={{ p: 4, height: '100%', background: alpha(m3Theme.palette.background.paper, 0.7) }}>
                          <Typography variant="h5">{proj.title}</Typography>
                          <Typography variant="subtitle1" color="primary.main" gutterBottom>
                            {proj.subtitle}
                          </Typography>
                          <Button
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            endIcon={<LaunchIcon />}
                          >
                            Visit Project
                          </Button>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Container>
            </Paper>

            <Box id="contact" sx={{ py: 10, textAlign: 'center', background: 'transparent' }}>
              <Container maxWidth="md">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                  <Typography variant="h3" gutterBottom>
                    Get In Touch
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    I'm always interested in new opportunities, collaborations, and connecting with fellow engineers and developers. Feel free to reach out!
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                    <Button href="mailto:contact@shashankag.co.in" variant="contained" startIcon={<EmailIcon />} sx={{ color: 'onPrimary.main' }}>
                      Email Me
                    </Button>
                    <IconButton color="primary" href="https://linkedin.com/in/shashankagarwalme" target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton color="primary" href="https://github.com/shashankagarwalgit" target="_blank" rel="noopener noreferrer">
                      <GitHubIcon />
                    </IconButton>
                  </Box>
                </motion.div>
              </Container>
            </Box>
          </>
        ), [fadeIn, activeSection])}

        {trigger && (
          <Fab
            size="medium"
            aria-label="scroll back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default App;