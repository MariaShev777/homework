import React, {ChangeEvent, useEffect} from "react"
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId} from "./bll/themeReducer"
import {AppStoreType} from "../hw10/bll/store";

/*
       * 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
       * 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
       * 4 - передать пропсы в SuperSelect
* */

type ThemesType = {
    id: number
    value: string
}


const themes:ThemesType[] = [
    {id: 1, value: 'Light'},
    {id: 2, value: 'Blue'},
    {id: 3, value: 'Dark'},
]

const HW12 = () => {
    // взять ид темы из редакса
    let themeId = useSelector<AppStoreType, number>(state => state.theme.themeId)


    const dispatch = useDispatch()

    const change = (id: number) => { // дописать функцию
        dispatch(changeThemeId(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework №12
            </div>

            <div className={s2.hw}>
                <div style={{paddingBottom:'7px'}}>Выберите тему</div>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    // сделать переключение тем
                    onChangeOption={change}
                    options={themes}
                />
            </div>
        </div>
    )
}

export default HW12
