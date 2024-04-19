import { useSignal } from "@preact/signals";
import Menu from "../components/Menu.tsx";
import { Pages, tUsuario } from "../types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import RPerfiles from "../components/RPerfiles.tsx";
import { Signal } from "@preact/signals";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import RPerfil from "../components/RPerfil.tsx";

type props = {
  usuarios: Signal<tUsuario[]>;
  usuario: Signal<tUsuario>;
};

const IApp: FunctionComponent<props> = ({ usuarios, usuario }) => {
  const page = useSignal<Pages>(Pages.RPERFILES);
  //const usuarios = useSignal<tUsuario[]>([]);
  return (
    <>
      <Menu page={page} />
      {IS_BROWSER && page.value === Pages.RPERFILES && (
        <RPerfiles usuarios={usuarios} />
      )}
      {IS_BROWSER && page.value === Pages.RUSER && (
        <RPerfil
          usuario={usuario}
        />
      )}
    </>
  );
};

export default IApp;
