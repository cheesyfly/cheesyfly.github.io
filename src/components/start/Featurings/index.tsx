import './index.scss'

interface FeaturingItemProps {
  featuring: {
    name: string,
    redirectTo: string,
    description: string,
  },
  idx: number
}

const FeaturingItem = ({ featuring: { name, redirectTo, description }, idx}: FeaturingItemProps) => {
  return <a className="feat" href={redirectTo} target='_blank'>
    <h3>{name}</h3>
    <img src={`/assets/images/featurings/${idx}.png`} />
    <p>{description}</p>
  </a>
}

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
        featurings.map((feat, idx) => (<FeaturingItem featuring={feat} idx={idx} />))
      }
    </div>;
  }