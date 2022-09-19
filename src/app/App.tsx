import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { classNames } from "shared/lib/classNames";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
