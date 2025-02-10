import { Box, Typography, Button, Container } from '@mui/material';
import { alpha } from '@mui/material/styles';

interface CallToActionProps {
  readonly title: string;
  readonly description: string;
  readonly action: {
    readonly text: string;
    readonly href: string;
  };
}

export default function CallToAction({ title, description, action }: CallToActionProps) {
  return (
    <Box component="section" py={{ xs: 10, sm: 16 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            borderRadius: 4,
            background: (theme) => `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            p: { xs: 4, sm: 6 },
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Typography
            component="h2"
            variant="h3"
            fontWeight="bold"
            mb={2}
            sx={{ fontSize: { xs: '1.875rem', sm: '2.25rem' } }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            mb={4}
            sx={{
              color: (theme) => alpha(theme.palette.common.white, 0.8),
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            {description}
          </Typography>
          <Button
            href={action.href}
            variant="contained"
            size="large"
            sx={{
              borderRadius: '9999px',
              px: 6,
              py: 2,
              bgcolor: 'common.white',
              color: 'primary.main',
              '&:hover': {
                bgcolor: 'grey.100',
              },
            }}
          >
            {action.text}
          </Button>
        </Box>
      </Container>
    </Box>
  );
} 