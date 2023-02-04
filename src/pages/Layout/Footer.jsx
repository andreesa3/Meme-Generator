import { Outlet } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <Outlet />

      <footer>
        <p>© 2023 | Creato da Andrea Saitta</p>
      </footer>
    </div>
  );
}
