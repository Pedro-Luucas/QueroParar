import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

// Define color palette
const palette = {
  primary: '#2160BF',  // Blue from the avatar in profile
  secondary: '#757575', // Gray from the settings button
  success: '#2e7d32',   // Green from the savings value
  background: {
    light: '#f5f5f5',   // Light background from dashboard
    dark: '#0E0E0E',    // Dark background from profile
  },
  text: {
    light: '#000000',
    dark: '#FFFFFF',
  },
  card: {
    light: '#FFFFFF',
    dark: '#1E1E1E',
  },
  border: {
    light: '#E0E0E0',
    dark: '#333333',
  },
};

// Define spacing units
const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

// Define typography
const typography = {
  fontSizes: {
    small: 12,
    medium: 16,
    large: 20,
    xlarge: 24,
    xxlarge: 32,
  },
  fontWeights: {
    normal: 'normal' as const,
    bold: 'bold' as const,
  },
};

// Define reusable component styles
const components = {
  container: {
    flex: 1,
  },
  card: {
    margin: spacing.md,
    marginTop: spacing.sm,
    borderRadius: 12,
  },
  cardHeader: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginBottom: spacing.md,
  },
  cardTitle: {
    marginLeft: spacing.sm,
    fontWeight: typography.fontWeights.bold,
  },
  button: {
    marginBottom: spacing.md,
    borderRadius: 8,
    paddingVertical: 6,
  },
  header: {
    alignItems: 'center' as const,
    padding: spacing.lg,
    paddingBottom: spacing.md,
  },
  inputContainer: {
    marginBottom: spacing.md,
  },
  label: {
    marginBottom: spacing.sm,
  },
  input: {
    backgroundColor: palette.card.light,
  },
};

// Create theme object with light and dark variants
const theme = {
  colors: {
    ...palette,
    // Add theme-specific colors
    light: {
      ...Colors.light,
      background: palette.background.light,
      text: palette.text.light,
      card: palette.card.light,
      border: palette.border.light,
    },
    dark: {
      ...Colors.dark,
      background: palette.background.dark,
      text: palette.text.dark,
      card: palette.card.dark,
      border: palette.border.dark,
    },
  },
  spacing,
  typography,
  components,
};

// Create global styles
const globalStyles = StyleSheet.create({
  // Layout styles
  container: {
    ...components.container,
    backgroundColor: palette.background.dark, // Set dark background for all pages
  },
  onboardingContainer: {
    ...components.container,
    backgroundColor: '#0E0E0E',
    paddingHorizontal: spacing.lg,
  },
  contentContainer: {
    padding: spacing.md,
  },
  row: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
  },
  column: {
    flexDirection: 'column' as const,
  },
  center: {
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  },
  spaceBetween: {
    justifyContent: 'space-between' as const,
  },
  
  // Card styles
  card: {
    ...components.card,
  },
  cardHeader: {
    ...components.cardHeader,
  },
  cardTitle: {
    ...components.cardTitle,
  },
  
  // Text styles
  title: {
    fontSize: typography.fontSizes.xlarge,
    fontWeight: typography.fontWeights.bold,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSizes.large,
    marginBottom: spacing.lg,
    opacity: 0.7,
  },
  bodyText: {
    fontSize: typography.fontSizes.medium,
  },
  smallText: {
    fontSize: typography.fontSizes.small,
  },
  
  // Form styles
  form: {
    gap: spacing.lg,
  },
  inputContainer: {
    ...components.inputContainer,
  },
  label: {
    ...components.label,
  },
  input: {
    ...components.input,
  },
  
  // Button styles
  button: {
    ...components.button,
  },
  buttonContainer: {
    padding: spacing.md,
    paddingBottom: spacing.xxl,
  },
  
  // Header styles
  header: {
    ...components.header,
  },
  
  // Avatar styles
  avatar: {
    marginBottom: spacing.md,
    backgroundColor: palette.primary,
  },
  
  // Utility styles
  mt1: { marginTop: spacing.xs },
  mt2: { marginTop: spacing.sm },
  mt3: { marginTop: spacing.md },
  mt4: { marginTop: spacing.lg },
  mb1: { marginBottom: spacing.xs },
  mb2: { marginBottom: spacing.sm },
  mb3: { marginBottom: spacing.md },
  mb4: { marginBottom: spacing.lg },
  ml1: { marginLeft: spacing.xs },
  ml2: { marginLeft: spacing.sm },
  ml3: { marginLeft: spacing.md },
  ml4: { marginLeft: spacing.lg },
  mr1: { marginRight: spacing.xs },
  mr2: { marginRight: spacing.sm },
  mr3: { marginRight: spacing.md },
  mr4: { marginRight: spacing.lg },
  p1: { padding: spacing.xs },
  p2: { padding: spacing.sm },
  p3: { padding: spacing.md },
  p4: { padding: spacing.lg },
});

export { theme, globalStyles };