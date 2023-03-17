const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const upload = require('../middleware/upload-img');
const adminFormValidation = require('../middleware/admin-form-validation');


router.get('/', adminController.indexAdmin);
router.post('/', adminController.logarAdmin);

router.get('/login', adminController.loginAdmin);


router.get('/products', adminController.adminProducts);

router.get('/add', adminController.addProducts);
//inserir middleware nesta rota:
router.post('/products', upload.array("imagem", 3),  adminController.createProducts);

router.get('/delete/:id', adminController.deleteView);
router.delete('/delete/:id', adminController.deleteProducts);

router.get('/update/:id', upload.array("imagem", 3), adminController.updateProducts);
router.put('/update/:id', upload.array("imagem", 3), adminController.update)
router.post('/create', upload.array("imagem", 3), adminFormValidation, adminController.createProducts);

router.get('/delete/:id', adminController.deleteView);
router.delete('/delete/:id', adminController.deleteProducts);

router.get('/update/:id', adminController.updateProducts);
router.put('/update/:id', adminController.update)

router.get('/categorias', adminController.adminCategorias);
router.get('/categorias/add', adminController.addCategoria);
router.post('/categorias/create', adminController.createCategoria);
router.get('/categorias/update/:id', adminController.updateCategoriaView);
router.put('/categorias/update/:id', adminController.updateCategoria);
router.delete('/categorias/delete/:id', adminController.deleteCategoria);

router.get('/marcas', adminController.adminMarcas);
router.get('/marcas/add', adminController.addMarcas);
router.post('/marcas/create', adminController.createMarcas);
router.get('/marcas/update/:id', adminController.updateMarcasView);
router.put('/marcas/update/:id', adminController.updateMarcas);
router.delete('/marcas/delete/:id', adminController.deleteMarcas);

router.get('/usuarios', adminController.adminUsuarios);
router.get('/usuarios/add', adminController.addUsuarios);
router.post('/usuarios/create', adminController.createUsuarios);
router.get('/usuarios/update/:id', adminController.updateUsuariosView);
router.put('/usuarios/update/:id', adminController.updateUsuarios);
router.delete('/usuarios/delete/:id', adminController.deleteUsuarios);

module.exports = router;