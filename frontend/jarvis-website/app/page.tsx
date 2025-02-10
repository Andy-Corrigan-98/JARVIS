import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import BoltIcon from '@mui/icons-material/Bolt';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import theme from '../theme/theme';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import CallToAction from '../components/CTA';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50' }}>
        <Hero
          title="Welcome to JARVIS"
          subtitle="Your intelligent assistant for seamless development and productivity"
          primaryAction={{
            text: "Get Started",
            href: "/get-started"
          }}
          secondaryAction={{
            text: "Documentation",
            href: "/docs"
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
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </Box>
        </Box>

        <CallToAction
          title="Ready to Get Started?"
          description="Join thousands of developers who are already using JARVIS to enhance their workflow."
          action={{
            text: "Start Free Trial",
            href: "/signup"
          }}
        />
      </Box>
    </ThemeProvider>
  );
}

const features = [
  {
    title: "Smart Automation",
    description: "Automate repetitive tasks and streamline your development workflow with AI-powered assistance.",
    icon: <CodeIcon />,
  },
  {
    title: "Intelligent Insights",
    description: "Get real-time suggestions and insights to improve your code quality and productivity.",
    icon: <BoltIcon />,
  },
  {
    title: "Seamless Integration",
    description: "Easily integrate with your existing tools and workflows for a smooth development experience.",
    icon: <IntegrationInstructionsIcon />,
  },
];
