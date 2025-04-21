import './index.scss'

interface Item {
  redirectTo: string,
  hoverText?: string
}

interface ListProps {
  type: string,
  items: Item[]
}

function List ({ type, items }: ListProps) {
  const title = type === 'songs' ? "canciones" : "albums"
  const thumbImage = (idx: number) => `/assets/images/${type}/${idx}.png`;
  
  return <div className="list-thumbs">
    <h3 className="list-title"> {title} </h3>

    <div className="list">
      { items.map((item, idx) => (
          <a className="list-item" href={item.redirectTo} target='_blank'>
            <img src={thumbImage(idx)}/>
          </a>
        )) 
      }
    </div>
  </div>
}

export default function MusicList() {
  const albums = [
    { 
      redirectTo: 'https://www.youtube.com/watch?v=wC-BHI1_S8Y'
    },
    { 
      redirectTo: 'https://www.youtube.com/watch?v=DXE6A07Zj64&list=PL5FgXlnpwUblrylylNxMlC-8QXD3Zyc2M'
    }
  ]

  const songs = [
    { 
      redirectTo: 'https://www.youtube.com/watch?v=YiPGprDrXiI',
      hover: 'Special And Fast Delivery'
    },
    { 
      redirectTo: 'https://www.youtube.com/watch?v=vXqCDDt5oVE',
      hover: 'R.A.I.N'
    },
    { 
      redirectTo: 'https://www.youtube.com/watch?v=iJLYUffuJYQ',
      hover: 'Trojan_M32'
    },
    { 
      redirectTo: 'https://www.youtube.com/watch?v=qTM9FSFMoAQ',
      hover: 'Morning Mate'
    },
    { 
      redirectTo: 'https://www.youtube.com/watch?v=pdXZoWo7rNI',
      hover: 'Urban View'
    },
    { 
      redirectTo: 'https://www.youtube.com/watch?v=inZRR75ckB8',
      hover: 'Those Times'
    },
    { 
      redirectTo: 'https://www.youtube.com/watch?v=HovF35NR2j0',
      hover: 'Crisis Beach City'
    },
    { 
      redirectTo: 'https://www.youtube.com/watch?v=xrdIhRuo1iE',
      hover: 'Outside'
    }
  ]

    return <div id="music-list">
      <List type='albums' items={albums} />
      <List type='songs' items={songs} />
    </div>
  }