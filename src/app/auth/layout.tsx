import AuthLayout from '@/components/ui/AuthLayout';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
} 