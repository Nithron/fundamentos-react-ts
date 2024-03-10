import { ThumbsUp, Trash } from "phosphor-react"
import styles from './Comment.module.css'
import { Avatar } from "./Avatar"
import { useState } from "react"

interface ComentProps {
    content: string;
    onDeleteComment: (comment: string) => void
}

export function Comment(props: ComentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment () {
        props.onDeleteComment(props.content)
    }

    function handleLikeComment () {
        setLikeCount(likeCount+1);
    }


    return <div className={styles.comment}> 
        <Avatar hasBorder={false} src='https://media.licdn.com/dms/image/C4D03AQEILot3OHU8hw/profile-displayphoto-shrink_100_100/0/1648603447024?e=1700697600&v=beta&t=PNDFIMqELednJx-POBzVYfeubQ1PqI6eG86oBG1ahhE' alt='' />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Diego Fernandes</strong>
                        <time title="21 de setembro às 08:15h" dateTime="2023-09-21 08:15:30">
                            Cerca de 1h atras
                        </time>
                        
                    </div>
                    <button 
                        onClick={handleDeleteComment}
                        title='Deletar comentário'>
                        <Trash size={20}/>
                    </button>
                </header>
                <p>{props.content}</p>
            </div>

            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
}