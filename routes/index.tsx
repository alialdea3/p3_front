import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { tUsuario } from "../types.ts";
import RPerfiles from "../components/RPerfiles.tsx"
import RPerfil from "../components/RPerfil.tsx";

export const handler: Handlers<tUsuario[]> = {
  GET: async (_req, ctx) => {
    const url = "https://lovers.deno.dev/";
    try {
      const res = await fetch(url);
      const perfiles: tUsuario[] = await res.json();
      return ctx.render(perfiles);
    } catch (e) {
      console.error(e);
      return new Response(e.message, { status: 500 });
    }
  },
};

export default (props: PageProps<tUsuario[]>) => {
  const usuarios = props.data;
  const usuario= props.data[4]

  return (//<RPerfiles usuarios={usuarios} />
    <>
      
      <RPerfil usuario={usuario} />
    </>
  );
};
