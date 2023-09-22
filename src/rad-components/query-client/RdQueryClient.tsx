import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface RdQueryClientProps {
  children: React.ReactNode;
  queryClient: QueryClient;
}

export const RdQueryClient: React.FunctionComponent<RdQueryClientProps> = ({
  children,
  queryClient,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
