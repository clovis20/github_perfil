import styles from './Perfil.module.css'


/* export default function() { */

const Perfil = ({ nomeUsuario }) => {
    
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}/>
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}


/* const Perfil = (props) => {
    const usuario = {
        nome: 'Clovis Jr',
        avatar: 'https://github.com/clovis20.png'
    }

    return (
        <div>
            {JSON.stringify(props)}
            <img className='perfil-avatar' src={usuario.avatar}/>
            <h3 className='perfil-titulo'>{usuario.nome}</h3>
        </div>
    )
} */

export default Perfil;