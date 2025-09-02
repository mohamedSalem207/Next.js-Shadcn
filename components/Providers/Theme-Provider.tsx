"use client";
import { ThemeProvider as NextThemesProviders } from "next-themes";

export default function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProviders>) {
  return <NextThemesProviders {...props}>{children}</NextThemesProviders>;
}
