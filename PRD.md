# Job Training Platform PRD

A web application that displays professional training data in an interactive table format with expandable job details.

**Experience Qualities**: 
1. Professional - Clean, business-appropriate interface that conveys expertise and trustworthiness
2. Efficient - Quick access to information with minimal clicks and clear navigation paths  
3. Accessible - RTL language support with readable typography and intuitive interactions

**Complexity Level**: Light Application (multiple features with basic state)
- Displays tabular data with interactive expansion functionality and persistent state management

## Essential Features

**Interactive Job Table**
- Functionality: Display jobs in a clean table with clickable titles that expand to show detailed information
- Purpose: Allow users to quickly scan opportunities and dive deep into relevant details
- Trigger: User clicks on any job title in the table
- Progression: Table view → Click job title → Expanded detail panel → Close to return
- Success criteria: All job details display correctly with smooth expand/collapse animations

**Expandable Job Details** 
- Functionality: Show pitch, ChatGPT use cases, prompts, automation, and KPIs for each job
- Purpose: Provide comprehensive information to help users understand the training value
- Trigger: Job title click opens detail panel
- Progression: Closed state → Expand with animation → Show all detail sections → Close option
- Success criteria: All data fields render properly with clear section separation

**RTL Language Support**
- Functionality: Proper right-to-left text rendering and layout for Persian content
- Purpose: Ensure content is readable and culturally appropriate for Persian speakers
- Trigger: Application loads with RTL configuration active
- Progression: Auto-detection → RTL layout applied → All text properly aligned
- Success criteria: Text flows right-to-left with proper spacing and alignment

## Edge Case Handling
- **Empty Data**: Display message when no job data is available to load
- **Long Content**: Text truncation with "show more" for very long descriptions
- **Mobile Layout**: Responsive table that stacks properly on small screens
- **Loading States**: Skeleton loaders during data fetch operations

## Design Direction
The design should feel professional and trustworthy, similar to enterprise software interfaces with clean lines and purposeful spacing. Minimal interface approach better serves the core purpose of data presentation.

## Color Selection
Analogous color scheme using professional blues and grays to convey trust and expertise.

- **Primary Color**: Deep Blue (oklch(0.4 0.15 250)) - Communicates professionalism and trust
- **Secondary Colors**: Light Gray (oklch(0.95 0.01 250)) for backgrounds, Medium Gray (oklch(0.7 0.02 250)) for borders
- **Accent Color**: Bright Blue (oklch(0.6 0.2 250)) - Attention-grabbing highlight for interactive elements and CTAs
- **Foreground/Background Pairings**: 
  - Background White (oklch(1 0 0)): Dark Gray text (oklch(0.2 0 0)) - Ratio 12.6:1 ✓
  - Primary Blue (oklch(0.4 0.15 250)): White text (oklch(1 0 0)) - Ratio 8.2:1 ✓  
  - Accent Blue (oklch(0.6 0.2 250)): White text (oklch(1 0 0)) - Ratio 4.8:1 ✓

## Font Selection
Professional sans-serif typography that maintains readability in both English and Persian scripts, using system fonts for optimal performance.

- **Typographic Hierarchy**: 
  - H1 (Page Title): System Bold/32px/tight letter spacing
  - H2 (Job Titles): System Semibold/24px/normal spacing  
  - H3 (Section Headers): System Medium/18px/normal spacing
  - Body Text: System Regular/16px/1.5 line height
  - Small Text (Labels): System Regular/14px/1.4 line height

## Animations
Subtle and purposeful animations that enhance usability without drawing attention to themselves - smooth expand/collapse transitions and gentle hover states.

- **Purposeful Meaning**: Expand animations help users understand content relationships and maintain context
- **Hierarchy of Movement**: Job row expansion gets primary animation focus, secondary hover effects for interactive elements

## Component Selection
- **Components**: Table, Card, Collapsible, Button components from shadcn with custom styling for professional appearance
- **Customizations**: Custom table row expansion component, RTL-aware layout containers
- **States**: Hover effects on clickable rows, expanded/collapsed states with clear visual indicators, focus states for accessibility
- **Icon Selection**: ChevronDown/ChevronUp for expand indicators, relevant icons for each detail section
- **Spacing**: Consistent 16px padding for cards, 24px gaps between sections, 8px margins for inline elements
- **Mobile**: Table converts to stacked cards on mobile, expandable sections remain functional with touch-friendly targets