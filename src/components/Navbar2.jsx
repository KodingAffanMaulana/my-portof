import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import ExperiencePage from './Routes/Experience';
import ProjectPage from './Routes/Project';
import AboutPage from './Routes/About';
import EducationPage from './Routes/Education';
import HomePage from './Routes/Home';
import CertificatePage from './Routes/Certificate';

const navigation = [
    { name: 'Affan Maulana', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Experience', href: '/experience', current: false },
    { name: 'Education', href: '/education', current: false },
    { name: 'Projects', href: '/project', current: false },
    { name: 'Certificate', href: '/certificate', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar2() {
    return (
        <Router>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-gray-800">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'px-3 py-2 rounded-md text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/experience" component={ExperiencePage} />
            <Route path="/education" component={EducationPage} />
            <Route path="/project" component={ProjectPage} />
            <Route path="/certificate" component={CertificatePage} />
        </Router>
    )
}

export default Navbar2;