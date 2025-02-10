'use client';

import { Box } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import SupportIcon from '@mui/icons-material/Support';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50' }}>
      <Hero
        title="JARVIS"
        subtitle="Your personal AI assistant, designed to enhance daily life through accessibility and inclusion"
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
  );
}

const features = [
  {
    title: "Accessible for Everyone",
    description: "Designed to enhance independence and quality of life for people with various needs, making technology more accessible and inclusive.",
    icon: <AccessibilityNewIcon />,
  },
  {
    title: "Personal Growth",
    description: "A supportive companion for your daily life, helping you achieve your goals while maintaining your autonomy and authenticity.",
    icon: <AutoAwesomeIcon />,
  },
  {
    title: "Community-Driven",
    description: "Built with and for the community, ensuring privacy, security, and continuous improvement based on real user needs.",
    icon: <SupportIcon />,
  },
];
