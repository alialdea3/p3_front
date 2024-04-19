export type tUsuario = {
  _id: string;
  name: string;
  age: number;
  sex: string;
  description: string;
  hobbies: string[];
  photo: string;
  comments: tComentario[];
};

export type tComentario = {
  user: string;
  message: string;
};

export enum Pages {
  RPERFILES = "rperfiles",
  RUSER = "ruser",
}
