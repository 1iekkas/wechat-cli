import { $api } from '../utils/http'
module.exports = {
  getSwipeList(params) {
    return $api.get('/c/banner/2',{
      ...params
    })
  },

}