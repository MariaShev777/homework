import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Layout } from './layout/Layout'
import Pages from './Pages'

/*
<<<<<<< HEAD
     * 1 - в файле Pages.tsx дописать роуты на все страницы +
     * 2 - в файле Sidebar.tsx дописать className так чтоб вешался класс s.active когда мы уже на соответствующей странице ++
=======
* 1 - в файле Pages.tsx дописать роуты на все страницы
* 2 - в файле Sidebar.tsx дописать className так чтоб вешался класс s.active когда мы уже на соответствующей странице
>>>>>>> refs/remotes/origin/main
* 3 - застилизовать хэдэр и сайдбар в соответствии с дизайном
* */

function HW5() {
    return (
        <HashRouter>
            {/*в gh-pages лучше работает HashRouter, с BrowserRouter скорее всего не пройдёт тест*/}
            <Layout>
                <Pages />
<<<<<<< HEAD

=======
>>>>>>> refs/remotes/origin/main
            </Layout>
        </HashRouter>
    )
}

export default HW5
