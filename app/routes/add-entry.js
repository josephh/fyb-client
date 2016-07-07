// app/routes/add-entry.js
import Ember from 'ember';
import { request } from 'ic-ajax';

export default Ember.Route.extend({

  water: Ember.inject.service(),
  model() {
    let newEntry = this.store.createRecord('entry', {id: 1});
    newEntry.set('location', this.store.createFragment('location',
      {water: this.get('water').get('waterOptions.firstObject.value'), names: ''}
    )
  );
    return newEntry;
  },

  loadPhoto(url) {
    const {resolve, reject, promise} = RSVP.defer();
    const img = new Image();
    img.src = url;
    img.onload = () => { resolve(img); };
    img.onerror = reject;

    return promise;
  },

  actions: {
    uploadPhoto: function(file) {
      var image = this.store.createRecord('image', {
        name: get(file, 'name'),
        uploadedAt: new Date()
      });

      file.read().then((url) => {
        return this.loadPhoto(url);
      }).then(function(img) {
        set(image, 'width', img.width);
        set(image, 'height', img.height);
      });

      // request('/api/images/s3_direct', {
      //   data: {
      //     filename: get(file, 'name')
      //   }
      // }).then(function (s3Direct) {
      //   return file.upload(s3Direct.url, {
      //     data: s3Direct.credentials
      //   });
      // }).then(function (result) {
      //   set(image, 'url', result.headers.Location);
      //   image.save();
      // });
    }
  },

});