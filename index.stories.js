import React from 'react';

import { storiesOf } from '@storybook/react';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

import Pltbtn from './Pltbtn';
import PltbtnDis from './PltbtnDis';

import Pltlink from './Pltlink';

import Pltloading from './Pltloading';

import PltStepFlow from './PltStepFlow';

fontawesome.library.add(brands, faCoffee)

storiesOf('Pltbtn', module)
    .add('btnPlt', () => <Pltbtn text="hello"  btnPlt="btnPlt" icon={<FontAwesomeIcon icon="coffee" />} />  )
         
    .add('btnPltDis', () => <PltbtnDis  text="hello"  btnPltDis="btnPltDis" icon={<FontAwesomeIcon icon="coffee" />} iconRight/>  )
         ;
