import loading from './loading.svg'
import s from './Loader.module.css'



export const Loader = () => {
    return (
        <div className={s.loader}>
            <img src={loading}/>
        </div>
        )
}