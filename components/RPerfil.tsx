import { tComentario, tUsuario } from "../types.ts";
import { FunctionComponent } from "preact";

type props = {
    usuario: tUsuario;
};

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const RPerfil: FunctionComponent<Props> = ({ usuario }) => {
    return (
        <div className="usuario-box" style={{ 
            border: '1px solid #ccc', 
            borderRadius: '8px', 
            padding: '10px', 
            display: 'flex', /* Utilizamos flexbox para centrar el contenido */
            flexDirection: 'column', /* Alinea el contenido verticalmente */
            alignItems: 'center', /* Centra el contenido horizontalmente */
        }}>
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{usuario.name}</h2>
                <p><strong>Edad:</strong> {usuario.age}</p>
                <p><strong>Sexo:</strong> {usuario.sex}</p>
                <p><strong>Descripción:</strong> {usuario.description}</p>
                <ul>
                    <p><strong>Hobbies:</strong> {usuario.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}</p>
                </ul>
            </div>
            <img src={usuario.photo} alt={usuario.name} style={{ maxWidth: '200px', marginBottom: '10px' }} />
            
            <p>Sección de comentarios:</p>
            {usuario.comments && usuario.comments.length > 0 && (
                <div className="comentarios">
                    {Array.isArray(usuario.comments) &&
                        usuario.comments.map((comentario, index) => (
                            <div className="comentario" key={index}>
                                <p>
                                    <em style={{ color: getRandomColor() }}>{comentario.user}:</em> 
                                    <span style={{ color: 'black' }}> {comentario.message}</span>
                                </p>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default RPerfil;



