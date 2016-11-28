import Fluxible from 'fluxible';
import Application from './components/Application';
import ApplicationStore from './stores/ApplicationStore';
import MahjongStore from './stores/MahjongStore';
import RouteStore from './stores/RouteStore';

const app = new Fluxible({
  component : Application
});

app.registerStore(ApplicationStore);
app.registerStore(MahjongStore);
app.registerStore(RouteStore);

export default app;
