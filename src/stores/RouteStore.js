import { RouteStore } from 'fluxible-router';
import IndexRoute from '../routes/IndexRoute';

export default RouteStore.withStaticRoutes({
  index : IndexRoute
});
