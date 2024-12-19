const { buildUrl } = require('@evershop/evershop/src/lib/router/buildUrl');
const {
  setContextValue
} = require('@evershop/evershop/src/modules/graphql/services/contextHelper');
const { getSetting } = require('@evershop/evershop/src/modules/setting/services/setting');

module.exports = async (request, response, delegate, next) => {

  if (!request.isCustomerLoggedIn()) {
    // Redirect to admin dashboard
    response.redirect(buildUrl('login'));
  } else {
    setContextValue(request, 'pageInfo', {
      title: await getSetting('storeName', 'EverShop'),
      description: await getSetting(
        'storeDescription',
        'An e-commerce platform with Node and Postgres'
      ),
      url: buildUrl('tickets')
    });

    next();
  }
};
