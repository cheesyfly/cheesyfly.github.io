import useOnScreen from '../../hooks/useOnScreen';
import './index.scss'

interface FeaturingItemProps {
  featuring: {
    name: string,
    redirectTo: string,
    description: string,
  },
  idx: number
}

const FeaturingItem = ({ featuring, idx }: FeaturingItemProps) => {
  const [ref, isVisible] = useOnScreen<HTMLAnchorElement>(0.3);

  return (
    <a
      ref={ref}
      href={featuring.redirectTo}
      target="_blank"
      rel="noopener noreferrer"
      className={`feat ${isVisible ? 'visible' : ''}`}
    >
      <h3>{featuring.name}</h3>
      <img src={`/assets/images/featurings/${idx}.png`} />
      <p>{featuring.description}</p>
    </a>
  );
};

export default function Featurings() {
  const featurings = [
    {
      name: "Electromonic",
      redirectTo: "https://gx.games/es/games/jhexjh/electromonic/",
      description: "Musica y efectos especiales"
    },
    {
      name: "Fairies vs Ducks",
      redirectTo: "https://mixspoon.itch.io/fairies-vs-ducks",
      description: "Musica y efectos especiales"
    },
  ]

    return <div id="featurings">
      <h2>
        Participaciones
      </h2>

      {
        featurings.map((feat, idx) => (<FeaturingItem featuring={feat} idx={idx} key={idx} />))
      }
    </div>;
  }