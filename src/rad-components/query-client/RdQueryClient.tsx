import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const RdQueryClient: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
