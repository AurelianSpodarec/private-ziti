import authController from "./authController"

const helperAuth = {
  getController: function (controllerID: string) {
    return authController.find(item => item.id === controllerID)
  }
}

export default helperAuth
