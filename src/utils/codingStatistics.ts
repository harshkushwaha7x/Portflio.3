export const generateGitHubStatsUrl = (darkMode: boolean): string => {
  const theme = darkMode ? "dark" : "default";
  const titleColor = darkMode ? "ffffff" : "1E40AF";
  const iconColor = darkMode ? "ffffff" : "1E40AF";
  const textColor = darkMode ? "ffffff" : "000000";
  
  return `https://github-readme-stats.vercel.app/api?username=harshkushwaha7x&show_icons=true&theme=${theme}&hide_border=true&title_color=${titleColor}&icon_color=${iconColor}&text_color=${textColor}`;
};

/**
 * Generates a LeetCode statistics card URL with theme support
 * @param darkMode - Whether dark mode is enabled
 * @returns URL for LeetCode stats card with heatmap
 */
export const generateLeetCodeUrl = (darkMode: boolean): string => {
  const theme = darkMode ? "dark" : "white";
  return `https://leetcard.jacoblin.cool/harsh_kushwaha_7x?theme=${theme}&ext=heatmap`;
};
