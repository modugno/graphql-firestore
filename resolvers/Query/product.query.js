const { firestore } = require('../../firebase')

module.exports = {
  async products(_, args, ctx) {
    const snapshot = await firestore.collection('products').get()
    .catch(ctx.catchException)

    return snapshot.docs.map(item => ({
      id: item.id,
      ...item.data()
    }))
  },
  
  async product(_, { id }, ctx) {
    const snapshot = await firestore.doc(`products/${id}`).get()
    .catch(ctx.catchException)

    return {
      id: snapshot.id,
      ...snapshot.data()
    }
  }
}
