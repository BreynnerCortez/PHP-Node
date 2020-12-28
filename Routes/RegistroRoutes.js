const express = require('express')
const router = express.Router();
const controller = require('../Controllers/RegistroController');

router.route('/registro').post(controller.Registrar)
router.route('/usuarios').get(controller.Usuarios)
router.route('/usuarios/:id').get(controller.Usuario)
router.route('/usuarios/:id/:numero').put(controller.UpdateUsuario)
router.route('/usuarios/:id').delete(controller.DeleteUsuario)

module.exports = router;