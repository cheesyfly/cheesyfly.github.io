import './app.scss'

export function App() {
  const handleClickButton = () => {
    const id = Math.ceil(Math.random() * 1000) % 4;
    const sound = document.getElementById(`sound-${id}`) as HTMLAudioElement

    sound.play();
  }

  return (
    <div className="container">
      <div className="content">
        <img className="floating-logo" src="/cheesyfly.github.io/assets/images/cf_logo.png"/>
        <div className="in-construction">
          En construcción, regrese pronto....
        </div>

        <div className="button-container" onClick={handleClickButton}>
          <img class="c" src="/cheesyfly.github.io/assets/images/c.png" />
          <img class="f" src="/cheesyfly.github.io/assets/images/f.png" />
        </div>

        <audio id="sound-0" src="/cheesyfly.github.io/assets/sounds/0.mp3" preload="auto"></audio>
        <audio id="sound-1" src="/cheesyfly.github.io/assets/sounds/1.mp3" preload="auto"></audio>
        <audio id="sound-2" src="/cheesyfly.github.io/assets/sounds/2.mp3" preload="auto"></audio>
        <audio id="sound-3" src="/cheesyfly.github.io/assets/sounds/3.mp3" preload="auto"></audio>

      </div>
    </div>
  )
}
