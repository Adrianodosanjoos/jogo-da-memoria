

import { Grid } from '../../../components/Card/Grid';
import { cards } from '../../../data/cards';
import './styles.css';


export function App() {
return <div className='app'>
    <Grid cards={cards}/>
  </div>

}

 