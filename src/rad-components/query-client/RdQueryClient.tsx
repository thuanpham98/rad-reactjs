import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const RdQueryClient: React.FunctionComponent<{
  children: React.ReactNode;
  queryClient: QueryClient;
}> = ({ children, queryClient }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
