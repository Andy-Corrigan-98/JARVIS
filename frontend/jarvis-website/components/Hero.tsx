import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TypographyProps } from '@mui/material/Typography';

const GradientTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

interface HeroProps {
  readonly title: string;
  readonly subtitle: string;
  readonly primaryAction: {
    readonly text: string;
    readonly href: string;
  };
  readonly secondaryAction: {
    readonly text: string;
    readonly href: string;
  };
}

export default function Hero({ title, subtitle, primaryAction, secondaryAction }: HeroProps) {
  return (
    <Box component="section" py={{ xs: 10, sm: 16 }}>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" gap={4}>
          <GradientTypography
            component="h1"
            variant="h2"
            fontWeight="bold"
            sx={{ fontSize: { xs: '2.5rem', sm: '3.75rem' } }}
          >
            {title}
          </GradientTypography>
          <Typography
            variant="h5"
            color="text.secondary"
            maxWidth="42rem"
            sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
          >
            {subtitle}
          </Typography>
          <Box display="flex" gap={2} mt={2}>
            <Button
              href={primaryAction.href}
              variant="contained"
              size="large"
              sx={{ borderRadius: '9999px', px: 4 }}
            >
              {primaryAction.text}
            </Button>
            <Button
              href={secondaryAction.href}
              variant="outlined"
              size="large"
              sx={{ borderRadius: '9999px', px: 4 }}
            >
              {secondaryAction.text}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 