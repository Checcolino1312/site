import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checcolinato",
  description: "SEI STATO CHECCOLINATO",
};

export default function ScamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
