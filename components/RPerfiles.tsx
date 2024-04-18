import { tUsuario } from "../types.ts";
import { FunctionComponent } from "preact";

type props = {
  usuarios: tUsuario[];
};

const RPerfiles: FunctionComponent<props> = ({ usuarios }) => {
    return (
    <div className="lista-usuarios" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {usuarios.map((usuario, index) => (
            <div 
                className="usuario-box" 
                key={usuario._id} 
                style={{ 
                    flex: '0 0 calc(33.33% - 20px)', 
                    margin: '0 10px 20px 0', 
                    border: '1px solid #ccc', 
                    borderRadius: '8px', 
                    padding: '10px', 
                    display: 'flex', /* Utilizamos flexbox para centrar el contenido */
                    flexDirection: 'column', /* Alinea el contenido verticalmente */
                    alignItems: 'center', /* Centra el contenido horizontalmente */
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{usuario.name}</h2>
                    <p><strong>Edad:</strong> {usuario.age}</p>
                    <p><strong>Sexo:</strong> {usuario.sex}</p>
                    <p><strong>Descripción:</strong> {usuario.description}</p>
                    <ul>
                        <p><strong>Hobbies:</strong>{usuario.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}</p>
                    </ul>
                </div>
                <img src={usuario.photo} alt={usuario.name} style={{ maxWidth: '200px' }} />
            </div>
        ))}
    </div>
  );
};

export default RPerfiles;

/*Debajo de img src
{usuario.comments && usuario.comments.length > 0 && (
                <div className="comentarios">
                {Array.isArray(usuario.comments) &&
                    usuario.comments.map((comentario, index) => (
                    <div className="comentario" key={index}>
                        <p>Usuario: {comentario.user}</p>
                        <p>Mensaje: {comentario.message}</p>
                    </div>
                    ))}
                </div>
            )}
*/

