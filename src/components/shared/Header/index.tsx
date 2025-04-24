import React from 'react';

import './index.scss';

interface HeaderItemProps {
    item: {
        type: string,
        text?: string,
        src?: string,
        redirectTo: string
    }
}

function HeaderItem({ item }: HeaderItemProps) {
    if (item.type == 'text')
        return <a className='header-item' href={item.redirectTo}>
            {item.text}
        </a>

    return <a className='header-item img' href={item.redirectTo}>
            <img src={item.src} />
        </a>
}

export default function Header() {
    const headerItems = [
        { type: 'text', text: 'inicio', redirectTo: '/' },
        { type: 'text', text: 'tienda', redirectTo: '/shop' },
        { type: 'text', text: 'proyectos', redirectTo: '/projects' }
    ]
    return <div id="header">
        <div className="header-background">
            <HeaderItem item={{ type: 'img', src: '/assets/images/cf_logo.png', redirectTo: '/' }} />

            {headerItems.map((item, idx) => (
                <HeaderItem item={item} key={idx} />
            ))}
        </div>

        <div className="header-background-mobile">
            <div className="header-items-container">
                {headerItems.map((item, idx) => (
                    <HeaderItem item={item} key={idx} />
                ))}
            </div>
        </div>
    </div>;
}