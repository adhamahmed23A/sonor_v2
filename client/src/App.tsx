import AppRouter from "./AppRouter";
import { ThemeProvider } from "./providers/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
