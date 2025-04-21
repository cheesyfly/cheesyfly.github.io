import './index.scss';

export default function Villamesta() {
    return <div id="project-villamesta">
      <img src="/assets/images/projects/villamesta/logo.png" />

      <div className="characters">
        <img src="/assets/images/projects/villamesta/char1.png" className='char1'/>
        <img src="/assets/images/projects/villamesta/char2.png" className='char2'/>
        <img src="/assets/images/projects/villamesta/char3.png" className='char3'/>
      </div>

      <div className='characters'>
        <span className='char1'>Fresita</span>
        <span className='char2'>Juanito</span>
        <span className='char3'>Pedro</span>
      </div>

      <p className="description centered">
        En esta historia, nada es lo que parece... Juanito, Fresita y 
        Pedro son ayudantes en un tianguis mágico donde lo normal
        es que nada sea normal, su vida ya es bastante rara. Pero
        cuando un misterioso señor les ofrece abrir una taquería, las
        cosas se ponen realmente extrañas.
        Cada día enfrentan desafíos más absurdos, como por ejemplo,
        clientes que parecen venir de otras épocas (o dimensiones),
        Pero lo peor de todo es que Juanito escode un secreto... unoo
        tan raro y estúpido que, cuando salga a la luz, podría 
        cambiarlo todo.
      </p>

      <p className='description'>
        Una serie de animacion original del Cheesyfly
      </p>

      <p className='description italic'>
        "Aun no se tiene una fecha de estreno"
      </p>
    </div>;
  }