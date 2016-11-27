import Fluxible from 'fluxible';
import Application from './components/Application';
import ApplicationStore from './stores/ApplicationStore';

const app = new Fluxible({
  component : Application
});

app.registerStore(ApplicationStore);

export default app;
