import { Signal } from "@preact/signals";
import { FunctionComponent } from "preact";
import { Pages } from "../types.ts";

type MenuProps = {
  page: Signal<Pages>;
};

const Menu: FunctionComponent<MenuProps> = ({ page }) => {
  return (
    <div
      className="menu"
      style={{
        whiteSpace: "nowrap",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        className={`${page.value === Pages.RPERFILES ? "selected" : ""}`}
        onClick={() => {
          page.value = Pages.RPERFILES;
        }}
        style={{ fontSize: "24px", fontWeight: "bold" }}
      >
        Maduritos a menos de 5km
      </div>
      <div
        className={`${page.value === Pages.RUSER ? "selected" : ""}`}
        onClick={() => {
          page.value = Pages.RUSER;
        }}
        style={{ marginLeft: "auto" }}
      >
        Log in{" "}
      </div>
    </div>
  );
};

export default Menu;
