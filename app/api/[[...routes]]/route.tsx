/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'


const app = new Frog({
  basePath: '/api',
  // hub: neynar({ apiKey: process.env.NEYMAR_API_KEY }),
  browserLocation: '/',
  imageOptions: {
    fonts: [
      {
        name: 'JetBrains Mono',
        source: 'google',
      },
    ],
  },
  title: 'NEW',
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  const { buttonValue } = c;

  const getImageUrl = () => {
    if (buttonValue === 'Arb') {
      return 'https://i.ibb.co/5jzQ5gc/Arb-Slide.png';
    } else if (buttonValue === 'Poly') {
      return 'https://i.ibb.co/FW0B9Cz/Polygon-Slide.png';
    } else if (buttonValue === 'Op') {
      return 'https://i.ibb.co/0rTyTHK/Op-Slide.png';
    }
    return null;
  };

  const imageUrl = getImageUrl();

  return c.res({
    image: (
      <div style={{ color: 'white', display: 'flex', fontSize: 60, flexDirection: 'column', alignItems: 'center' }}>
        {imageUrl ? (
          <img src={imageUrl} alt={`Selected: ${buttonValue}`} style={{ width: '100%', maxWidth: '100%' }} />
        ) : (
          `Selected: ${buttonValue}`
        )}
      </div>
    ),
    intents: [
      <Button value="Arb">Arbitrum</Button>,
      <Button value="Poly">Polygon</Button>,
      <Button value="Op">Optimism</Button>,
    ],
  });
});


/*Second Frame with Polygon Information
* Redirects to third Frame
*/


devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
