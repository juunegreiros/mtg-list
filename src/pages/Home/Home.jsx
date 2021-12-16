import React from 'react';
import Card from '../../ui/Card/Card';

const Home = () =>  {
    const musics = [
        {
        title: 'Titulo',
        subtitle: 'subtitle'
        },
        {
        title: 'Titulo2',
        subtitle: 'subtitle2'
        },
    ]

    return (
        <section>
            <ul>
                {
                    musics.map((music) => (
                        <Card title={music.title} subtitle={music.subtitle}  url="/" />
                    ))
                }
            </ul>
        </section>
    )
}

export default Home;
