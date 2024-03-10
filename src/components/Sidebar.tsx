import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Sidebar() {
    return (
    <asside className={styles.sidebar}>
        <img className={styles.cover}
            src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' 
        />
        
        <div className={styles.profile}>
            <Avatar 
                 
                src='https://media.licdn.com/dms/image/C4D03AQEILot3OHU8hw/profile-displayphoto-shrink_100_100/0/1648603447024?e=1700697600&v=beta&t=PNDFIMqELednJx-POBzVYfeubQ1PqI6eG86oBG1ahhE'
            />

            <strong>Lucas Moraes</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href='#'>
                <PencilLine size={20} />
               Editar seu perfil 
            </a>
        </footer>

    </asside>)
}