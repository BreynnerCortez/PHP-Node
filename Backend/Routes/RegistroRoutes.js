const express = require('express')
const router = express.Router();
const controller = require('../Controllers/RegistroController');

router.route('/usuarios/:id/:clave').get(controller.Usuario)
router.route('/usuarios/:id').post(controller.UpdateUsuario)
router.route('/getgrados').get(controller.GetGradosUsuario)
router.route('/grados').get(controller.GetGrados)
router.route('/areas').get(controller.GetAreas)

module.exports = router;