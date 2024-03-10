import { Avatar } from './Avatar'
import { Comment } from './Coment'
import {useState, ChangeEvent, FormEvent, InvalidEvent} from 'react'
import styles from './Post.module.css'
import {format, formatDistanceToNow} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'



interface Author {
    name: string;
    role: string;
    avatarUrl: string;
};

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author ;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

export function Post ({post}: PostProps) {
    const [comments, setComments] = useState([
        "Post muito bacana!!",])
    
    const [newCommentText, setNewCommentText] = useState('')

    const publishdDateFormated = format(post.publishedAt, "d, 'de' LLLL 'às' HH:mm'h'", ptBr) 

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBr,
        addSuffix: true,
    })

    function handleCreateNewComment(e: FormEvent) {
        e.preventDefault()

        
        setComments([...comments, newCommentText])
        setNewCommentText('')

    }

    function handleNewCommentText (e: ChangeEvent<HTMLTextAreaElement>) {
        e.preventDefault()
        e.target.setCustomValidity('')
        setNewCommentText(e.target.value)
    }

    function deleteComment (commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentInvalid (e: InvalidEvent<HTMLTextAreaElement>) {
        e.target.setCustomValidity('Esse campo é obrigatório!')
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  
                        src={post.author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>
                            {post.author.name}
                        </strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishdDateFormated} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>

            </header>
            <div className={styles.content}>
                {post.content.map(line => {
                    return (line.type == 'paragraph' ? <p key={line.content}>{line.content}</p> : <p key={line.content}><a href="">{line.content}</a></p>)
                })}
                
            </div>
            <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>Deixe seu comentário</strong>

                <textarea 
                    name='comment'
                    placeholder='Deixe um comentário' 
                    onChange={handleNewCommentText}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />                
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty} >Publicar</button>

                </footer>
            </form>

            <div className={styles.commentList}>
               {comments.map(comment => {
               
                return <Comment 
                            content={comment} 
                            key={comment}
                            onDeleteComment={deleteComment}
                        />
               })}

            </div>


        </article>
    )
}