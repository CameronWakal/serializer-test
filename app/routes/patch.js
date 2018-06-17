import Route from '@ember/routing/route';

export default Route.extend({

  afterModel(patch) {
    return patch.get('modules');
  }

});
