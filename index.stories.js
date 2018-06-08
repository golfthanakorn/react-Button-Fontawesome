import { storiesOf } from '@storybook/react';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

import PltButtonNormalIcon from './PltButtonNormalIcon';
import PltButtonHoverIcon from './PltButtonHoverIcon';
import PltButtonActiveIcon from './PltButtonActiveIcon';
import PltButtonFocusIcon from './PltButtonFocusIcon';
import PltButtonDisIcon from './PltButtonDisIcon';

fontawesome.library.add(brands, faCoffee)

storiesOf('PltButtonIcon', module)
    .add('btnPltNormIcon', () => <PltButtonNormalIcon text="hello"  btnPlt="btnPlt" icon={<FontAwesomeIcon icon="coffee" />} />  )

    .add('btnPltHoverIcon', () => <PltButtonHoverIcon text="hello"  btnPltHover="btnPltHover" icon={<FontAwesomeIcon icon="coffee" />} /> )
 
    .add('btnPltActiveIcon', () => <PltButtonActiveIcon text="hello"  btnPltActive="btnPltActive" icon={<FontAwesomeIcon icon="coffee" />} /> )

    .add('btnPltFocusIcon', () => <PltButtonFocusIcon text="hello"  btnPltFocus="btnPltFocus"  icon={<FontAwesomeIcon icon="coffee" />} /> )

   .add('btnPltDisIcon', () => <PltButtonDisIcon text="hello"  btnPltDis="btnPltDis"  icon={<FontAwesomeIcon icon="coffee" />}/> )


;
