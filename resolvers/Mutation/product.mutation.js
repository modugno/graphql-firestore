const { firestore } = require('../../firebase')

module.exports = {
  async addProduct(_, { data }, ctx) {
    const productRef = firestore.doc(`/products/${user.uid}`)
    
    const batch = firestore.batch()
    await productRef.set(data).catch(ctx.catchException)
    batch.commit()

    return { id: productRef.id }
  },

  async updateProduct(_, { id, data }, ctx) {
    const productRef = firestore.doc(`/products/${id}`)
    await productRef.update(data).catch(ctx.catchException)
    const snapshot = await productRef.get()

    return {
      id: snapshot.id,
      ...snapshot.data()
    }
  }
}
