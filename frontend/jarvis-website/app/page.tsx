import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import BuildIcon from '@mui/icons-material/Build';
import theme from '../theme/theme';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50' }}>
        <Hero
          title="JARVIS"
          subtitle="An intelligent assistant focused on accessible and inclusive development"
          primaryAction={{
            text: "Documentation",
            href: "/docs"
          }}
          secondaryAction={{
            text: "GitHub",
            href: "https://github.com/Andy-Corrigan-98/JARVIS"
          }}
        />

        <Box component="section" sx={{ py: { xs: 10, sm: 16 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
              maxWidth: 'lg',
              mx: 'auto',
              px: 4,
            }}
          >
            {features.map((feature) => (
              <FeatureCard
                key={feature.title.toLowerCase().replace(/\s+/g, '-')}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const features = [
  {
    title: "Project Vision",
    description: "Building an intelligent development assistant that emphasizes accessibility and inclusion in the software development process.",
    icon: <AutoAwesomeIcon />,
  },
  {
    title: "Core Principles",
    description: "Focused on creating an accessible, inclusive, and efficient development environment that benefits all developers.",
    icon: <AccessibilityNewIcon />,
  },
  {
    title: "Development Philosophy",
    description: "Iterative development with a strong emphasis on community feedback and continuous improvement.",
    icon: <BuildIcon />,
  },
];
