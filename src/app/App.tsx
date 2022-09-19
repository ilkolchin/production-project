import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Смена темы</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouter />
    </div>
  );
};

export default App;
