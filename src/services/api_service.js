angular
  .module('FB')
  .service('FB_Api', Api);

Api.$inject = ['$q'];

function Api($q) {
  var vm = this;

  vm.get = get;
  vm.post = post;
  vm.put = put;
  vm.delete = delete;

  function get(parameters) {
    return api({
      path: parameters.path,
      method: 'GET',
      params: parameters.params
    });
  }

  function post(parameters) {
    return api({
      path: parameters.path,
      method: 'POST',
      params: parameters.params
    });
  }

  function put(parameters) {
    return api({
      path: parameters.path,
      method: 'PUT',
      params: parameters.params
    });
  }

  function delete(parameters) {
    return api({
      path: parameters.path,
      method: 'DELETE',
      params: parameters.params
    });
  }

  function api(parameters) {
    var data = {},
        deferred = $q.defer();

    FB.api(parameters.path, parameters.method, parameters.params, function(response) {
      data = response;

      if(response.hasOwnProperty('error')) {
        data.status = 'error';

        deferred.reject(data);
      } else {
        data.status = 'success';

        deferred.resolve(data);
      }
    });

    return deferred.promise;
  };
};